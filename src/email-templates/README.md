# Setting Up EmailJS for Contact Form

This guide will help you set up EmailJS to send contact form submissions to markjoseph475@gmail.com.

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

## Step 3: Create an Email Template

1. Go to the "Email Templates" tab.
2. Click "Create New Template".
3. Name your template (e.g., "contact-form").
4. In the "Content" section, you can either:
   - Copy and paste the HTML from the `contact-form-template.html` file we've provided.
   - Or create your own template using the EmailJS template editor.
5. Make sure your template uses the same variable names as defined in the Contact.jsx file:
   - `{{from_name}}` - The name of the person submitting the form
   - `{{from_email}}` - The email of the person submitting the form
   - `{{phone}}` - The phone number
   - `{{event_date}}` - The event date
   - `{{event_time}}` - The event time
   - `{{venue_street}}` - The venue street address
   - `{{city}}` - The city
   - `{{province}}` - The province
   - `{{postal_code}}` - The postal code
   - `{{guests}}` - The number of guests
   - `{{service}}` - The selected service
   - `{{message}}` - The message
6. In the "To Email" field, enter: `markjoseph475@gmail.com`
7. Set the "From Name" field to use the template variable: `{{from_name}}`
8. Set the "From Email" field to use the template variable: `{{from_email}}`
9. Set a subject line (e.g., "New Photo Booth Booking Request from {{from_name}}")
10. Save the template and note down the **Template ID**.

## Step 4: Get Your User ID

1. Go to "Account" > "API Keys".
2. Copy your **Public Key** (this is your User ID).

## Step 5: Update the Contact.jsx File

1. Open the `src/pages/Contact.jsx` file.
2. Find these lines in the code:

```javascript
// Replace these with your actual EmailJS credentials
const serviceID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
const userID = 'YOUR_USER_ID'; // Replace with your EmailJS user ID
```

3. Replace them with your actual EmailJS credentials:

```javascript
const serviceID = 'your_service_id'; // The Service ID you noted in Step 2
const templateID = 'your_template_id'; // The Template ID you noted in Step 3
const userID = 'your_user_id'; // The Public Key (User ID) you noted in Step 4
```

## Step 6: Test Your EmailJS Setup

### Option 1: Using the Test HTML File

We've included a simple HTML test file that you can use to verify your EmailJS setup:

1. Open the `src/email-templates/test-emailjs.html` file in your browser.
2. Enter your EmailJS credentials (Service ID, Template ID, User ID).
3. Fill out the test form and click "Send Test Email".
4. Check if the email is received at markjoseph475@gmail.com.

This test file allows you to verify your EmailJS setup without running the full application.

### Option 2: Testing in the Application

1. Run your application locally or deploy it.
2. Fill out the contact form and submit it.
3. Check if the email is received at markjoseph475@gmail.com.
4. Verify that all form fields are correctly included in the email.

## Troubleshooting

- If emails are not being sent, check the browser console for any errors.
- Verify that all IDs (Service ID, Template ID, User ID) are correct.
- Make sure the template variables match the parameters sent from the Contact.jsx file.
- Check if the email service is properly connected in your EmailJS account.

## Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS React Integration](https://www.emailjs.com/docs/examples/reactjs/)
