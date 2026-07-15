import type { Dependency } from '../domain/dependency';

export interface ImpactResult {
  affectedNodes: string[];
  totalImpact: number;
}

export function calculateImpact(
  startNode: string,
  dependencies: Dependency[]
): ImpactResult {
  const visited = new Set<string>();
  let score = 0;

  function traverse(node: string) {
    const next = dependencies.filter(d => d.from === node);

    for (const dependency of next) {
      if (!visited.has(dependency.to)) {
        visited.add(dependency.to);
        score += dependency.impactScore;
        traverse(dependency.to);
      }
    }
  }

  traverse(startNode);

  return {
    affectedNodes: Array.from(visited),
    totalImpact: score,
  };
}
