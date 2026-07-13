import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { PageHeader } from "@/components/ui/PageHeader";
import { DataTable } from "@/components/ui/DataTable";
import { TableSkeleton } from "@/components/ui/page-skeleton";
import { SubjectBarChart } from "@/components/dashboard/SubjectBarChart";
import { getInternalMarks } from "@/services/examinations";
import type { InternalMarkRow } from "@/types";
import { Progress } from "@/components/ui/progress";

export const Route = createFileRoute("/_app/examinations/internals")({
  head: () => ({ meta: [{ title: "Internal Marks — campuSync" }] }),
  component: InternalsPage,
});

function InternalsPage() {
  const { data, isLoading } = useQuery({ queryKey: ["internals"], queryFn: getInternalMarks });

  const chartData = data?.slice(0, 8).map((m) => ({
    name: m.subjectCode.slice(0, 8),
    marks: m.marksObtained,
    max: m.maxMarks,
  })) ?? [];

  return (
    <div>
      <PageHeader title="Internal Marks" subtitle="Continuous internal assessment scores across subjects." />
      {isLoading || !data ? (
        <TableSkeleton rows={5} />
      ) : (
        <>
          {chartData.length > 0 && (
            <div className="mb-6">
              <SubjectBarChart data={chartData} title="Marks Overview" />
            </div>
          )}
          <DataTable<InternalMarkRow>
            data={data}
            searchKeys={["subjectCode", "subjectDescription"]}
            columns={[
              { key: "subjectCode", header: "Code", render: (r) => <span className="font-mono text-xs font-semibold">{r.subjectCode}</span> },
              { key: "subjectDescription", header: "Subject", render: (r) => <span className="font-medium">{r.subjectDescription}</span> },
              { key: "marksObtained", header: "Obtained", render: (r) => <span className="font-bold text-primary">{r.marksObtained}</span> },
              { key: "maxMarks", header: "Max" },
              {
                key: "percentage",
                header: "Score",
                sortable: false,
                render: (r) => {
                  const pct = r.maxMarks ? Math.round((r.marksObtained / r.maxMarks) * 100) : 0;
                  return (
                    <div className="flex items-center gap-2 min-w-[120px]">
                      <Progress value={pct} className="flex-1 h-2" />
                      <span className="text-xs font-semibold w-10">{pct}%</span>
                    </div>
                  );
                },
              },
            ]}
          />
        </>
      )}
    </div>
  );
}
