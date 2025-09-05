# EmailJS Setup Instructions

## 📧 Direct Email Sending Setup

To enable direct email sending from your contact form without opening external email clients, follow these steps:

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month)
3. Verify your email address

### 2. Add Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

### 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

```
Subject: {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
Sent from Portfolio Contact Form
```

4. Note down your **Template ID**

### 4. Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key**

### 5. Update Contact Component
Replace the placeholder values in `/src/components/contact/Contact.jsx`:

```javascript
const serviceId = 'YOUR_SERVICE_ID' // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID' // Replace with your Template ID  
const publicKey = 'YOUR_PUBLIC_KEY' // Replace with your Public Key
```

### 6. Test the Form
1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox for the message

## 🔒 Security Notes
- EmailJS handles email sending securely
- No sensitive data is exposed in frontend code
- Rate limiting prevents spam
- All emails are logged in EmailJS dashboard

## 📱 WhatsApp Alternative
Since WhatsApp doesn't allow direct messaging from web apps, the current implementation opens WhatsApp with a pre-filled message, which is the standard approach for web applications.

## 🆘 Troubleshooting
- Ensure all IDs are correctly copied
- Check EmailJS dashboard for error logs
- Verify email service is properly connected
- Test with a simple message first
