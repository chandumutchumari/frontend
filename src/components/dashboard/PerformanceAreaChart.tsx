import { GlassCard } from "@/components/ui/GlassCard";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

interface Props {
  data: { name: string; value: number }[];
  title?: string;
  delay?: number;
}

const chartConfig = {
  value: { label: "Score", color: "hsl(var(--chart-1))" },
};

export function PerformanceAreaChart({ data, title = "Academic Trends", delay = 0.15 }: Props) {
  if (!data.length) return null;

  return (
    <GlassCard delay={delay} className="col-span-full lg:col-span-2">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-primary" />
          <h3 className="font-semibold text-sm">{title}</h3>
        </div>
      </div>
      <ChartContainer config={chartConfig} className="h-[240px] w-full aspect-auto">
        <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-chart-1)" stopOpacity={0.3} />
              <stop offset="100%" stopColor="var(--color-chart-1)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tickLine={false} axisLine={false} fontSize={11} />
          <YAxis tickLine={false} axisLine={false} fontSize={11} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="var(--color-chart-1)"
            fill="url(#areaGradient)"
            strokeWidth={2}
          />
        </AreaChart>
      </ChartContainer>
    </GlassCard>
  );
}
