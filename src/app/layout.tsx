import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Sora } from "next/font/google";

import { Providers } from "@/components/Providers";
import StyledComponentsRegistry from "@/lib/styled-components-registry";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
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
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=optional"
        />
      </head>
      <body className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
