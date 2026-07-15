import { getRiskOverview } from '../core/services/riskService';

export default function Risks(){

  const risks = getRiskOverview();

  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">
        Risk Intelligence
      </h1>

      <div className="space-y-4">
        {risks.map(r => (
          <div
            key={r.id}
            className="bg-white border rounded-xl p-5"
          >
            <div className="font-semibold">
              {r.title}
            </div>

            <div className="text-sm mt-2">
              Project: {r.projectId}
              <br />
              Level: {r.level}
              <br />
              Calculated Score: {r.calculatedScore}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
