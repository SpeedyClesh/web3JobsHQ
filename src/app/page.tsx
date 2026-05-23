import Navbar            from "@/components/Navbar";
import Hero              from "@/components/Hero";
import StatsBar          from "@/components/StatsBar";
import ChainFilter       from "@/components/ChainFilter";
import JobListings       from "@/components/JobListings";
import CTABanner         from "@/components/CTABanner";
import WinsAndNewsletter from "@/components/WinsAndNewsletter";
import SalaryIndex       from "@/components/SalaryIndex";
import ProvidersMarquee  from "@/components/ProvidersMarquee";
import Footer            from "@/components/Footer";
import ScrollObserver    from "@/components/ScrollObserver";

export default function HomePage() {
  return (
    <>
      <ScrollObserver />
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <ChainFilter />
        <div className="fade-up"><JobListings /></div>
        <div className="fade-up"><CTABanner /></div>
        <div className="fade-up"><WinsAndNewsletter /></div>
        <div className="fade-up"><SalaryIndex /></div>
        <div className="fade-up"><ProvidersMarquee /></div>
      </main>
      <Footer />
    </>
  );
}
