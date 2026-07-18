import KpiCard from "../components/KpiCard";
import { demoPortfolio } from "../data/demoPortfolio";

export default function ExecutiveDashboard() {
  const projects = demoPortfolio.projects;
  const alerts = demoPortfolio.alerts;

  const averageRisk = Math.round(
    projects.reduce((sum, project) => sum + project.riskScore, 0) / projects.length
  );

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">PRIS Executive Dashboard</h1>
        <p className="text-gray-500">Portfolio Risk Intelligence Overview</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <KpiCard title="Projects" value={projects.length} description="Active portfolio projects" />
        <KpiCard title="Average Risk Score" value={averageRisk} description="Portfolio risk indicator" />
        <KpiCard title="Alerts" value={alerts.length} description="Current risk alerts" />
      </div>

      <div className="rounded-xl border p-4">
        <h2 className="text-xl font-semibold mb-4">Project Health</h2>
        {projects.map((project) => (
          <div key={project.id} className="flex justify-between border-b py-3">
            <span>{project.name}</span>
            <span>{project.health} ({project.progress}%)</span>
          </div>
        ))}
      </div>

      <div className="rounded-xl border p-4">
        <h2 className="text-xl font-semibold mb-4">Risk Alerts</h2>
        {alerts.map((alert, index) => (
          <div key={index} className="py-2">
            <strong>{alert.level}</strong>: {alert.message}
          </div>
        ))}
      </div>
    </div>
  );
}
