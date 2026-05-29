import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const SMTP_HOST = process.env.SMTP_HOST || "korana.email";
const SMTP_PORT = Number(process.env.SMTP_PORT || "587");
const SMTP_USER = process.env.SMTP_USER || "";
const SMTP_PASS = process.env.SMTP_PASS || "";
const NOTIFY_TO = process.env.NOTIFY_TO || "admin@korana.email";
const SHEETS_WEBHOOK = process.env.SHEETS_WEBHOOK || "";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const timestamp = new Date().toISOString();
    const results: string[] = [];

    // 1. Send email notification via SMTP
    try {
      const transport = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: SMTP_PORT === 465,
        ...(SMTP_USER && SMTP_PASS ? { auth: { user: SMTP_USER, pass: SMTP_PASS } } : {}),
        tls: { rejectUnauthorized: false },
      });

      await transport.sendMail({
        from: `"Korana.ai Waitlist" <waitlist@korana.run>`,
        to: NOTIFY_TO,
        subject: `New waitlist signup: ${email}`,
        text: `New early access request:\n\nEmail: ${email}\nTime: ${timestamp}\n`,
        html: `<h2>New early access request</h2><p><strong>Email:</strong> ${email}</p><p><strong>Time:</strong> ${timestamp}</p>`,
      });
      results.push("email");
    } catch (e) {
      console.error("SMTP error:", e);
    }

    // 2. Append to Google Sheet via Apps Script webhook
    if (SHEETS_WEBHOOK) {
      try {
        await fetch(SHEETS_WEBHOOK, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, timestamp, source: "korana.ai" }),
        });
        results.push("sheet");
      } catch (e) {
        console.error("Sheets webhook error:", e);
      }
    }

    return NextResponse.json({ ok: true, stored: results });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
