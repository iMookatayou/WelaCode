// app/layout.tsx
import type { Metadata } from "next";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://welacode.vercel.app"), // change to your real Vercel URL
  title: "WelaCode",
  description: "WelaCode – Modern authentication and web experience.",
  icons: {
    icon: "/favicon.ico",      // put favicon.ico in /public
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "WelaCode",
    siteName: "WelaCode",
    description: "Authentication and web platform by WelaCode.",
    url: "https://welacode.vercel.app", 
    type: "website",
    images: [
      {
        url: "/images/CropWelaCode1.png", 
        width: 1200,
        height: 630,
        alt: "WelaCode",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WelaCode",
    description: "Authentication and web platform by WelaCode.",
    images: ["/images/CropWelaCode1.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`wc-body ${inter.variable}`}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
