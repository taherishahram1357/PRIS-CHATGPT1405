type Props = {
  title: string;
  value: string;
  subtitle?: string;
};

export default function KPICard({ title, value, subtitle }: Props) {
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm border">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="mt-2 text-3xl font-bold text-gray-900">{value}</div>
      {subtitle && <div className="mt-2 text-sm text-gray-600">{subtitle}</div>}
    </div>
  );
}
