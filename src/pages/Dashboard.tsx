import KPICard from '../components/KPICard';
import { projects } from '../core/data/projects';
import { calculateRiskLevel } from '../core/engine/RiskEngine';

export default function Dashboard() {
  const critical = projects.filter(
    project => calculateRiskLevel(project.riskScore) === 'Critical'
  ).length;

  const averageSPI = (
    projects.reduce((sum, project) => sum + project.spi, 0) /
    projects.length
  ).toFixed(2);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">
        PRIS Executive Command Center
      </h1>

      <p className="text-gray-600 mb-6">
        Portfolio Risk Intelligence System
      </p>

      <section className="grid gap-5 md:grid-cols-4">
        <KPICard
          title="Total Projects"
          value={String(projects.length)}
          subtitle="Core Data Layer"
        />

        <KPICard
          title="Critical Projects"
          value={String(critical)}
          subtitle="Risk Engine Analysis"
        />

        <KPICard
          title="Average SPI"
          value={averageSPI}
          subtitle="Schedule Performance"
        />

        <KPICard
          title="Portfolio Status"
          value="Intelligent"
          subtitle="Engine Driven"
        />
      </section>

      <section className="mt-8 bg-white rounded-xl p-6 shadow-sm border">
        <h2 className="text-xl font-semibold mb-4">
          Project Portfolio Intelligence
        </h2>

        <div className="space-y-3">
          {projects.map(project => (
            <div
              key={project.id}
              className="flex justify-between border-b pb-3"
            >
              <span>{project.name}</span>
              <span>
                {project.status} | SPI {project.spi} | Risk {project.riskScore}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
