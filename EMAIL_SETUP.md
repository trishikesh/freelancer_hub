# Email Setup Guide - Contact Form

## Overview
Your contact form is now configured to send emails to **tanya.24.rishikesh@gmail.com** using Gmail's SMTP service.

## What Happens When Someone Submits the Form

1. **Email to Business** → Sent to: `tanya.24.rishikesh@gmail.com`
   - Contains full contact form details
   - Formatted HTML email
   - Subject: "New Contact Form Submission from [Name]"

2. **Email to Client** → Sent to: Submitter's email address
   - Confirmation email
   - Thanks them for contacting
   - Echoes back their message

## Setup Instructions

### Step 1: Generate Gmail App Password

1. Go to: **https://myaccount.google.com/apppasswords**
2. Make sure 2-Step Verification is enabled (Google will guide you if not)
3. Select:
   - **App:** Mail
   - **Device:** Windows Computer (or your device)
4. Click **Generate**
5. Google will show a 16-character password (with spaces)
6. **Copy this password** (you'll need it next)

### Step 2: Update `.env.local` File

Open `.env.local` in your project and update with your Gmail info:

```env
GMAIL_USER=tanya.24.rishikesh@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
```

**Example:**
```env
GMAIL_USER=tanya.24.rishikesh@gmail.com
GMAIL_APP_PASSWORD=abcd efgh ijkl mnop
```

⚠️ **Important:**
- Keep the spaces in the app password
- Do NOT use your regular Gmail password
- Do NOT commit `.env.local` to Git (already in .gitignore)

### Step 3: Restart Dev Server

```bash
npm run dev
```

## Testing the Email

1. Go to: `http://localhost:3000/contact`
2. Fill out the form completely
3. Click "Send Message"
4. Check:
   - ✅ Success message appears
   - ✅ Email received at tanya.24.rishikesh@gmail.com
   - ✅ Confirmation email sent to submitter's email

## Troubleshooting

### "Failed to send email" Error

1. **Check credentials:**
   - Is `GMAIL_USER` correct?
   - Is `GMAIL_APP_PASSWORD` correct? (16 chars with spaces)
   - Did you use App Password, not regular password?

2. **Check 2-Step Verification:**
   - Go to: https://myaccount.google.com/security
   - Enable "2-Step Verification" if not already enabled

3. **Regenerate App Password:**
   - Sometimes the first one doesn't work
   - Generate a new one and update `.env.local`

4. **Check Node Server Logs:**
   - Look at the terminal running `npm run dev`
   - Error messages will appear there

### Test Email Not Received

1. Check spam/junk folder
2. Verify email address is correct in `.env.local`
3. Try testing with a different email first

## Email Template Details

### Business Email (received by tanya.24.rishikesh@gmail.com)
```
Subject: New Contact Form Submission from [Name]

Contains:
- Full Name
- Email Address
- Phone Number
- Business Name
- Complete Message
```

### Client Email (sent to form submitter)
```
Subject: We received your message!

Contains:
- Greeting with their name
- Confirmation message
- Echo of their submitted information
- Professional sign-off
```

## Environment Variables in Production

When deploying to production (Vercel, Netlify, etc.):

1. **Do NOT upload `.env.local`** (it's in .gitignore)
2. **Add environment variables in your hosting dashboard:**
   - Vercel: Settings → Environment Variables
   - Netlify: Site settings → Build & deploy → Environment
   - Other hosts: Check their documentation

**Example for Vercel:**
```
GMAIL_USER = tanya.24.rishikesh@gmail.com
GMAIL_APP_PASSWORD = xxxx xxxx xxxx xxxx
```

## Security Notes

✅ **Good Practices:**
- Using App Password instead of main Gmail password
- Keeping `.env.local` in .gitignore
- Not committing credentials to Git
- Different email per environment

❌ **Never:**
- Use your main Gmail password
- Commit `.env.local` to Git
- Share `GMAIL_APP_PASSWORD` publicly
- Display error messages with credentials

## API Endpoint

**Route:** `POST /api/contact`

**Request Body:**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "businessName": "ABC Company",
  "message": "I'm interested in your services..."
}
```

**Success Response (200):**
```json
{
  "message": "Email sent successfully!"
}
```

**Error Response (400/500):**
```json
{
  "message": "Error description",
  "error": "Technical error details"
}
```

## Next Steps

1. Generate your Gmail App Password
2. Update `.env.local`
3. Test the contact form
4. Deploy with environment variables set

---

**Your email service is ready to use! 🚀**
