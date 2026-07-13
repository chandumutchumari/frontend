import { GlassCard } from "@/components/ui/GlassCard";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart3 } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

interface Props {
  data: { name: string; marks: number; max?: number }[];
  title?: string;
  delay?: number;
}

const chartConfig = {
  marks: { label: "Marks", color: "var(--color-chart-2)" },
};

export function SubjectBarChart({ data, title = "Subject-wise Marks", delay = 0.2 }: Props) {
  if (!data.length) return null;

  return (
    <GlassCard delay={delay}>
      <div className="flex items-center gap-2 mb-4">
        <BarChart3 className="h-4 w-4 text-primary" />
        <h3 className="font-semibold text-sm">{title}</h3>
      </div>
      <ChartContainer config={chartConfig} className="h-[240px] w-full aspect-auto">
        <BarChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tickLine={false} axisLine={false} fontSize={10} angle={-20} textAnchor="end" height={50} />
          <YAxis tickLine={false} axisLine={false} fontSize={11} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="marks" fill="var(--color-chart-2)" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ChartContainer>
    </GlassCard>
  );
}
