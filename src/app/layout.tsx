import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Return Ticket Media | AI Influencer Marketing by a 10M Follower Creator",
  description:
    "The only influencer agency run by someone who built 10M followers. AI-powered creator discovery for AI, SaaS, and fintech brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
