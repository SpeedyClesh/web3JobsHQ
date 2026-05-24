import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SalaryIndexPage from "@/components/SalaryIndexPage";

export const metadata: Metadata = {
  title: "Web3 Salary Index — Web3 Jobs HQ",
  description: "Real web3 salary data by role, chain, and experience. Updated monthly.",
};

export default function SalaryIndex() {
  return (
    <>
      <Navbar />
      <main><SalaryIndexPage /></main>
      <Footer />
    </>
  );
}
