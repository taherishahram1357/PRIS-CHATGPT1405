import { projects } from '../data/mockPortfolio';

function RiskBadge({ risk }: { risk: string }) {
  const style = risk === 'High' ? 'bg-red-100 text-red-700' : risk === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700';
  return <span className={`px-3 py-1 rounded-full text-sm ${style}`}>{risk}</span>;
}

export default function Portfolio() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Portfolio Intelligence</h1>
      <div className="grid gap-5 md:grid-cols-3">
        {projects.map(project => (
          <div key={project.id} className="bg-white border rounded-xl p-5 shadow-sm">
            <h2 className="font-semibold text-lg">{project.name}</h2>
            <div className="mt-4 space-y-2 text-sm">
              <div>Status: {project.status}</div>
              <div>SPI: {project.spi}</div>
              <div>CPI: {project.cpi}</div>
              <div className="pt-2"><RiskBadge risk={project.risk}/></div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
