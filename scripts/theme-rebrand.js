#!/usr/bin/env node

/**
 * Master Theme & Branding Replacement Script
 * 
 * This script performs a complete theme transformation:
 * 1. Replaces all blue colors (#111184) with orange (#ff4b11)
 * 2. Replaces all "WebDesino" branding with "Sitekaro"
 * 
 * Usage: node scripts/theme-rebrand.js
 */

const { execSync } = require('child_process');
const path = require('path');

console.log('╔════════════════════════════════════════════════════════════╗');
console.log('║   🎨 Complete Theme & Branding Transformation Script      ║');
console.log('║   Blue → Orange | WebDesino → Sitekaro                    ║');
console.log('╚════════════════════════════════════════════════════════════╝\n');

try {
  // Step 1: Color Replacement
  console.log('📍 STEP 1: Replacing colors (Blue → Orange)...\n');
  execSync('node scripts/replace-colors.js', { stdio: 'inherit' });
  
  console.log('\n' + '═'.repeat(60) + '\n');
  
  // Step 2: Branding Replacement
  console.log('📍 STEP 2: Replacing branding (WebDesino → Sitekaro)...\n');
  execSync('node scripts/replace-branding.js', { stdio: 'inherit' });
  
  console.log('\n' + '═'.repeat(60));
  console.log('\n✨ COMPLETE! Theme transformation finished successfully!\n');
  console.log('📋 Next steps:');
  console.log('   1. Restart your development server');
  console.log('   2. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)');
  console.log('   3. Verify the changes in your browser\n');
  
} catch (error) {
  console.error('\n❌ Error during transformation:', error.message);
  process.exit(1);
}
