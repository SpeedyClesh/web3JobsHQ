import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web3 Jobs HQ — Agency for Web3 Job Opportunities & Services",
  description:
    "The verified HQ for web3 jobs and talent. Curated roles, vetted employers, and the tools Jobbers need to win.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", rel: "icon" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", rel: "icon" },
    ],
  },
  openGraph: {
    title: "Web3 Jobs HQ — Agency for Web3 Job Opportunities & Services",
    description: "The verified HQ for web3 jobs and talent.",
    images: ["/banner.jpg"],
    siteName: "Web3 Jobs HQ",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Web3Jobhq",
    images: ["/banner.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
