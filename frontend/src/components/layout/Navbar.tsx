
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-white/10 px-6 py-5 md:px-12">
      <Link href="/" className="flex items-center gap-2">
        <div className="rounded-lg bg-violet-600 p-2">
          <ShieldCheck size={20} className="text-white" />
        </div>
        <span className="text-xl font-bold tracking-tight">
          Ghost<span className="text-violet-400">Check</span>
        </span>
      </Link>

      <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
        <a href="#how-it-works" className="hover:text-white">
          How it works
        </a>
        <a href="#about" className="hover:text-white">
          About
        </a>
      </div>

      <a
        href="#analyzer"
        className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-violet-200"
      >
        Check a job
      </a>
    </nav>
  );
}
