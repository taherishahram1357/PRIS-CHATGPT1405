import { dominoEdges, dominoNodes } from '../data/dominoNetwork';

export default function DominoGraph(){
 return (
  <div className="bg-white border rounded-xl p-6">
   <h2 className="font-semibold mb-6">Portfolio Dependency Graph</h2>
   <div className="space-y-4">
    {dominoEdges.map(edge=>{
      const from=dominoNodes.find(n=>n.id===edge.from);
      const to=dominoNodes.find(n=>n.id===edge.to);
      return (
       <div key={edge.from+edge.to} className="flex items-center gap-3">
        <div className="px-4 py-2 rounded-lg border">{from?.name}</div>
        <div>→</div>
        <div className="px-4 py-2 rounded-lg border">{to?.name}</div>
       </div>
      );
    })}
   </div>
  </div>
 );
}
