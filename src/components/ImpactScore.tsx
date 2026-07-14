export default function ImpactScore({score}:{score:number}){
 return (
  <div className="mt-3">
   <div className="text-sm text-gray-500">Impact Score</div>
   <div className="w-full bg-gray-200 rounded-full h-3 mt-1">
    <div className="bg-slate-700 h-3 rounded-full" style={{width:`${score}%`}} />
   </div>
   <div className="text-sm mt-1">{score}/100</div>
  </div>
 );
}
