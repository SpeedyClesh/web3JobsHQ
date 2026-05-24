import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProvidersPage from "@/components/ProvidersPage";

export const metadata: Metadata = {
  title: "Verified Providers — Web3 Jobs HQ",
  description: "Browse vetted web3 freelancers and agencies ready to hire.",
};

export default function Providers() {
  return (
    <>
      <Navbar />
      <main><ProvidersPage /></main>
      <Footer />
    </>
  );
}
