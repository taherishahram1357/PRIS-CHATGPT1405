const scenarios = [
  {name:'Supplier delay +30 days', impact:'3 Projects affected', cost:'+12M'},
  {name:'Budget increase 10%', impact:'2 Projects affected', cost:'+25M'}
];

export default function Scenarios(){
 return <main className="p-8">
  <h1 className="text-3xl font-bold mb-6">Scenario Analysis</h1>
  <div className="space-y-4">{scenarios.map(s=><div key={s.name} className="bg-white border rounded-xl p-5">
   <h2 className="font-semibold">{s.name}</h2>
   <p className="mt-2">Impact: {s.impact}</p>
   <p>Estimated Cost Effect: {s.cost}</p>
  </div>)}</div>
 </main>
}
