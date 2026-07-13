import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  BookOpen,
  Calendar,
  GraduationCap,
  Home,
  MessageSquare,
  TrendingUp,
  KeyRound,
  Award,
  ClipboardList,
} from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatCard } from "@/components/ui/StatCard";
import { QuickActionCard } from "@/components/ui/QuickActionCard";
import { GlassCard } from "@/components/ui/GlassCard";
import { DashboardSkeleton } from "@/components/ui/page-skeleton";
import { CalendarWidget } from "@/components/dashboard/CalendarWidget";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getProfile } from "@/services/profile";
import { getAttendance, getSubjects } from "@/services/academics";
import { getSemesterResult } from "@/services/examinations";
import { getFeedback } from "@/services/feedback";
import { Badge } from "@/components/ui/badge";
import { formatDisplayName } from "@/utils/formatter";

export const Route = createFileRoute("/_app/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — campuSync" }] }),
  component: DashboardPage,
});

function DashboardPage() {
  const { data: profile, isLoading: profileLoading } = useQuery({ queryKey: ["profile"], queryFn: getProfile });
  const { data: attendance, isLoading: attLoading } = useQuery({ queryKey: ["attendance"], queryFn: getAttendance });
  const { data: subjects, isLoading: subjectsLoading } = useQuery({ queryKey: ["subjects"], queryFn: getSubjects });
  const { data: result, isLoading: resultLoading } = useQuery({ queryKey: ["semester-result"], queryFn: getSemesterResult });
  const { data: feedback } = useQuery({ queryKey: ["feedback"], queryFn: getFeedback });

  const isLoading = profileLoading || attLoading || resultLoading || subjectsLoading;

  const avgAttendance = attendance?.length
    ? Math.round(attendance.reduce((s, a) => s + a.attendancePercentage, 0) / attendance.length)
    : 0;

  const displayStudentName = formatDisplayName(profile?.studentName);
  const firstName = displayStudentName.split(" ")[0] || "Student";

  if (isLoading) return <DashboardSkeleton />;

  return (
    <div>
      <PageHeader
        title={profile ? `Welcome back!👋 ${firstName}` : "Welcome"}
        subtitle="Everything you need for your academic journey, all in one place."
        badge={
          profile?.semester ? (
            <Badge variant="secondary" className="rounded-full px-3 py-0.5 text-xs font-medium">
              Semester {profile.semester}
            </Badge>
          ) : undefined
        }
      />

      <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <StatCard icon={Award} label="CGPA" value={result?.cgpa.toFixed(2) ?? "—"} hint="All semesters combined" delay={0} accent="success" />
        <StatCard icon={TrendingUp} label="SGPA" value={result?.gpa.toFixed(2) ?? "—"} hint="Current semester" delay={0.05} />
        <StatCard icon={BookOpen} label="Subjects" value={subjects?.length ?? 0} hint="Enrolled this semester" delay={0.1} />
        <StatCard icon={ClipboardList} label="Attendance" value={`${avgAttendance}%`} hint="Average attendance" delay={0.15} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          <GlassCard delay={0.3} className="lg:col-span-2">
          <h3 className="font-semibold text-sm mb-4">Quick Actions</h3>
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3">
            <QuickActionCard to="/profile" label="Profile" icon={BookOpen} description="View details" />
            <QuickActionCard to="/academics" label="Academics" icon={GraduationCap} description="Courses & schedule" />
            <QuickActionCard to="/examinations" label="Exams" icon={Calendar} description="Marks & results" />
            <QuickActionCard to="/feedback" label="Feedback" icon={MessageSquare} description={`${feedback?.pending ?? 0} pending`} />
            <QuickActionCard to="/academics/attendance-code" label="Att. Code" icon={KeyRound} description="Submit code" />
            <Dialog>
              <DialogTrigger asChild>
                <QuickActionCard
                  asButton
                  badge={
                    <>
                      <span className="badge-ripple" />
                      New
                    </>
                  }
                  icon={Home}
                  label="Know Your Roommates"
                  buttonProps={{ type: "button" }}
                />
              </DialogTrigger>
              <DialogContent className="max-w-md border-border/60 bg-background/95 p-0 shadow-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="rounded-2xl border border-border/60 bg-background/95 p-5 sm:p-6"
                >
                  <div className="mb-4 flex items-start gap-3">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
                      <Home className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <DialogTitle className="text-left text-base font-semibold">🏠 Hostel Details</DialogTitle>
                      <DialogDescription className="text-left text-sm leading-6 text-muted-foreground">
                        Hostel information will be available here once the official hostel allocation details are updated.
                      </DialogDescription>
                    </div>
                  </div>
                  <DialogFooter className="flex justify-end">
                    <DialogClose asChild>
                      <Button variant="secondary">Got It</Button>
                    </DialogClose>
                  </DialogFooter>
                </motion.div>
              </DialogContent>
            </Dialog>
          </div>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-6">
        <div className="space-y-4">
          <CalendarWidget />
        </div>
      </div>
    </div>
  );
}
