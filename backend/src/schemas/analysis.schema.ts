
import { z } from "zod";

export const analysisSchema = z.object({
  jobDescription: z
    .string()
    .trim()
    .min(100, "Job description must contain at least 100 characters")
    .max(15000, "Job description cannot exceed 15000 characters"),
});

export type AnalysisInput = z.infer<typeof analysisSchema>;
