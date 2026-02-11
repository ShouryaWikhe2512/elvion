import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel } from "next/font/google";

import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });

export const metadata: Metadata = {
  title: "PhishermanAI - Cybersecurity Firewall",
  description:
    "When AI Lies, We Detect. AI-powered cybersecurity defense against phishing, deepfakes, and synthetic threats.",
  generator: "v0.app",
  openGraph: {
    title: "PhishermanAI - Your Digital Firewall",
    description: "Fight the Upside Down of AI-generated threats",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={_cinzel.variable} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
