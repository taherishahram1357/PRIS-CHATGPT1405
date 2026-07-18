import { ReactNode } from "react";

interface AppShellProps {
  children: ReactNode;
}

const menuItems = [
  "Dashboard",
  "Portfolio",
  "Projects",
  "Risks",
  "Dependencies",
  "Scenarios"
];

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <aside className="w-64 border-r bg-white p-5">
        <h1 className="text-xl font-bold mb-6">PRIS</h1>
        <nav className="space-y-3">
          {menuItems.map((item) => (
            <div key={item} className="text-sm text-gray-700">
              {item}
            </div>
          ))}
        </nav>
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
}
