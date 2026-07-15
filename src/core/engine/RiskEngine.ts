import type { RiskLevel } from '../domain/risk';

export function calculateRiskLevel(score: number): RiskLevel {
  if (score >= 80) return 'Critical';
  if (score >= 60) return 'High';
  if (score >= 40) return 'Medium';
  return 'Low';
}

export function calculateRiskScore(
  probability: number,
  impact: number
): number {
  return Math.round(probability * impact);
}
