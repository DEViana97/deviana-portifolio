import { NextResponse } from "next/server";
import { z } from "zod";

const payloadSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    payloadSchema.parse(body);

    // Mock response for demo portfolio contact flow.
    return NextResponse.json({ message: "Mensagem recebida com sucesso." }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Dados invalidos." }, { status: 400 });
  }
}
