import Table from "@/components/common/Table";
import type { AttendanceRow } from "@/types/academics";

function AttendanceTable({ rows }: { rows: AttendanceRow[] }) {
  return (
    <Table<AttendanceRow>
      columns={[
        { key: "subject", header: "Subject" },
        { key: "attended", header: "Attended" },
        { key: "total", header: "Total" },
        { key: "percentage", header: "%", render: (r) => `${r.percentage}%` },
      ]}
      data={rows}
    />
  );
}

export default AttendanceTable;
