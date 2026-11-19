
export type RiskLevel =
  | "low"
  | "moderate"
  | "elevated"
  | "high";

export type SignalSeverity =
  | "low"
  | "medium"
  | "high";

export interface RiskSignal {
  id: string;
  title: string;
  description: string;
  severity: SignalSeverity;
  points: number;
}

export interface JobAnalysis {
  id: string;
  riskScore: number;
  riskLevel: RiskLevel;
  confidence: "low" | "medium" | "high";
  signals: RiskSignal[];
  recommendations: string[];
  analyzedAt: string;
}
