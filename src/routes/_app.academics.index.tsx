import { createFileRoute } from "@tanstack/react-router";
import { BookMarked, CalendarDays, ClipboardList, FileSignature, KeyRound } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { NavCard } from "@/components/ui/NavCard";

export const Route = createFileRoute("/_app/academics/")({
  head: () => ({ meta: [{ title: "Academics — campuSync" }] }),
  component: AcademicsPage,
});

const cards = [
  { to: "/academics/attendance", title: "Attendance", desc: "Subject-wise attendance summary with analytics.", icon: ClipboardList },
  { to: "/academics/subjects", title: "Subjects", desc: "Current semester courses and credit details.", icon: BookMarked },
  { to: "/academics/timetable", title: "Timetable", desc: "Weekly class schedule and time slots.", icon: CalendarDays },
  { to: "/academics/registration", title: "Course Registration", desc: "Register for upcoming term courses.", icon: FileSignature },
  { to: "/academics/attendance-code", title: "Attendance Code", desc: "Submit the portal attendance code.", icon: KeyRound },
] as const;

function AcademicsPage() {
  return (
    <div>
      <PageHeader title="Academics" subtitle="Manage your courses, attendance, and class schedule." />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {cards.map((c, i) => (
          <NavCard key={c.to} to={c.to} title={c.title} description={c.desc} icon={c.icon} delay={i * 0.05} />
        ))}
      </div>
    </div>
  );
}
