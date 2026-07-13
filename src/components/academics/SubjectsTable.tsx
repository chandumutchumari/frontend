import Table from "@/components/common/Table";
import type { Subject } from "@/types/academics";

function SubjectsTable({ subjects }: { subjects: Subject[] }) {
  return (
    <Table<Subject>
      columns={[
        { key: "code", header: "Code" },
        { key: "name", header: "Subject" },
        { key: "credits", header: "Credits" },
      ]}
      data={subjects}
    />
  );
}

export default SubjectsTable;
