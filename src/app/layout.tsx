import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";

import { Providers } from "@/components/Providers";
import StyledComponentsRegistry from "@/lib/styled-components-registry";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deviana-portifolio.vercel.app"),
  title: {
    default: "Matheus Viana | Front-end Developer",
    template: "%s | Matheus Viana",
  },
  description:
    "Portfolio profissional de desenvolvedor frontend com Next.js, TypeScript e foco em UX, performance e design moderno.",
  openGraph: {
    title: "Matheus Viana | Front-end Developer",
    description:
      "Projetos, skills e experiencia em frontend moderno com React e Next.js.",
    type: "website",
    locale: "pt_BR",
    url: "https://deviana-portifolio.vercel.app",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
