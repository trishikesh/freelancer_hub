// Check environment variables
console.log('\n🔍 Environment Variables Check:');
console.log('================================\n');

console.log('GMAIL_USER:', process.env.GMAIL_USER ? '✅ Set' : '❌ Not set');
console.log('GMAIL_APP_PASSWORD:', process.env.GMAIL_APP_PASSWORD ? '✅ Set' : '❌ Not set');

if (process.env.GMAIL_USER) {
  console.log('\nEmail configured for:', process.env.GMAIL_USER);
}

if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
  console.log('\n⚠️ WARNING: Missing environment variables!');
  console.log('Please check .env.local file');
} else {
  console.log('\n✅ All environment variables are configured!');
}

console.log('\n================================\n');
