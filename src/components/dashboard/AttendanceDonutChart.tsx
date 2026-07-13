import { GlassCard } from "@/components/ui/GlassCard";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart as PieIcon } from "lucide-react";
import { Cell, Pie, PieChart } from "recharts";

interface Props {
  present: number;
  absent: number;
  title?: string;
  delay?: number;
}

const COLORS = ["var(--color-chart-1)", "var(--color-chart-5)"];

export function AttendanceDonutChart({ present, absent, title = "Attendance Distribution", delay = 0.25 }: Props) {
  const data = [
    { name: "Present", value: present },
    { name: "Absent", value: absent },
  ].filter((d) => d.value > 0);

  if (!data.length) return null;

  const total = present + absent;
  const pct = total ? Math.round((present / total) * 100) : 0;

  const chartConfig = {
    present: { label: "Present", color: "var(--color-chart-1)" },
    absent: { label: "Absent", color: "var(--color-chart-5)" },
  };

  return (
    <GlassCard delay={delay}>
      <div className="flex items-center gap-2 mb-2">
        <PieIcon className="h-4 w-4 text-primary" />
        <h3 className="font-semibold text-sm">{title}</h3>
      </div>
      <div className="relative">
        <ChartContainer config={chartConfig} className="h-[200px] w-full aspect-auto">
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={80}
              paddingAngle={3}
              dataKey="value"
              strokeWidth={0}
            >
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-2xl font-bold">{pct}%</span>
          <span className="text-[10px] text-muted-foreground uppercase">Present</span>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-2">
        {data.map((d, i) => (
          <div key={d.name} className="flex items-center gap-1.5 text-xs">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: COLORS[i] }} />
            <span className="text-muted-foreground">{d.name}: {d.value}</span>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
