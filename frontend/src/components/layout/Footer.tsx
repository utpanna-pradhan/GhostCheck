
import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <ShieldCheck size={18} className="text-violet-400" />
          <span className="font-semibold">GhostCheck</span>
        </div>

        <p className="text-sm text-gray-500">
          Make informed career decisions.
        </p>

        <p className="text-xs text-gray-600">
          © 2026 GhostCheck
        </p>
      </div>
    </footer>
  );
}
