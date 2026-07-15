import { runDelayScenario } from '../core/services/scenarioService';

export default function Scenarios(){

  const result = runDelayScenario('S1', 30);

  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">
        Scenario Intelligence
      </h1>

      <div className="bg-white border rounded-xl p-6">
        <h2 className="text-xl font-semibold">
          Supplier Delay Scenario
        </h2>

        <p className="mt-3">
          Delay Simulation: {result.delayDays} Days
        </p>

        <p className="mt-3">
          Portfolio Impact Score: {result.impact.totalImpact}
        </p>

        <div className="mt-4 space-y-2">
          {result.impact.affectedNodes.map(node => (
            <div
              key={node}
              className="border rounded-lg p-3"
            >
              {node}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
