import type { Metadata } from "next";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://welacode.vercel.app"
);

export const metadata: Metadata = {
  metadataBase: siteUrl,

  title: {
    default: "WelaCode · Software Studio",
    template: "%s · WelaCode",
  },

  description: "Calm, reliable web apps and internal tools.",

  icons: {
    icon: "/CropwelaCode3.png",
    shortcut: "/CropwelaCode3.png",
    apple: "/CropwelaCode3.png",
  },

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: "WelaCode · Software Studio",
    siteName: "WelaCode",
    description: "Calm, reliable web apps and internal tools.",
    url: siteUrl,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/CropWelaCode1.png",
        width: 1200,
        height: 630,
        alt: "WelaCode",
      },
    ],
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
