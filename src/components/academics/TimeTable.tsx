import Table from "@/components/common/Table";
import type { TimetableSlot } from "@/types/academics";

function TimeTable({ slots }: { slots: TimetableSlot[] }) {
  return (
    <Table<TimetableSlot>
      columns={[
        { key: "day", header: "Day" },
        { key: "time", header: "Time" },
        { key: "subject", header: "Subject" },
        { key: "room", header: "Room" },
      ]}
      data={slots}
    />
  );
}

export default TimeTable;
