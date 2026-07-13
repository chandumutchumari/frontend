import { GlassCard } from "@/components/ui/GlassCard";
import { Activity } from "lucide-react";
import { cn } from "@/lib/utils";

interface ActivityItem {
  id: string;
  title: string;
  description: string;
  time: string;
  type?: "default" | "success" | "warning";
}

interface Props {
  items: ActivityItem[];
}

export function ActivityTimeline({ items }: Props) {
  return (
    <GlassCard delay={0.25}>
      <div className="flex items-center gap-2 mb-5">
        <Activity className="h-4 w-4 text-primary" />
        <h3 className="font-semibold text-sm">Recent Activity</h3>
      </div>
      {items.length === 0 ? (
        <p className="text-sm text-muted-foreground text-center py-6">No recent activity</p>
      ) : (
        <div className="space-y-0">
          {items.map((item, i) => (
            <div key={item.id} className="relative flex gap-3 pb-5 last:pb-0">
              {i < items.length - 1 && (
                <div className="absolute left-[7px] top-4 bottom-0 w-px bg-border" />
              )}
              <div
                className={cn(
                  "relative z-10 h-4 w-4 rounded-full shrink-0 mt-0.5 ring-4 ring-card",
                  item.type === "success" && "bg-emerald-500",
                  item.type === "warning" && "bg-amber-500",
                  (!item.type || item.type === "default") && "bg-primary",
                )}
              />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium leading-tight">{item.title}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                <p className="text-[10px] text-muted-foreground/70 mt-1">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </GlassCard>
  );
}
