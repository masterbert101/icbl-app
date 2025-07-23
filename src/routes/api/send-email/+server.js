import nodemailer from 'nodemailer';
import { json, error as kitError } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const { name, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'masterbunny00@gmail.com',
      pass: 'qpta rbdo ubad pzyd'
    }
  });

  try {
    await transporter.sendMail({
      from: '"Support Team" <support@yourcompany.com>',
      to: 'masterbunny00@gmail.com',
      subject: 'New Form Submission',
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`
    });
    return json({ message: 'Email sent successfully' });
  } catch (err) {
    console.error(err);
    throw kitError(500, 'Failed to send email');
  }
}
