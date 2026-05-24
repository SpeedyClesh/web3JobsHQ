import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HirePage from "@/components/HirePage";

export const metadata: Metadata = {
  title: "Post a Job — Web3 Jobs HQ",
  description: "Reach 4,200+ active web3 Jobbers. Post a verified role on Web3 Jobs HQ.",
};

export default function Hire() {
  return (
    <>
      <Navbar />
      <main><HirePage /></main>
      <Footer />
    </>
  );
}
