import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  User,
  GraduationCap,
  FileText,
  MessageSquare,
  LogOut,
  X,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  BookMarked,
  CalendarDays,
  KeyRound,
  PenLine,
  Award,
  FileBarChart,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";

const mainItems = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/profile", label: "Profile", icon: User },
  { to: "/feedback", label: "Feedback", icon: MessageSquare },
] as const;

const academicItems = [
  { to: "/academics", label: "Overview", icon: GraduationCap },
  { to: "/academics/attendance", label: "Attendance", icon: ClipboardList },
  { to: "/academics/subjects", label: "Subjects", icon: BookMarked },
  { to: "/academics/timetable", label: "Timetable", icon: CalendarDays },
  { to: "/academics/attendance-code", label: "Att. Code", icon: KeyRound },
] as const;

const examItems = [
  { to: "/examinations", label: "Overview", icon: FileText },
  { to: "/examinations/internals", label: "Internals", icon: PenLine },
  { to: "/examinations/semester", label: "Results", icon: Award },
  { to: "/examinations/marks", label: "Exam Marks", icon: FileBarChart },
] as const;

interface Props {
  open: boolean;
  collapsed: boolean;
  onClose: () => void;
  onToggleCollapse: () => void;
}

function NavSection({
  title,
  items,
  pathname,
  collapsed,
  onClose,
}: {
  title: string;
  items: readonly { to: string; label: string; icon: typeof LayoutDashboard }[];
  pathname: string;
  collapsed: boolean;
  onClose: () => void;
}) {
  const isActive = (to: string) => pathname === to || (to !== "/academics" && to !== "/examinations" && pathname.startsWith(to + "/")) || (to === "/academics" && pathname === "/academics") || (to === "/examinations" && pathname === "/examinations");

  return (
    <div className="mb-4">
      {!collapsed && (
        <p className="px-3 mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/70">
          {title}
        </p>
      )}
      <div className="flex flex-col gap-0.5">
        {items.map((it) => {
          const active = isActive(it.to);
          return (
            <Link
              key={it.to}
              to={it.to}
              onClick={onClose}
              title={collapsed ? it.label : undefined}
              className={cn(
                  "relative flex items-center gap-3 px-3 py-3 min-h-[44px] rounded-xl text-sm font-medium transition-all duration-200",
                  "md:px-3 md:py-2.5 md:min-h-0",
                  active
                    ? "text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60",
                  collapsed && "justify-center px-2",
                )}
            >
              {active && (
                <motion.span
                  layoutId="sidebar-active"
                  className="absolute inset-0 rounded-xl"
                  style={{ background: "var(--gradient-primary)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
              <it.icon className={cn("relative h-4 w-4 shrink-0", active && "drop-shadow-sm")} />
              {!collapsed && <span className="relative truncate">{it.label}</span>}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export function Sidebar({ open, collapsed, onClose, onToggleCollapse }: Props) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { logout } = useAuth();

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-foreground/40 backdrop-blur-sm lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      <aside
        className={cn(
          "fixed lg:sticky top-0 left-0 z-40 h-screen shrink-0 border-r border-border/60 glass-strong transition-all duration-300 ease-out",
          collapsed ? "w-[72px]" : "w-64",
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        <div className={cn("flex h-16 items-center border-b border-border/60", collapsed ? "justify-center px-2" : "justify-between px-4")}>
          <div className={cn("flex items-center gap-2.5", collapsed && "justify-center")}>
            <div className="h-11 w-11 rounded-2xl shadow-md shrink-0 overflow-hidden bg-transparent">
              <img src="/images/logo.png" alt="campuSync logo" className="h-full w-full object-cover" />
            </div>
            {!collapsed && (
              <div>
                <p className="text-sm font-bold leading-tight tracking-tight font-sora">
                  <span className="text-[#111827] dark:text-white">campu</span>
                  <span className="logo-sync">Sync</span>
                </p>
                <p className="text-[10px] text-muted-foreground">Student Dashboard</p>
              </div>
            )}
          </div>
          {!collapsed && (
            <button onClick={onClose} className="lg:hidden p-1.5 rounded-lg hover:bg-muted/60 transition-colors">
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <nav className={cn("p-3 flex flex-col h-[calc(100vh-8rem)] overflow-y-auto scrollbar-thin", collapsed && "px-2")}>
          <NavSection title="Main" items={mainItems} pathname={pathname} collapsed={collapsed} onClose={onClose} />
          <NavSection title="Academics" items={academicItems} pathname={pathname} collapsed={collapsed} onClose={onClose} />
          <NavSection title="Examinations" items={examItems} pathname={pathname} collapsed={collapsed} onClose={onClose} />
        </nav>

        <div className={cn("absolute bottom-0 left-0 right-0 p-3 border-t border-border/60 glass-strong space-y-1", collapsed && "px-2")}>
          <button
            onClick={onToggleCollapse}
            className={cn(
              "hidden lg:flex w-full items-center gap-3 px-3 py-2 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors",
              collapsed && "justify-center px-2",
            )}
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <><ChevronLeft className="h-4 w-4" /><span>Collapse</span></>}
          </button>
          <button
            onClick={() => {
              logout();
              window.location.href = "/login";
            }}
            className={cn(
              "flex w-full items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors",
              collapsed && "justify-center px-2",
            )}
            title={collapsed ? "Logout" : undefined}
          >
            <LogOut className="h-4 w-4 shrink-0" />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
}
