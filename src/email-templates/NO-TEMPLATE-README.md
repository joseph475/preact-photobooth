# Using EmailJS Without a Template

This guide explains how to use EmailJS to send contact form submissions to markjoseph475@gmail.com without creating an email template.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS website](https://www.emailjs.com/) and sign up for a free account.
2. The free tier allows 200 emails per month, which should be sufficient for most small businesses.

## Step 2: Add an Email Service

1. After signing in, go to the "Email Services" tab.
2. Click "Add New Service".
3. Choose your email provider (Gmail, Outlook, etc.).
4. Follow the instructions to connect your email account.
5. Name your service (e.g., "photobooth-contact").
6. Note down the **Service ID** for later use.

## Step 3: Get Your User ID

1. Go to "Account" > "API Keys".
2. Copy your **Public Key** (this is your User ID).

## Step 4: Update the Contact.jsx File

1. Open the `src/pages/Contact.jsx` file.
2. Find these lines in the code:

```javascript
// Your EmailJS User ID (Public Key)
const userID = 'YOUR_USER_ID'; // Replace with your EmailJS user ID

// Later in the code:
// Send email directly without a template
// Note: You still need a service ID from EmailJS
const serviceID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
```

3. Replace them with your actual EmailJS credentials:

```javascript
const userID = 'your_user_id'; // The Public Key (User ID) you noted in Step 3
const serviceID = 'your_service_id'; // The Service ID you noted in Step 2
```

## How It Works Without a Template

Instead of using a pre-defined template in EmailJS, we're formatting the email content directly in the code:

1. We create an `emailContent` object with all the necessary fields:
   - `to_name`: The recipient's name
   - `to_email`: The recipient's email (markjoseph475@gmail.com)
   - `from_name`: The sender's name (from the form)
   - `from_email`: The sender's email (from the form)
   - `subject`: The email subject
   - `message`: The formatted message content

2. We send this content using the `gmail` template identifier, which tells EmailJS to use a basic email format.

## Testing the Form

1. Run your application locally or deploy it.
2. Fill out the contact form and submit it.
3. Check if the email is received at markjoseph475@gmail.com.
4. Verify that all form fields are correctly included in the email.

## Troubleshooting

- If emails are not being sent, check the browser console for any errors.
- Verify that your User ID and Service ID are correct.
- Make sure your email service is properly connected in your EmailJS account.
- If using Gmail, ensure you've allowed "Less secure app access" or set up an App Password if you have 2-factor authentication enabled.

## Advantages of Not Using a Template

1. **Simplicity**: No need to create and maintain a template in the EmailJS dashboard.
2. **Flexibility**: You can easily change the email format directly in your code.
3. **Faster Setup**: One less step in the EmailJS configuration process.

## Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS React Integration](https://www.emailjs.com/docs/examples/reactjs/)
