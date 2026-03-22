import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { ZodError, z } from "zod";

export const runtime = "nodejs";

const payloadSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  message: z.string().min(10),
});

const smtpSchema = z.object({
  SMTP_HOST: z.string().min(1),
  SMTP_PORT: z.coerce.number().int().positive(),
  SMTP_SECURE: z.enum(["true", "false"]).optional(),
  SMTP_USER: z.string().min(1),
  SMTP_PASS: z.string().min(1),
  CONTACT_RECEIVER_EMAIL: z.email().optional(),
  CONTACT_SENDER_EMAIL: z.email().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = payloadSchema.parse(body);

    const smtpConfigResult = smtpSchema.safeParse(process.env);
    if (!smtpConfigResult.success) {
      console.error("Contact API is missing SMTP environment variables.");
      return NextResponse.json({ message: "Servico de contato indisponivel." }, { status: 500 });
    }

    const config = smtpConfigResult.data;
    const receiverEmail = config.CONTACT_RECEIVER_EMAIL ?? config.SMTP_USER;
    const senderEmail = config.CONTACT_SENDER_EMAIL ?? config.SMTP_USER;

    const transporter = nodemailer.createTransport({
      host: config.SMTP_HOST,
      port: config.SMTP_PORT,
      secure: config.SMTP_SECURE === "true",
      auth: {
        user: config.SMTP_USER,
        pass: config.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `Portfolio <${senderEmail}>`,
      to: receiverEmail,
      replyTo: `${payload.name} <${payload.email}>`,
      subject: `Novo contato do portfolio - ${payload.name}`,
      text: [
        "Nova mensagem recebida pelo formulario do portfolio:",
        "",
        `Nome: ${payload.name}`,
        `Email: ${payload.email}`,
        "",
        "Mensagem:",
        payload.message,
      ].join("\n"),
    });

    return NextResponse.json({ message: "Mensagem recebida com sucesso." }, { status: 200 });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ message: "Dados invalidos." }, { status: 400 });
    }

    console.error("Failed to send contact email:", error);
    return NextResponse.json({ message: "Nao foi possivel enviar agora." }, { status: 500 });
  }
}
