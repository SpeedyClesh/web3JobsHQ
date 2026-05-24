import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "About — Web3 Jobs HQ",
  description: "Agency for Web3 Job Opportunities & Services.",
};

export default function About() {
  return (
    <>
      <Navbar />
      <main><AboutPage /></main>
      <Footer />
    </>
  );
}
