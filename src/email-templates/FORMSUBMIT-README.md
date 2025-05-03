# Using FormSubmit.co for Contact Form

I've implemented a simpler solution for the contact form using [FormSubmit.co](https://formsubmit.co/), a free email sending service that doesn't require any API keys or complex setup.

## How It Works

1. The contact form now uses the Fetch API to send form data directly to FormSubmit.co
2. FormSubmit.co then forwards the email to markjoseph475@gmail.com
3. No API keys or external accounts are required

## Benefits of This Approach

1. **No Setup Required**: No need to create accounts or get API keys
2. **Free Service**: FormSubmit.co offers a free tier that's sufficient for most small businesses
3. **Reliable**: FormSubmit.co is specifically designed for handling form submissions
4. **Simple Implementation**: Uses standard web technologies (Fetch API)

## First-Time Use

The first time someone submits the form, FormSubmit.co will send a confirmation email to markjoseph475@gmail.com. You'll need to click the activation link in that email to confirm you want to receive form submissions.

After confirmation, all future form submissions will be sent directly to markjoseph475@gmail.com without requiring any additional steps.

## How to Test

1. Run your application locally or deploy it
2. Fill out the contact form and submit it
3. Check markjoseph475@gmail.com for the confirmation email (first time only)
4. After confirming, submit the form again to see the actual form submission

## Customization Options

If you want to customize the email behavior, FormSubmit.co offers several options:

1. **Custom Subject**: Already implemented - "New Photo Booth Booking Request"
2. **Custom Redirect**: You can add a `_next` parameter to redirect users after submission
3. **Custom Fields**: All form fields are automatically included in the email

For more advanced options, visit the [FormSubmit.co documentation](https://formsubmit.co/).

## Troubleshooting

If emails are not being received:

1. Check if you've confirmed the initial activation email
2. Check your spam folder
3. Verify that the email address (markjoseph475@gmail.com) is correct in the code
4. Check the browser console for any errors during form submission

This solution should work reliably without requiring any additional setup or maintenance.
