import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Mail, Phone, User, Building2, Calendar, BookOpen } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { TableSkeleton } from "@/components/ui/page-skeleton";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/badge";
import { getProfile } from "@/services/profile";
import type { Profile } from "@/types";
import { formatDisplayName } from "@/utils/formatter";

export const Route = createFileRoute("/_app/profile")({
  head: () => ({ meta: [{ title: "Profile — campuSync" }] }),
  component: ProfilePage,
});

const labels: Record<keyof Profile, string> = {
  studentName: "Student Name",
  registerNumber: "Register Number",
  institution: "Institution",
  semester: "Semester",
  program: "Program",
  specialization: "Specialization",
  dob: "Date of Birth",
  gender: "Gender",
  phone: "Phone",
  email: "Email",
  fatherName: "Father's Name",
  motherName: "Mother's Name",
  accessThrough: "Access Through",
};

const fieldGroups: { title: string; keys: (keyof Profile)[] }[] = [
  { title: "Academic Info", keys: ["institution", "program", "specialization", "semester"] },
  { title: "Personal Info", keys: ["dob", "gender", "fatherName", "motherName"] },
  { title: "Contact Info", keys: ["phone", "email"] },
];

function ProfilePage() {
  const { data, isLoading } = useQuery({ queryKey: ["profile"], queryFn: getProfile });

  const formattedPhone = data?.phone?.replace(/\s*\(verified\)\s*$/i, "").trim() ?? "—";
  const displayStudentName = formatDisplayName(data?.studentName);
  const displayFatherName = formatDisplayName(data?.fatherName);
  const displayMotherName = formatDisplayName(data?.motherName);

  const initials = displayStudentName
    ? displayStudentName.split(" ").map((n) => n[0]).slice(0, 2).join("")
    : "?";

  return (
    <div>
      <PageHeader title="My Profile" subtitle="Your personal and academic information at a glance." />

      <div className="grid grid-cols-1 lg:grid-cols-[340px_minmax(0,1fr)] gap-6">
        <GlassCard delay={0} className="text-center">
          <div className="relative mx-auto w-fit">
            <div
              className="h-28 w-28 rounded-2xl grid place-items-center text-3xl font-bold text-primary-foreground shadow-lg"
              style={{ background: "var(--gradient-primary)" }}
            >
              {data ? initials : <User className="h-10 w-10" />}
            </div>
            {data?.semester && (
              <Badge className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full px-3 shadow-sm">
                Sem {data.semester}
              </Badge>
            )}
          </div>
          <h2 className="mt-5 text-xl font-bold">{displayStudentName || "—"}</h2>
          <p className="text-sm text-muted-foreground font-mono mt-1">{data?.registerNumber}</p>
          <p className="text-xs text-muted-foreground mt-1">{data?.program}</p>

          <div className="mt-6 space-y-3 text-left">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/40">
              <Mail className="h-4 w-4 text-primary shrink-0" />
              <span className="text-sm truncate">{data?.email ?? "—"}</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/40">
              <Phone className="h-4 w-4 text-primary shrink-0" />
              <span className="text-sm">{formattedPhone}</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/40">
              <Building2 className="h-4 w-4 text-primary shrink-0" />
              <span className="text-sm truncate">{data?.institution ?? "—"}</span>
            </div>
          </div>
        </GlassCard>

        {isLoading ? (
          <TableSkeleton rows={8} />
        ) : (
          <div className="space-y-4">
            {fieldGroups.map((group, gi) => (
              <GlassCard key={group.title} delay={gi * 0.05}>
                <div className="flex items-center gap-2 mb-4">
                  {gi === 0 && <BookOpen className="h-4 w-4 text-primary" />}
                  {gi === 1 && <User className="h-4 w-4 text-primary" />}
                  {gi === 2 && <Calendar className="h-4 w-4 text-primary" />}
                  <h3 className="font-semibold text-sm">{group.title}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {group.keys.map((k) => (
                    <div key={k} className="p-3 rounded-xl bg-muted/30 border border-border/40">
                      <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">{labels[k]}</p>
                      <p className="mt-1 text-sm font-medium break-words">
                        {k === "studentName" || k === "fatherName" || k === "motherName"
                          ? formatDisplayName(data?.[k]) || "—"
                          : data?.[k] ?? "—"}
                      </p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
