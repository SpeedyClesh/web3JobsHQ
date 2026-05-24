import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PitchAcademy from "@/components/PitchAcademy";

export const metadata: Metadata = {
  title: "Pitch Academy — Web3 Jobs HQ",
  description: "Cold DM scripts, pitch guides, portfolio tips and everything Jobbers need to land their next web3 role.",
};

export default function PitchAcademyPage() {
  return (
    <>
      <Navbar />
      <main><PitchAcademy /></main>
      <Footer />
    </>
  );
}
