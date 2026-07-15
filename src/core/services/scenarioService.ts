import { simulateDelay } from '../engine/SimulationEngine';
import { dependencies } from '../data/dependencies';

export function runDelayScenario(
  nodeId: string,
  delayDays: number
) {
  return simulateDelay(
    nodeId,
    delayDays,
    dependencies
  );
}
