import { dominoNodes } from '../data/dominoNetwork';
import ImpactScore from '../components/ImpactScore';
import DominoGraph from '../components/DominoGraph';

export default function Domino(){
 return <main className="p-8">
  <h1 className="text-3xl font-bold mb-6">Domino Effect Analysis</h1>
  <DominoGraph />
  <div className="grid md:grid-cols-4 gap-4 mt-6">
   {dominoNodes.map(n=><div key={n.id} className="bg-white border rounded-xl p-4">
    <div className="font-semibold">{n.name}</div>
    <div className="text-sm text-gray-500">{n.type}</div>
    <ImpactScore score={n.impact}/>
   </div>)}
  </div>
 </main>
}
