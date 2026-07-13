import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { CheckCircle2, Clock, History } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatCard } from "@/components/ui/StatCard";
import { DataTable } from "@/components/ui/DataTable";
import { StatCardsSkeleton, TableSkeleton } from "@/components/ui/page-skeleton";
import { getFeedback } from "@/services/feedback";
import type { FeedbackItem } from "@/types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { GlassCard } from "@/components/ui/GlassCard";

export const Route = createFileRoute("/_app/feedback")({
  head: () => ({ meta: [{ title: "Feedback — campuSync" }] }),
  component: FeedbackPage,
});

function FeedbackPage() {
  const { data, isLoading } = useQuery({ queryKey: ["feedback"], queryFn: getFeedback });

  const total = (data?.completed ?? 0) + (data?.pending ?? 0);
  const completionPct = total ? Math.round(((data?.completed ?? 0) / total) * 100) : 0;

  return (
    <div>
      <PageHeader title="Feedback" subtitle="Track and manage your course feedback submissions." />

      {isLoading || !data ? (
        <>
          <StatCardsSkeleton count={3} />
          <div className="mt-6"><TableSkeleton rows={5} /></div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <StatCard icon={CheckCircle2} label="Completed" value={data.completed} hint="Submitted feedback" accent="success" />
            <StatCard icon={Clock} label="Pending" value={data.pending} hint="Awaiting response" accent="warning" delay={0.05} />
            <StatCard icon={History} label="Total" value={total} hint="All feedback items" delay={0.1} />
          </div>

          <GlassCard className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-medium">Completion Progress</p>
              <span className="text-sm font-bold text-primary">{completionPct}%</span>
            </div>
            <Progress value={completionPct} className="h-2.5" />
          </GlassCard>

          <DataTable<FeedbackItem>
            data={data.history}
            searchKeys={["course", "faculty", "status"]}
            columns={[
              { key: "course", header: "Course", render: (r) => <span className="font-medium">{r.course}</span> },
              { key: "faculty", header: "Faculty" },
              { key: "date", header: "Date" },
              {
                key: "status",
                header: "Status",
                render: (r) => (
                  <Badge className={cn("rounded-full font-semibold", r.status === "Completed" ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10" : "bg-amber-500/10 text-amber-600 dark:text-amber-400 hover:bg-amber-500/10")}>
                    {r.status}
                  </Badge>
                ),
              },
            ]}
          />
        </>
      )}
    </div>
  );
}
