import { risks } from '../data/risks';
import { calculateRiskScore } from '../engine/RiskEngine';

export function getRiskOverview() {
  return risks.map(risk => ({
    ...risk,
    calculatedScore: calculateRiskScore(
      risk.probability,
      risk.impact
    ),
  }));
}
