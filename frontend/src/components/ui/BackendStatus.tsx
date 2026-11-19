
"use client";

import { useEffect, useState } from "react";
import { checkBackendHealth } from "@/lib/api";
import { CheckCircle, XCircle, LoaderCircle } from "lucide-react";

type Status = "checking" | "connected" | "error";

export default function BackendStatus() {
  const [status, setStatus] = useState<Status>("checking");

  useEffect(() => {
    checkBackendHealth()
      .then(() => setStatus("connected"))
      .catch(() => setStatus("error"));
  }, []);

  return (
    <div className="mt-4 flex items-center justify-center gap-2 text-xs">
      {status === "checking" && (
        <>
          <LoaderCircle size={14} className="animate-spin" />
          Checking backend...
        </>
      )}

      {status === "connected" && (
        <>
          <CheckCircle size={14} className="text-green-400" />
          Backend connected
        </>
      )}

      {status === "error" && (
        <>
          <XCircle size={14} className="text-red-400" />
          Backend unavailable
        </>
      )}
    </div>
  );
}
