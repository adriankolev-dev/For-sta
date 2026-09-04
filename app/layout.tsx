import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "adrexio × Forèsta — Дигитален конфигуратор за мебели",
  description:
    "Проектно предложение от adrexio за Forèsta Furniture & Interiors — дигитална платформа за конфигуриране, визуализация, ценообразуване и поръчка на мебели по поръчка.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "48x48" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "adrexio × Forèsta — Дигитален конфигуратор за мебели",
    description:
      "Проектно предложение от adrexio за Forèsta Furniture & Interiors — дигитална платформа за конфигуриране, визуализация и поръчка на мебели по поръчка.",
    locale: "bg_BG",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bg"
      className={`${manrope.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
