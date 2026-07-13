import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { PageHeader } from "@/components/ui/PageHeader";
import { DataTable } from "@/components/ui/DataTable";
import { StatCardsSkeleton, TableSkeleton } from "@/components/ui/page-skeleton";
import { StatCard } from "@/components/ui/StatCard";
import { GlassCard } from "@/components/ui/GlassCard";
import { CircularProgress } from "@/components/ui/CircularProgress";
import { AttendanceDonutChart } from "@/components/dashboard/AttendanceDonutChart";
import { getAttendance } from "@/services/academics";
import type { AttendanceRow } from "@/types";
import { ClipboardList, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/academics/attendance")({
  head: () => ({ meta: [{ title: "Attendance — campuSync" }] }),
  component: AttendancePage,
});

function AttendancePage() {
  const { data, isLoading } = useQuery({ queryKey: ["attendance"], queryFn: getAttendance });

  const avg = data?.length
    ? Math.round(data.reduce((s, a) => s + a.attendancePercentage, 0) / data.length)
    : 0;
  const belowThreshold = data?.filter((a) => a.attendancePercentage < 75).length ?? 0;
  const aboveThreshold = data?.filter((a) => a.attendancePercentage >= 75).length ?? 0;
  const totalPresent = data?.reduce((s, a) => s + a.present, 0) ?? 0;
  const totalAbsent = data?.reduce((s, a) => s + a.absent, 0) ?? 0;

  return (
    <div>
      <PageHeader title="Attendance" subtitle="Track your subject-wise attendance and stay above the threshold." />

      {isLoading || !data ? (
        <>
          <StatCardsSkeleton count={3} />
          <div className="mt-6"><TableSkeleton rows={6} /></div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <StatCard icon={ClipboardList} label="Average" value={`${avg}%`} hint="Across all subjects" accent={avg >= 75 ? "success" : "warning"} />
            <StatCard icon={CheckCircle2} label="Above 75%" value={aboveThreshold} hint="Subjects on track" accent="success" delay={0.05} />
            <StatCard icon={AlertTriangle} label="Below 75%" value={belowThreshold} hint="Needs attention" accent="warning" delay={0.1} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
            <GlassCard className="flex justify-center">
              <CircularProgress value={avg} label="Avg" sublabel="Overall attendance" />
            </GlassCard>
            <div className="lg:col-span-2">
              <AttendanceDonutChart present={totalPresent} absent={totalAbsent} />
            </div>
          </div>

          <DataTable<AttendanceRow>
            data={data}
            searchKeys={["subjectCode", "subjectDescription"]}
            columns={[
              { key: "subjectCode", header: "Code", render: (r) => <span className="font-mono text-xs font-semibold">{r.subjectCode}</span> },
              { key: "subjectDescription", header: "Subject", render: (r) => <span className="font-medium">{r.subjectDescription}</span> },
              { key: "classesConducted", header: "Conducted" },
              { key: "present", header: "Present" },
              { key: "absent", header: "Absent" },
              {
                key: "attendancePercentage",
                header: "Percentage",
                render: (r) => (
                  <div className="flex items-center gap-3 min-w-[160px]">
                    <Progress value={r.attendancePercentage} className={cn("flex-1 h-2", r.attendancePercentage < 75 && "[&>div]:bg-amber-500")} />
                    <span className={cn("text-xs font-bold w-10 text-right", r.attendancePercentage < 75 ? "text-amber-600 dark:text-amber-400" : "text-emerald-600 dark:text-emerald-400")}>
                      {r.attendancePercentage}%
                    </span>
                  </div>
                ),
              },
            ]}
          />
        </>
      )}
    </div>
  );
}
