import { demoPortfolio } from "../data/demoPortfolio";

export default function RiskSummary() {
  return (
    <div className="rounded-xl border p-4 bg-white">
      <h2 className="text-lg font-semibold mb-4">Risk Distribution</h2>
      <div className="space-y-2">
        {demoPortfolio.projects.map((project) => (
          <div key={project.id} className="flex justify-between">
            <span>{project.name}</span>
            <span>{project.riskScore}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
