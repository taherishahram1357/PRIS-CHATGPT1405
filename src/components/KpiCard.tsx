export interface KpiCardProps {
  title: string;
  value: string | number;
  description?: string;
}

export default function KpiCard({ title, value, description }: KpiCardProps) {
  return (
    <div className="rounded-xl border p-4 shadow-sm bg-white">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-bold mt-2">{value}</div>
      {description && (
        <div className="text-xs text-gray-500 mt-2">{description}</div>
      )}
    </div>
  );
}
