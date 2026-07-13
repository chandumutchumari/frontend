import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { PageHeader } from "@/components/ui/PageHeader";
import { DataTable } from "@/components/ui/DataTable";
import { StatCardsSkeleton, TableSkeleton } from "@/components/ui/page-skeleton";
import { StatCard } from "@/components/ui/StatCard";
import { getSubjects } from "@/services/academics";
import type { SubjectRow } from "@/types";
import { BookMarked, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/_app/academics/subjects")({
  head: () => ({ meta: [{ title: "Subjects — campuSync" }] }),
  component: SubjectsPage,
});

function SubjectsPage() {
  const { data, isLoading } = useQuery({ queryKey: ["subjects"], queryFn: getSubjects });

  const totalCredits = data?.reduce((s, sub) => s + sub.credits, 0) ?? 0;

  return (
    <div>
      <PageHeader title="Subjects" subtitle="Courses you're enrolled in this semester." />

      {isLoading || !data ? (
        <>
          <StatCardsSkeleton count={2} />
          <div className="mt-6"><TableSkeleton rows={5} /></div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <StatCard icon={BookMarked} label="Total Subjects" value={data.length} hint="Enrolled this semester" />
            <StatCard icon={Layers} label="Total Credits" value={totalCredits} hint="Credit hours" delay={0.05} accent="success" />
          </div>

          <DataTable<SubjectRow>
            data={data}
            searchKeys={["code", "name"]}
            columns={[
              { key: "code", header: "Code", render: (r) => <Badge variant="outline" className="font-mono text-xs rounded-lg">{r.code}</Badge> },
              { key: "name", header: "Subject Name", render: (r) => <span className="font-medium">{r.name}</span> },
              { key: "credits", header: "Credits", render: (r) => <span className="font-semibold text-primary">{r.credits}</span> },
            ]}
          />
        </>
      )}
    </div>
  );
}
