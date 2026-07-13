import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";
import { Fragment } from "react";

const labelMap: Record<string, string> = {
  dashboard: "Dashboard",
  profile: "Profile",
  academics: "Academics",
  attendance: "Attendance",
  subjects: "Subjects",
  timetable: "Timetable",
  registration: "Registration",
  "attendance-code": "Attendance Code",
  examinations: "Examinations",
  internals: "Internal Marks",
  semester: "Semester Results",
  marks: "Exam Marks",
  feedback: "Feedback",
};

export function Breadcrumbs() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length <= 1) return null;

  const crumbs = segments.map((seg, i) => ({
    label: labelMap[seg] ?? seg.charAt(0).toUpperCase() + seg.slice(1),
    path: "/" + segments.slice(0, i + 1).join("/"),
    isLast: i === segments.length - 1,
  }));

  return (
    <nav aria-label="Breadcrumb" className="hidden sm:flex items-center gap-1 text-xs text-muted-foreground">
      <Link to="/dashboard" className="hover:text-foreground transition-colors p-1 rounded-md hover:bg-muted/60">
        <Home className="h-3.5 w-3.5" />
      </Link>
      {crumbs.map((crumb) => (
        <Fragment key={crumb.path}>
          <ChevronRight className="h-3 w-3 shrink-0 opacity-50" />
          {crumb.isLast ? (
            <span className="font-medium text-foreground px-1">{crumb.label}</span>
          ) : (
            <Link to={crumb.path} className="hover:text-foreground transition-colors px-1 rounded-md hover:bg-muted/60">
              {crumb.label}
            </Link>
          )}
        </Fragment>
      ))}
    </nav>
  );
}
