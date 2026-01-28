#!/usr/bin/env node

// Test script for email API connection
const http = require('http');

const testData = {
  fullName: "Email Connection Test",
  email: "testverify@example.com",
  phone: "+91 9876543210",
  businessName: "Email Test Company",
  message: "This is an automated test to verify the email connection is working with your actual Gmail credentials."
};

const postData = JSON.stringify(testData);

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/contact',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = http.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('\n✅ API Response Status:', res.statusCode);
    console.log('✅ Response Message:', data);
    
    if (res.statusCode === 200) {
      console.log('\n✨ SUCCESS! Email connection is working!');
      console.log('📧 Emails should be arriving at: tanya.24.rishikesh@gmail.com');
      console.log('📧 Confirmation email sent to: testverify@example.com');
    } else {
      console.log('\n⚠️ Check .env.local credentials');
    }
  });
});

req.on('error', (e) => {
  console.error('\n❌ Error:', e.message);
  console.error('❌ Make sure dev server is running on port 3000');
});

console.log('🔄 Testing email API connection...\n');
req.write(postData);
req.end();
