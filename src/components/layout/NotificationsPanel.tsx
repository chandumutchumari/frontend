import { Bell, CheckCircle2, Clock, Info } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useNotifications } from "@/context/NotificationContext";

const iconMap = {
  warning: Clock,
  success: CheckCircle2,
  info: Info,
};

const colorMap = {
  warning: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  success: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  info: "bg-primary/10 text-primary",
};

export function NotificationsPanel() {
  const { notifications } = useNotifications();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          aria-label="Notifications"
          className="relative p-2.5 rounded-xl hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-all"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-destructive ring-2 ring-card" />
        </button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-80 p-0 rounded-2xl glass-strong glass-border" sideOffset={8}>
        <div className="px-4 py-3 border-b border-border/60">
          <h4 className="font-semibold text-sm">Notifications</h4>
          <p className="text-xs text-muted-foreground mt-0.5">{notifications.length} unread</p>
        </div>
        <div className="max-h-72 overflow-y-auto scrollbar-thin">
          {notifications.map((n) => {
            const Icon = iconMap[n.type];
            return (
              <div key={n.id} className="px-4 py-3 border-b border-border/40 last:border-0 hover:bg-muted/40 transition-colors cursor-pointer">
                <div className="flex gap-3">
                  <div className={cn("h-8 w-8 rounded-lg grid place-items-center shrink-0", colorMap[n.type])}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium">{n.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{n.message}</p>
                    <p className="text-[10px] text-muted-foreground mt-1">{n.time}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="px-4 py-2.5 border-t border-border/60">
          <button className="text-xs font-medium text-primary hover:underline w-full text-center">View all notifications</button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
