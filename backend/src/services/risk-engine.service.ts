
import {
  JobAnalysis,
  RiskLevel,
  RiskSignal,
} from "../types/analysis.types";

interface RiskRule {
  id: string;
  title: string;
  description: string;
  points: number;
  severity: "low" | "medium" | "high";
  test: (text: string) => boolean;
}

const rules: RiskRule[] = [
  {
    id: "missing-salary",
    title: "Salary information missing",
    description:
      "The job posting does not appear to disclose salary information.",
    points: 10,
    severity: "low",
    test: (text) =>
      !/\b(salary|compensation|₹|inr|\$|usd|pay range|per annum|lpa)\b/i.test(text),
  },
  {
    id: "missing-company",
    title: "Company information unclear",
    description:
      "The posting does not clearly identify the hiring company.",
    points: 15,
    severity: "medium",
    test: (text) =>
      !/\b(company|employer|organization|technologies|pvt\.?\s*ltd|inc\.?)\b/i.test(text),
  },
  {
    id: "vague-description",
    title: "Limited job details",
    description:
      "The job posting contains little information about actual responsibilities.",
    points: 10,
    severity: "medium",
    test: (text) =>
      !/\b(responsibilities|you will|role involves|what you'll do|job duties)\b/i.test(text),
  },
  {
    id: "experience-mismatch",
    title: "Potentially unrealistic experience requirements",
    description:
      "The posting may expect extensive experience for an entry-level position.",
    points: 20,
    severity: "high",
    test: (text) =>
      /\b(entry[- ]level|fresher|junior)\b/i.test(text) &&
      /\b(5|6|7|8|9|10)\+?\s*(years|yrs)\b/i.test(text),
  },
  {
    id: "suspicious-instructions",
    title: "Potentially suspicious application instructions",
    description:
      "The posting contains language associated with risky payment or financial requests.",
    points: 20,
    severity: "high",
    test: (text) =>
      /\b(pay a registration fee|pay to apply|send money to apply|upfront payment)\b/i.test(text),
  },
  {
    id: "old-posting",
    title: "Potentially old posting",
    description:
      "The posting mentions a date or duration suggesting it may be old. Verify the original listing date.",
    points: 15,
    severity: "medium",
    test: (text) =>
      /\b(90|120|150|180)\s+days?\s+ago\b/i.test(text),
  },
  {
    id: "repeated-posting",
    title: "Repeated hiring language",
    description:
      "The description mentions repeated reposting or continuous hiring. This requires further verification.",
    points: 10,
    severity: "low",
    test: (text) =>
      /\b(reposted multiple times|repeatedly reposted|continuously hiring)\b/i.test(text),
  },
];

function getRiskLevel(score: number): RiskLevel {
  if (score <= 20) return "low";
  if (score <= 45) return "moderate";
  if (score <= 70) return "elevated";
  return "high";
}

export function analyzeJob(text: string): JobAnalysis {
  const signals: RiskSignal[] = [];

  for (const rule of rules) {
    if (rule.test(text)) {
      signals.push({
        id: rule.id,
        title: rule.title,
        description: rule.description,
        severity: rule.severity,
        points: rule.points,
      });
    }
  }

  const riskScore = Math.min(
    100,
    signals.reduce((total, signal) => total + signal.points, 0)
  );

  const recommendations = [
    "Verify the company through its official website.",
    "Check whether the job is still accepting applications.",
    "Never pay money to secure an interview or job.",
  ];

  return {
    id: crypto.randomUUID(),
    riskScore,
    riskLevel: getRiskLevel(riskScore),
    confidence: signals.length >= 3 ? "medium" : "low",
    signals,
    recommendations,
    analyzedAt: new Date().toISOString(),
  };
}
