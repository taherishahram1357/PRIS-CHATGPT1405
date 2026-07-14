import { calculateImpact } from '../services/impactEngine';

const impact = calculateImpact('S1');

export default function DominoImpact(){
 return <main className="p-8">
  <h1 className="text-3xl font-bold mb-6">Impact Propagation Simulation</h1>
  <div className="bg-white border rounded-xl p-6 space-y-3">
   {impact.map(item=><div key={item.id} className="flex justify-between border-b pb-2">
    <span>{item.name}</span>
    <span>{item.impact}%</span>
   </div>)}
  </div>
 </main>
}
