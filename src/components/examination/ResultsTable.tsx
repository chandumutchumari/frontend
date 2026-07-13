import Table from "@/components/common/Table";
import type { SemesterResult } from "@/types/examination";

function ResultsTable({ results }: { results: SemesterResult[] }) {
  return (
    <Table<SemesterResult>
      columns={[
        { key: "semester", header: "Semester" },
        { key: "sgpa", header: "SGPA" },
        { key: "cgpa", header: "CGPA" },
        { key: "status", header: "Status" },
      ]}
      data={results}
    />
  );
}

export default ResultsTable;
