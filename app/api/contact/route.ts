import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

// Initialize SendGrid with your API key
// You'll need to add SENDGRID_API_KEY to your environment variables
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json()

    // Validate the required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Prepare the email content
    const msg = {
      to: 'info@chatswoodcatering.com.au', // Replace with your email
      from: 'info@chatswoodcatering.com.au', // This needs to be verified in SendGrid
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    }

    // Send the email
    await sgMail.send(msg)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
} 