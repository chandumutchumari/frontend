import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { PageHeader } from "@/components/ui/PageHeader";
import { TableSkeleton } from "@/components/ui/page-skeleton";
import { GlassCard } from "@/components/ui/GlassCard";
import { getTimetable } from "@/services/academics";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/academics/timetable")({
  head: () => ({ meta: [{ title: "Timetable — campuSync" }] }),
  component: TimetablePage,
});

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;
const dayColors: Record<string, string> = {
  Mon: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  Tue: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  Wed: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  Thu: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  Fri: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
  Sat: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
};

function TimetablePage() {
  const { data, isLoading } = useQuery({ queryKey: ["timetable"], queryFn: getTimetable });

  return (
    <div>
      <PageHeader title="Timetable" subtitle="Your weekly class schedule at a glance." />
      {isLoading || !data ? (
        <TableSkeleton rows={6} />
      ) : (
        <GlassCard padding="none">
          <div className="overflow-x-auto scrollbar-thin">
            <table className="w-full text-sm min-w-[700px]">
              <thead className="bg-muted/50 sticky top-0 backdrop-blur-md">
                <tr>
                  <th className="text-left font-semibold px-4 py-3.5 text-muted-foreground">Time</th>
                  {days.map((d) => (
                    <th key={d} className="text-left font-semibold px-4 py-3.5 text-muted-foreground">{d}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((slot, i) => (
                  <tr key={i} className="border-t border-border/50 hover:bg-muted/20 transition-colors">
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground whitespace-nowrap font-medium">{slot.time}</td>
                    {days.map((d) => {
                      const v = slot[d];
                      return (
                        <td key={d} className="px-3 py-2.5">
                          {v && v !== "—" ? (
                            <span className={cn("inline-block px-2.5 py-1.5 rounded-lg text-xs font-medium border", dayColors[d])}>
                              {v}
                            </span>
                          ) : (
                            <span className="text-muted-foreground/40">—</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      )}
    </div>
  );
}
