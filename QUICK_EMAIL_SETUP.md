# ⚡ Quick Setup - Email Configuration

## 3 Simple Steps

### Step 1: Get Gmail App Password
👉 Go to: https://myaccount.google.com/apppasswords
- Select: **Mail** + **Windows Computer**
- Generate password (16 chars like: `abcd efgh ijkl mnop`)
- Copy it

### Step 2: Update `.env.local`
```env
GMAIL_USER=tanya.24.rishikesh@gmail.com
GMAIL_APP_PASSWORD=abcd efgh ijkl mnop
```

### Step 3: Restart & Test
```bash
npm run dev
```
Then go to `http://localhost:3000/contact` and test!

---

## What Your Form Does Now

✉️ **2 Emails are sent:**
1. **To:** tanya.24.rishikesh@gmail.com
   - Subject: "New Contact Form Submission from [Name]"
   - Contains: All form details

2. **To:** Submitter's email
   - Subject: "We received your message!"
   - Confirmation: Thanks + echo of their info

---

## Files Created/Updated

✅ `app/api/contact/route.js` - Email API endpoint
✅ `app/components/ContactForm.jsx` - Form now sends to API
✅ `.env.local` - Gmail credentials (UPDATE THESE!)
✅ `package.json` - Added nodemailer dependency

---

## Common Issues

| Issue | Solution |
|-------|----------|
| "Invalid credentials" | Use App Password, not regular password |
| "2-Step not enabled" | Go to https://myaccount.google.com/security & enable it |
| Email not received | Check spam folder + verify email in .env.local |
| Dev server error | Restart with `npm run dev` |

---

## Status
- ✅ API route created
- ✅ Nodemailer installed
- ✅ ContactForm updated
- ⏳ **Waiting:** Gmail credentials in `.env.local`

**Ready to send emails once you add credentials!**
