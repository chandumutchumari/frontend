import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { PageHeader } from "@/components/ui/PageHeader";
import { DataTable } from "@/components/ui/DataTable";
import { TableSkeleton } from "@/components/ui/page-skeleton";
import { getExamMarks } from "@/services/examinations";
import type { ExamMarkDetail } from "@/types/examination";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/examinations/marks")({
  head: () => ({ meta: [{ title: "Exam Marks — campuSync" }] }),
  component: ExamMarksPage,
});

function ExamMarksPage() {
  const { data, isLoading } = useQuery({ queryKey: ["exam-marks"], queryFn: getExamMarks });

  return (
    <div>
      <PageHeader title="Exam Marks" subtitle="End-semester mark statements and grade details." />
      {isLoading ? (
        <TableSkeleton rows={6} />
      ) : (
        <DataTable<ExamMarkDetail>
          data={data ?? []}
          searchKeys={["subjectCode", "subjectDescription", "semester", "grade"]}
          empty="No exam marks available"
          columns={[
            { key: "semester", header: "Semester" },
            { key: "examMonthYear", header: "Month & Year" },
            { key: "subjectCode", header: "Code", render: (r) => <span className="font-mono text-xs font-semibold">{r.subjectCode}</span> },
            { key: "subjectDescription", header: "Subject", render: (r) => <span className="font-medium">{r.subjectDescription}</span> },
            { key: "credits", header: "Credits" },
            { key: "grade", header: "Grade", render: (r) => <Badge variant="secondary" className="rounded-lg font-bold">{r.grade}</Badge> },
            { key: "gradePoints", header: "GP", render: (r) => <span className="font-semibold">{r.gradePoints}</span> },
            {
              key: "result",
              header: "Result",
              render: (r) => (
                <Badge className={cn("rounded-full", String(r.result).toLowerCase() === "pass" ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10" : "bg-red-500/10 text-red-600 dark:text-red-400 hover:bg-red-500/10")}>
                  {r.result}
                </Badge>
              ),
            },
            { key: "attempt", header: "Attempt" },
          ]}
        />
      )}
    </div>
  );
}
