import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobBoard from "@/components/JobBoard";

export const metadata: Metadata = {
  title: "Browse Web3 Jobs — Web3 Jobs HQ",
  description: "Find your next web3 role. Filter by chain, category, salary, and location. Verified listings updated daily.",
};

export default function JobsPage() {
  return (
    <>
      <Navbar />
      <main>
        <JobBoard />
      </main>
      <Footer />
    </>
  );
}
