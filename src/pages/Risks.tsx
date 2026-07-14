const risks = [
  {title:'Supplier Delay', impact:'High', probability:'Medium'},
  {title:'Budget Overrun', impact:'Medium', probability:'High'},
  {title:'Resource Constraint', impact:'Medium', probability:'Medium'}
];

export default function Risks(){
 return <main className="p-8">
  <h1 className="text-3xl font-bold mb-6">Risk Intelligence</h1>
  <div className="space-y-4">{risks.map(r=><div className="bg-white border rounded-xl p-5" key={r.title}>
   <div className="font-semibold">{r.title}</div>
   <div className="text-sm mt-2">Impact: {r.impact} | Probability: {r.probability}</div>
  </div>)}</div>
 </main>
}
