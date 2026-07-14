import { dominoNodes, dominoEdges } from '../data/dominoNetwork';
import ImpactScore from '../components/ImpactScore';

export default function Domino(){
 return <main className="p-8">
  <h1 className="text-3xl font-bold mb-6">Domino Effect Analysis</h1>
  <div className="bg-white rounded-xl border p-6">
   <h2 className="font-semibold mb-4">Dependency Network</h2>
   {dominoEdges.map(e=>{
    const from=dominoNodes.find(n=>n.id===e.from);
    const to=dominoNodes.find(n=>n.id===e.to);
    return <div key={e.from+e.to} className="border-b py-3">{from?.name} → {to?.name}</div>
   })}
  </div>
  <div className="grid md:grid-cols-4 gap-4 mt-6">
   {dominoNodes.map(n=><div key={n.id} className="bg-white border rounded-xl p-4">
    <div className="font-semibold">{n.name}</div>
    <div className="text-sm text-gray-500">{n.type}</div>
    <ImpactScore score={n.impact}/>
   </div>)}
  </div>
 </main>
}
