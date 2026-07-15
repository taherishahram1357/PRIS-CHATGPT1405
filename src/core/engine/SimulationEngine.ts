import { calculateImpact, type ImpactResult } from './ImpactEngine';
import type { Dependency } from '../domain/dependency';

export interface ScenarioResult {
  delayDays: number;
  impact: ImpactResult;
}

export function simulateDelay(
  nodeId: string,
  delayDays: number,
  dependencies: Dependency[]
): ScenarioResult {
  return {
    delayDays,
    impact: calculateImpact(nodeId, dependencies),
  };
}
