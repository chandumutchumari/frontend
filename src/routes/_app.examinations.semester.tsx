import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { PageHeader } from "@/components/ui/PageHeader";
import { DataTable } from "@/components/ui/DataTable";
import { TableSkeleton } from "@/components/ui/page-skeleton";
import { GlassCard } from "@/components/ui/GlassCard";
import { CircularProgress } from "@/components/ui/CircularProgress";
import { SemesterLineChart } from "@/components/dashboard/SemesterLineChart";
import { getSemesterResult } from "@/services/examinations";
import type { CurrentSemesterResultRow } from "@/types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/examinations/semester")({
  head: () => ({ meta: [{ title: "Semester Results — campuSync" }] }),
  component: SemesterPage,
});

function SemesterPage() {
  const { data, isLoading } = useQuery({ queryKey: ["semester-result"], queryFn: getSemesterResult });

  const gpaPercent = data ? (data.gpa / 10) * 100 : 0;
  const semesterChartData = data ? [{ semester: data.semester || "Current", gpa: data.gpa }] : [];

  return (
    <div>
      <PageHeader title="Semester Results" subtitle="Your grades and grade-point summary." />
      {isLoading || !data ? (
        <TableSkeleton rows={6} />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div
              className="rounded-2xl p-6 text-primary-foreground relative overflow-hidden md:col-span-1"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-elegant)" }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-20 bg-white -translate-y-1/2 translate-x-1/2" />
              <p className="text-xs uppercase tracking-wider opacity-80 font-semibold">SGPA</p>
              <p className="text-5xl font-black mt-2">{data.gpa.toFixed(2)}</p>
              <p className="text-sm opacity-90 mt-2">{data.semester}</p>
            </div>

            <GlassCard className="flex flex-col items-center justify-center">
              <CircularProgress value={gpaPercent} label="GPA" sublabel={`Out of 10.0`} />
            </GlassCard>

            <GlassCard>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">CGPA</p>
              <p className="text-4xl font-black mt-2 text-gradient">{data.cgpa.toFixed(2)}</p>
              <p className="text-xs text-muted-foreground mt-2">All semesters combined</p>
            </GlassCard>
          </div>

          {semesterChartData.length > 0 && (
            <div className="mb-6 max-w-md">
              <SemesterLineChart data={semesterChartData} />
            </div>
          )}

          {data.currentSemesterResults?.length ? (
            <div>
              <h2 className="text-lg font-semibold mb-2">Current Semester Results</h2>
              <p className="mb-4 text-sm text-muted-foreground">
                All Pass results are shown in green and all Fail results are shown in red.
              </p>
              <DataTable<CurrentSemesterResultRow>
                data={data.currentSemesterResults}
                searchKeys={["subjectCode", "subjectDescription", "grade"]}
                columns={[
                  { key: "semester", header: "Semester" },
                  { key: "subjectCode", header: "Code", render: (r) => <span className="font-mono text-xs font-semibold">{r.subjectCode}</span> },
                  { key: "subjectDescription", header: "Subject" },
                  { key: "credits", header: "Credits" },
                  { key: "grade", header: "Grade", render: (r) => <Badge variant="secondary" className="rounded-lg font-bold">{r.grade}</Badge> },
                  {
                    key: "result",
                    header: "Result",
                    render: (r) => (
                      <Badge
                        className={cn(
                          "rounded-full",
                          String(r.result).toLowerCase() === "pass"
                            ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10"
                            : "bg-red-500/10 text-red-600 dark:text-red-400 hover:bg-red-500/10"
                        )}
                      >
                        {r.result}
                      </Badge>
                    ),
                  },
                ]}
              />
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
