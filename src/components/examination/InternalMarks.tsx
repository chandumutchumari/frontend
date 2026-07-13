import Table from "@/components/common/Table";
import type { InternalMark } from "@/types/examination";

function InternalMarks({ marks }: { marks: InternalMark[] }) {
  return (
    <Table<InternalMark>
      columns={[
        { key: "subject", header: "Subject" },
        { key: "cia1", header: "CIA-1" },
        { key: "cia2", header: "CIA-2" },
        { key: "assignment", header: "Assignment" },
        { key: "total", header: "Total" },
      ]}
      data={marks}
    />
  );
}

export default InternalMarks;
