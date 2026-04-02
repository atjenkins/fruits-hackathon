import type { Metadata } from "next";
import { Geist, Geist_Mono, Fredoka } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thebigsqueeze.vercel.app"),
  title: "The Big Squeeze | AI Hackathon",
  description:
    "A one-day AI hackathon by Neural Nectar. Build something with AI. Show the group what you made. April 11, 2026.",
  icons: {
    icon: [
      { url: "/branding/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/branding/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/branding/apple-touch-icon-180.png",
  },
  openGraph: {
    title: "The Big Squeeze | AI Hackathon",
    description:
      "A one-day AI hackathon by Neural Nectar. Build something with AI. Show the group what you made.",
    images: [{ url: "/branding/og-image-1200x630.png", width: 1200, height: 630 }],
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fredoka.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
};

export default RootLayout;
