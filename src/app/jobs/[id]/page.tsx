import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobDetail from "@/components/JobDetail";
import { allJobs } from "@/lib/jobsData";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return allJobs.map(job => ({ id: String(job.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const job = allJobs.find(j => j.id === Number(id));
  if (!job) return { title: "Job not found — Web3 Jobs HQ" };
  return {
    title: `${job.title} at ${job.company} — Web3 Jobs HQ`,
    description: job.description,
  };
}

export default async function JobDetailPage({ params }: Props) {
  const { id } = await params;
  const job = allJobs.find(j => j.id === Number(id));
  if (!job) notFound();
  const related = allJobs.filter(j => j.id !== job.id && (j.category === job.category || j.chain === job.chain)).slice(0, 3);
  return (
    <>
      <Navbar />
      <main>
        <JobDetail job={job} related={related} />
      </main>
      <Footer />
    </>
  );
}
