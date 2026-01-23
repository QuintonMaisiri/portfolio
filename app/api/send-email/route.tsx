import { NextResponse } from "next/server";
import * as nodemailer from "nodemailer";

export async function POST(request: Request) {
  const data = await request.json();

  const subject = "Email From Portfolio Site";
  const text = `This is a message from ${data.name} (${data.email}):\n\n${data.message}`;
  const to = "maisiriquinton@gmail.com";
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully", info });
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
