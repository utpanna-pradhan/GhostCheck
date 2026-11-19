
"use client";

import { motion } from "framer-motion";
import BackendStatus from "@/components/ui/BackendStatus";
import {
  ArrowRight,
  ShieldCheck,
  ScanSearch,
  Zap,
  FileText,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const features = [
  {
    icon: ScanSearch,
    title: "Smart analysis",
    description: "Analyze job descriptions for suspicious patterns.",
  },
  {
    icon: ShieldCheck,
    title: "Explainable signals",
    description: "Understand exactly why a listing raises concerns.",
  },
  {
    icon: Zap,
    title: "Quick results",
    description: "Get useful insights before spending time applying.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090f] text-white">
      <Navbar />

      <section className="px-6 pb-24 pt-24 md:pt-32">
        <div className="mx-auto max-w-4xl text-center">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300"
          >
            <ShieldCheck size={16} />
            Your job search deserves better
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold leading-tight tracking-tight md:text-7xl"
          >
            Before you apply,
            <br />
            <span className="bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              check the job.
            </span>
          </motion.h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
            Not every job posting is worth your time.
            Analyze job descriptions, uncover potential risk signals,
            and make smarter career decisions.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-12 max-w-3xl rounded-2xl border border-white/10 bg-[#12121b] p-5 text-left shadow-2xl shadow-violet-950/20 md:p-8"
            id="analyzer"
          >
            <div className="mb-4 flex items-center gap-2">
              <FileText size={19} className="text-violet-400" />
              <h2 className="font-semibold">Analyze a job posting</h2>
            </div>

            <textarea
              placeholder="Paste the complete job description here..."
              className="min-h-52 w-full resize-y rounded-xl border border-white/10 bg-[#09090f] p-5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500"
            />

            <button
              disabled
              className="mt-5 flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-4 font-semibold text-white opacity-60"
            >
              Analyze Job
              <ArrowRight size={18} />
            </button>

            <p className="mt-4 text-center text-xs text-gray-500">
              Free analysis · No signup required
            </p>
            <BackendStatus />
          </motion.div>

        </div>
      </section>

      <section
        id="how-it-works"
        className="border-t border-white/5 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">
              Make every application count.
            </h2>
            <p className="mt-3 text-gray-400">
              A little research before applying goes a long way.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-white/10 bg-[#12121b] p-7 transition hover:border-violet-500/40"
                >
                  <Icon className="mb-5 text-violet-400" size={28} />
                  <h3 className="text-lg font-semibold">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
