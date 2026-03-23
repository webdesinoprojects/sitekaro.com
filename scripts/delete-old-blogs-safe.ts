import { PrismaClient } from "../lib/generated/prisma/index.js";
import * as readline from "readline";

const prisma = new PrismaClient();

// Create readline interface for user confirmation
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function deleteOldBlogs() {
  try {
    console.log("🗑️  Blog Deletion Script");
    console.log("═".repeat(80));
    console.log();

    // Define the cutoff date: October 8, 2024 at 23:59:59
    const cutoffDate = new Date("2024-10-08T23:59:59.999Z");
    
    console.log(`📅 Cutoff Date: ${cutoffDate.toISOString()}`);
    console.log(`   Deleting all blogs from ${cutoffDate.toLocaleDateString()} and before\n`);

    // First, count how many blogs will be deleted
    const countToDelete = await prisma.blogPost.count({
      where: {
        date: {
          lte: cutoffDate,
        },
      },
    });

    if (countToDelete === 0) {
      console.log("✅ No blogs found to delete.");
      rl.close();
      return;
    }

    console.log(`📊 Found ${countToDelete} blog(s) to delete.\n`);

    // Fetch the blogs that will be deleted (for logging)
    const blogsToDelete = await prisma.blogPost.findMany({
      where: {
        date: {
          lte: cutoffDate,
        },
      },
      select: {
        id: true,
        title: true,
        slug: true,
        date: true,
        category: true,
      },
      orderBy: {
        date: "desc",
      },
    });

    console.log("📋 Blogs to be deleted:");
    console.log("─".repeat(80));
    blogsToDelete.forEach((blog, index) => {
      console.log(
        `${index + 1}. ${blog.title}`
      );
      console.log(`   Slug: ${blog.slug}`);
      console.log(`   Category: ${blog.category}`);
      console.log(`   Date: ${blog.date.toLocaleDateString()}`);
      console.log();
    });
    console.log("─".repeat(80));
    console.log();

    // Ask for confirmation
    console.log("⚠️  WARNING: This action cannot be undone!");
    console.log(`⚠️  You are about to delete ${countToDelete} blog post(s).\n`);
    
    const answer = await askQuestion("Type 'DELETE' to confirm deletion (or anything else to cancel): ");

    if (answer.trim().toUpperCase() !== "DELETE") {
      console.log("\n❌ Deletion cancelled by user.");
      rl.close();
      return;
    }

    console.log("\n🔄 Deleting blogs...\n");

    // Delete the blogs
    const result = await prisma.blogPost.deleteMany({
      where: {
        date: {
          lte: cutoffDate,
        },
      },
    });

    console.log(`✅ Successfully deleted ${result.count} blog post(s)!\n`);

    // Show remaining blogs count
    const remainingCount = await prisma.blogPost.count();
    console.log(`📊 Remaining blogs in database: ${remainingCount}`);

    rl.close();

  } catch (error) {
    console.error("❌ Error deleting blogs:", error);
    rl.close();
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run the script
deleteOldBlogs()
  .then(() => {
    console.log("\n✨ Script completed successfully!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("\n💥 Script failed:", error);
    process.exit(1);
  });
