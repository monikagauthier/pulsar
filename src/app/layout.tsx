import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

/**
 * Webfonts via next/font (self-hosted at build time — no runtime CDN call).
 * Requires network access to the Google Fonts source during `next build`.
 * In fully offline environments, remove these and the CSS fallback stacks
 * in globals.css take over automatically.
 */
const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PULSAR — Domínio da Pulverização Agrícola",
  description:
    "PULSAR é o treinamento técnico definitivo em pulverização agrícola: tecnologia de aplicação, regulagem, inspeção e boas práticas operacionais para operar com precisão no campo.",
  authors: [{ name: "PULSAR" }],
  openGraph: {
    title: "PULSAR — Domínio da Pulverização Agrícola",
    description:
      "Treinamento técnico em tecnologia de aplicação, regulagem e boas práticas operacionais na pulverização agrícola.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#10271d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
