import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobWins from "@/components/JobWins";

export const metadata: Metadata = {
  title: "Job Wins & Diaries — Web3 Jobs HQ",
  description: "Real Jobbers, real placements. Read success stories from the Web3 Jobs HQ community and share your own win.",
};

export default function JobWinsPage() {
  return (
    <>
      <Navbar />
      <main><JobWins /></main>
      <Footer />
    </>
  );
}
