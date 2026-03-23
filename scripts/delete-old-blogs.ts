import { PrismaClient } from "../lib/generated/prisma/index.js";

const prisma = new PrismaClient();

async function deleteOldBlogs() {
  try {
    console.log("🗑️  Starting blog deletion process...\n");

    // Define the cutoff date: October 8, 2024 at 23:59:59
    const cutoffDate = new Date("2024-10-08T23:59:59.999Z");
    
    console.log(`📅 Cutoff Date: ${cutoffDate.toISOString()}`);
    console.log(`   (Deleting all blogs from ${cutoffDate.toLocaleDateString()} and before)\n`);

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
      },
      orderBy: {
        date: "desc",
      },
    });

    console.log("📋 Blogs to be deleted:");
    console.log("─".repeat(80));
    blogsToDelete.forEach((blog, index) => {
      console.log(
        `${index + 1}. ${blog.title}\n   Slug: ${blog.slug}\n   Date: ${blog.date.toLocaleDateString()}\n`
      );
    });
    console.log("─".repeat(80));
    console.log();

    // Confirm deletion
    console.log("⚠️  WARNING: This action cannot be undone!");
    console.log(`⚠️  About to delete ${countToDelete} blog post(s).\n`);

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

  } catch (error) {
    console.error("❌ Error deleting blogs:", error);
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
