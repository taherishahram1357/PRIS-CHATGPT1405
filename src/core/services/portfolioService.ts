import { projects } from '../data/projects';
import { calculateRiskLevel } from '../engine/RiskEngine';

export function getPortfolioSummary() {
  const totalProjects = projects.length;

  const criticalProjects = projects.filter(
    project => calculateRiskLevel(project.riskScore) === 'Critical'
  ).length;

  const averageSPI =
    projects.reduce((sum, project) => sum + project.spi, 0) /
    totalProjects;

  return {
    totalProjects,
    criticalProjects,
    averageSPI: Number(averageSPI.toFixed(2)),
  };
}
