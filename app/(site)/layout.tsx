import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "WelaCode Group | Software Studio",
  description:
    "WelaCode Group – Software studio focused on clean web applications, thoughtful UX, and long-lasting systems.",
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="wc-main">{children}</main>
      <Footer />
    </>
  );
}
