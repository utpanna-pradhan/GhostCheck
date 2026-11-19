
import { Request, Response } from "express";
import { analysisSchema } from "../schemas/analysis.schema";
import { analyzeJob } from "../services/risk-engine.service";

export function analyzeJobController(
  req: Request,
  res: Response
) {
  const validation = analysisSchema.safeParse(req.body);

  if (!validation.success) {
    return res.status(400).json({
      success: false,
      message: "Invalid job description",
      errors: validation.error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      })),
    });
  }

  const result = analyzeJob(
    validation.data.jobDescription
  );

  return res.status(200).json({
    success: true,
    message: "Job analysis completed",
    data: result,
  });
}
