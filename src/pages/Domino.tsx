const dependencies = [
 {from:'Supplier A', to:'Project Alpha'},
 {from:'Project Alpha', to:'Project Beta'},
 {from:'Project Beta', to:'Project Gamma'}
];

export default function Domino(){
 return <main className="p-8">
  <h1 className="text-3xl font-bold mb-6">Domino Effect Analysis</h1>
  <div className="bg-white border rounded-xl p-6">
   {dependencies.map(d=><div key={d.from+d.to} className="py-3 border-b">{d.from} → {d.to}</div>)}
  </div>
 </main>
}
