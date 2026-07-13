import { createFileRoute } from "@tanstack/react-router";
import { Award, ClipboardCheck, FileBarChart, PenLine } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { NavCard } from "@/components/ui/NavCard";

export const Route = createFileRoute("/_app/examinations/")({
  head: () => ({ meta: [{ title: "Examinations — campuSync" }] }),
  component: ExamsHome,
});

const cards = [
  { to: "/examinations/internals", title: "Internal Marks", desc: "CIA and continuous assessment scores.", icon: PenLine },
  { to: "/examinations/semester", title: "Semester Results", desc: "GPA, CGPA and grade breakdown.", icon: Award },
  { to: "/examinations/marks", title: "Exam Marks", desc: "End-semester mark statements.", icon: FileBarChart },
  { to: "/examinations/registration", title: "Exam Registration", desc: "Register for upcoming examinations.", icon: ClipboardCheck },
] as const;

function ExamsHome() {
  return (
    <div>
      <PageHeader title="Examinations" subtitle="Review your marks, grades, and exam status." />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {cards.map((c, i) => (
          <NavCard key={c.to} to={c.to} title={c.title} description={c.desc} icon={c.icon} delay={i * 0.05} />
        ))}
      </div>
    </div>
  );
}
