# Delete Old Blogs Script

## Overview
Scripts to delete blog posts from October 8, 2024 and before from the database.

## Available Scripts

### 1. Safe Version (Recommended)
**Command**: `npm run blogs:delete-old-safe`

This version:
- ✅ Shows all blogs that will be deleted
- ✅ Asks for confirmation (type "DELETE" to confirm)
- ✅ Can be cancelled safely
- ✅ Shows detailed information before deletion

### 2. Direct Version
**Command**: `npm run blogs:delete-old`

This version:
- ⚠️ Shows blogs but deletes immediately
- ⚠️ No confirmation prompt
- ⚠️ Use with caution

## Usage

### Step 1: Review What Will Be Deleted
```bash
npm run blogs:delete-old-safe
```

The script will show:
- Total number of blogs to delete
- List of all blogs with title, slug, category, and date
- Confirmation prompt

### Step 2: Confirm Deletion
When prompted, type `DELETE` (in uppercase) to confirm:
```
Type 'DELETE' to confirm deletion (or anything else to cancel): DELETE
```

Type anything else to cancel.

## What Gets Deleted

**Cutoff Date**: October 8, 2024 (23:59:59 UTC)

All blog posts with `date` field on or before this date will be deleted.

## Example Output

```
🗑️  Blog Deletion Script
════════════════════════════════════════════════════════════════════════════════

📅 Cutoff Date: 2024-10-08T23:59:59.999Z
   Deleting all blogs from 10/8/2024 and before

📊 Found 15 blog(s) to delete.

📋 Blogs to be deleted:
────────────────────────────────────────────────────────────────────────────────
1. How to Improve Your Website SEO
   Slug: how-to-improve-website-seo
   Category: SEO
   Date: 9/15/2024

2. Best Web Design Practices
   Slug: best-web-design-practices
   Category: Web Design
   Date: 8/20/2024

... (more blogs)
────────────────────────────────────────────────────────────────────────────────

⚠️  WARNING: This action cannot be undone!
⚠️  You are about to delete 15 blog post(s).

Type 'DELETE' to confirm deletion (or anything else to cancel): DELETE

🔄 Deleting blogs...

✅ Successfully deleted 15 blog post(s)!

📊 Remaining blogs in database: 42

✨ Script completed successfully!
```

## Safety Features

### Safe Version (`blogs:delete-old-safe`)
1. Lists all blogs before deletion
2. Requires explicit confirmation
3. Can be cancelled at any time
4. Shows remaining count after deletion

### Both Versions
- Uses Prisma transactions
- Proper error handling
- Detailed logging
- Database connection cleanup

## Customizing the Date

To change the cutoff date, edit the script file:

**File**: `scripts/delete-old-blogs-safe.ts` or `scripts/delete-old-blogs.ts`

**Line to change**:
```typescript
const cutoffDate = new Date("2024-10-08T23:59:59.999Z");
```

**Examples**:
```typescript
// Delete blogs before January 1, 2024
const cutoffDate = new Date("2024-01-01T00:00:00.000Z");

// Delete blogs before June 30, 2024
const cutoffDate = new Date("2024-06-30T23:59:59.999Z");

// Delete blogs before December 31, 2023
const cutoffDate = new Date("2023-12-31T23:59:59.999Z");
```

## Troubleshooting

### Error: "Cannot find module"
Make sure you have ts-node installed:
```bash
npm install
```

### Error: "Database connection failed"
Check your `.env` file has correct database credentials:
```
DATABASE_URL="your-database-url"
```

### Error: "Permission denied"
Make sure you have write access to the database.

## Backup Recommendation

⚠️ **IMPORTANT**: Before running the deletion script, consider backing up your database:

```bash
# For PostgreSQL
pg_dump -U username -d database_name > backup_$(date +%Y%m%d).sql

# For MySQL
mysqldump -u username -p database_name > backup_$(date +%Y%m%d).sql
```

Or use your hosting provider's backup feature.

## Rollback

If you accidentally delete blogs, you can restore from backup:

```bash
# For PostgreSQL
psql -U username -d database_name < backup_20240321.sql

# For MySQL
mysql -u username -p database_name < backup_20240321.sql
```

## Notes

- The script uses the `date` field from the BlogPost model
- Deletion is permanent and cannot be undone
- The script shows UTC dates
- All blogs with date <= October 8, 2024 will be deleted
- The script does NOT delete associated images or files

## Support

If you encounter issues:
1. Check the error message
2. Verify database connection
3. Ensure Prisma schema is up to date
4. Check that BlogPost model exists

---

**Created**: March 2026  
**Last Updated**: March 2026  
**Version**: 1.0.0
