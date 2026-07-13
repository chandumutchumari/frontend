import { Menu, Moon, Sun, User, Settings, LogOut } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useTheme } from "@/context/ThemeContext";
import { useAuth } from "@/context/AuthContext";
import { Breadcrumbs } from "./Breadcrumbs";
import { NotificationsPanel } from "./NotificationsPanel";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getProfile } from "@/services/profile";
import { cn } from "@/lib/utils";
import { formatDisplayName } from "@/utils/formatter";

interface Props {
  onMenu: () => void;
  collapsed?: boolean;
}

export function Topbar({ onMenu }: Props) {
  const { theme, toggle } = useTheme();
  const { logout } = useAuth();
  const { data: profile } = useQuery({ queryKey: ["profile"], queryFn: getProfile });



  const displayStudentName = formatDisplayName(profile?.studentName);
  const firstName = displayStudentName.split(" ")[0] || "Student";
  const initials = displayStudentName
    ? displayStudentName.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase()
    : "ST";

  return (
    <header className="sticky top-0 z-20 h-12 md:h-16 glass-strong border-b border-border/60">
      <div className="h-full px-3 sm:px-6 flex items-center gap-3">
        <button
          onClick={onMenu}
          className="lg:hidden p-3 md:p-2 rounded-xl hover:bg-muted/80 transition-colors grid place-items-center"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <h1 className="ml-3">
          <Link
            to="/"
            className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-none font-sora"
          >
            <span className="text-[#111827] dark:text-white">campu</span>
            <span className="logo-sync">Sync</span>
          </Link>
        </h1>

        <div className="hidden md:block flex-1 min-w-0">
          <Breadcrumbs />
        </div>

        <div className="flex-1 md:flex-none ml-auto md:ml-0" />

        <div className="flex items-center gap-1">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-3 md:p-2.5 rounded-xl hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-all"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <NotificationsPanel />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={cn(
                  "flex items-center gap-2.5 pl-1 pr-2 py-1 rounded-xl hover:bg-muted/80 transition-all",
                )}
              >
                <div
                  className="h-9 w-9 rounded-xl grid place-items-center text-sm font-bold text-primary-foreground shrink-0 shadow-sm"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  {initials}
                </div>
                <div className="hidden sm:block text-left">
                  <p className="text-sm font-semibold leading-tight truncate max-w-[120px]">
                    {firstName}
                  </p>
                  <p className="text-[10px] text-muted-foreground truncate max-w-[120px]">
                    {profile?.registerNumber ?? "—"}
                  </p>
                </div>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 rounded-xl glass-strong glass-border">
              <DropdownMenuLabel>
                <p className="font-semibold">{displayStudentName || "Student"}</p>
                <p className="text-xs text-muted-foreground font-normal">{profile?.program ?? "Student Portal"}</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/profile" className="cursor-pointer gap-2">
                  <User className="h-4 w-4" />
                  My Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2 cursor-pointer">
                <Settings className="h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="gap-2 cursor-pointer text-destructive focus:text-destructive"
                onClick={() => {
                  logout();
                  window.location.href = "/login";
                }}
              >
                <LogOut className="h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
