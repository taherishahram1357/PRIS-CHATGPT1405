import KPICard from '../components/KPICard';
import { projects } from '../data/mockPortfolio';

export default function Dashboard() {
  const critical = projects.filter(p => p.risk === 'High').length;

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">PRIS Executive Dashboard</h1>

      <section className="grid gap-5 md:grid-cols-4">
        <KPICard title="Total Projects" value={String(projects.length)} />
        <KPICard title="Critical Projects" value={String(critical)} />
        <KPICard title="Portfolio Health" value="82%" subtitle="Based on project performance" />
        <KPICard title="Risk Level" value="Medium" />
      </section>

      <section className="mt-8 bg-white rounded-xl p-6 shadow-sm border">
        <h2 className="text-xl font-semibold mb-4">Project Portfolio</h2>
        <div className="space-y-3">
          {projects.map(project => (
            <div key={project.id} className="flex justify-between border-b pb-3">
              <span>{project.name}</span>
              <span>{project.status} | SPI {project.spi}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
