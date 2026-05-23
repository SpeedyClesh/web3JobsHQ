import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web3 Jobs HQ — Agency for Web3 Job Opportunities & Services",
  description:
    "The verified HQ for web3 jobs and talent. Curated roles, vetted employers, and the tools Jobbers need to win.",
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "Web3 Jobs HQ",
    description: "Agency for Web3 Job Opportunities & Services",
    images: ["/banner.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
      </head>
      <body>{children}</body>
    </html>
  );
}
