import { GlassCard } from "@/components/ui/GlassCard";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart as LineIcon } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

interface Props {
  data: { semester: string; gpa: number }[];
  title?: string;
  delay?: number;
}

const chartConfig = {
  gpa: { label: "GPA", color: "var(--color-chart-3)" },
};

export function SemesterLineChart({ data, title = "Semester Performance", delay = 0.1 }: Props) {
  if (!data.length) return null;

  return (
    <GlassCard delay={delay}>
      <div className="flex items-center gap-2 mb-4">
        <LineIcon className="h-4 w-4 text-primary" />
        <h3 className="font-semibold text-sm">{title}</h3>
      </div>
      <ChartContainer config={chartConfig} className="h-[220px] w-full aspect-auto">
        <LineChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="semester" tickLine={false} axisLine={false} fontSize={11} />
          <YAxis domain={[0, 10]} tickLine={false} axisLine={false} fontSize={11} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line
            type="monotone"
            dataKey="gpa"
            stroke="var(--color-chart-3)"
            strokeWidth={2.5}
            dot={{ fill: "var(--color-chart-3)", strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ChartContainer>
    </GlassCard>
  );
}
