const items = [
  'Dashboard',
  'Portfolio',
  'Projects',
  'Risks',
  'Domino Analysis',
  'Scenarios'
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-8">PRIS</h2>
      <nav className="space-y-3">
        {items.map(item => (
          <div key={item} className="rounded-lg px-3 py-2 hover:bg-slate-700 cursor-pointer">
            {item}
          </div>
        ))}
      </nav>
    </aside>
  );
}
