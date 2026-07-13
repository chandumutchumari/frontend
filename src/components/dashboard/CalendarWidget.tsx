import { Calendar } from "@/components/ui/calendar";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";
import { format, parseISO, startOfDay } from "date-fns";
import { CalendarDays, Clock3 } from "lucide-react";
import { useMemo, useState } from "react";
import academicEvents from "../../../academic-events.json";

type AcademicEvent = {
  id: number;
  date: string;
  title: string;
  category: string;
  description: string;
  color: string;
};

const colorStyles: Record<string, { dotClass: string; pillClass: string; cardClass: string }> = {
  orange: {
    dotClass: "bg-orange-500",
    pillClass: "bg-orange-500/10 text-orange-700 dark:text-orange-300",
    cardClass: "border-orange-500/40",
  },
  blue: {
    dotClass: "bg-sky-500",
    pillClass: "bg-sky-500/10 text-sky-700 dark:text-sky-300",
    cardClass: "border-sky-500/40",
  },
  purple: {
    dotClass: "bg-violet-500",
    pillClass: "bg-violet-500/10 text-violet-700 dark:text-violet-300",
    cardClass: "border-violet-500/40",
  },
  cyan: {
    dotClass: "bg-cyan-500",
    pillClass: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300",
    cardClass: "border-cyan-500/40",
  },
  green: {
    dotClass: "bg-emerald-500",
    pillClass: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
    cardClass: "border-emerald-500/40",
  },
  yellow: {
    dotClass: "bg-amber-500",
    pillClass: "bg-amber-500/10 text-amber-700 dark:text-amber-300",
    cardClass: "border-amber-500/40",
  },
  red: {
    dotClass: "bg-rose-500",
    pillClass: "bg-rose-500/10 text-rose-700 dark:text-rose-300",
    cardClass: "border-rose-500/40",
  },
};

const fallbackStyle = {
  dotClass: "bg-primary",
  pillClass: "bg-primary/10 text-primary",
  cardClass: "border-border/40",
};

export function CalendarWidget() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const events = useMemo<AcademicEvent[]>(() => {
    return (academicEvents as AcademicEvent[]).map((event) => ({ ...event, date: event.date }));
  }, []);

  const eventsByDate = useMemo(() => {
    return events.reduce<Map<string, AcademicEvent[]>>((accumulator, event) => {
      const existing = accumulator.get(event.date) ?? [];
      existing.push(event);
      accumulator.set(event.date, existing);
      return accumulator;
    }, new Map());
  }, [events]);

  const today = startOfDay(new Date());
  const tomorrow = startOfDay(new Date(today));
  tomorrow.setDate(tomorrow.getDate() + 1);

  const todayKey = format(today, "yyyy-MM-dd");
  const tomorrowKey = format(tomorrow, "yyyy-MM-dd");

  const todayEvents = eventsByDate.get(todayKey) ?? [];
  const tomorrowEvents = eventsByDate.get(tomorrowKey) ?? [];
  const upcomingEvents = [...events]
    .filter((event) => parseISO(event.date) >= today)
    .sort((left, right) => parseISO(left.date).getTime() - parseISO(right.date).getTime())
    .slice(0, 5);

  return (
    <GlassCard delay={0.3}>
      <div className="flex items-center gap-2 mb-4">
        <CalendarDays className="h-4 w-4 text-primary" />
        <h3 className="font-semibold text-sm">Calendar</h3>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.35fr)_minmax(220px,280px)]">
        <div>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-xl border border-border/40 p-0 pointer-events-auto"
            components={{
              DayContent: ({ date: dayDate }) => {
                const key = format(dayDate, "yyyy-MM-dd");
                const dayEvents = eventsByDate.get(key) ?? [];

                return (
                  <div className="relative flex h-full w-full items-center justify-center">
                    <span>{format(dayDate, "d")}</span>
                    {dayEvents.length > 0 ? (
                      <div className="absolute bottom-0.5 left-1/2 flex -translate-x-1/2 gap-1">
                        {dayEvents.slice(0, 3).map((event) => {
                          const styles = colorStyles[event.color] ?? fallbackStyle;
                          return <span key={`${event.id}-${event.title}`} className={cn("h-1.5 w-1.5 rounded-full", styles.dotClass)} />;
                        })}
                      </div>
                    ) : null}
                  </div>
                );
              },
            }}
          />
        </div>

        <div className="space-y-3">
          <div className="rounded-xl border border-border/40 bg-background/70 p-3">
            <div className="mb-3 flex items-center justify-between">
              <h4 className="text-sm font-semibold">Upcoming Events</h4>
              <span className="text-[11px] font-medium text-muted-foreground">Next 5</span>
            </div>
            <div className="space-y-2">
              {upcomingEvents.length > 0 ? (
                upcomingEvents.map((event) => {
                  const styles = colorStyles[event.color] ?? fallbackStyle;
                  return (
                    <div key={event.id} className={cn("rounded-lg border bg-background/70 p-2.5", styles.cardClass)}>
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="text-sm font-medium leading-tight">{event.title}</p>
                          <p className="mt-1 text-xs text-muted-foreground">{format(parseISO(event.date), "MMM d, yyyy")}</p>
                        </div>
                        <span className={cn("rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-wide", styles.pillClass)}>
                          {event.category}
                        </span>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-sm text-muted-foreground">No upcoming events.</p>
              )}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
            <div>
              {todayEvents.length > 0 ? (
                <div className="space-y-2">
                  {todayEvents.map((event) => {
                    const styles = colorStyles[event.color] ?? fallbackStyle;
                    return (
                      <div key={event.id} className={cn("rounded-lg bg-background/60 p-2.5", styles.cardClass)}>
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-sm font-medium leading-tight">{event.title}</p>
                          <span className={cn("rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-wide", styles.pillClass)}>
                            {event.category}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>

            <div>
              {tomorrowEvents.length > 0 ? (
                <div className="space-y-2">
                  {tomorrowEvents.map((event) => {
                    const styles = colorStyles[event.color] ?? fallbackStyle;
                    return (
                      <div key={event.id} className={cn("rounded-lg bg-background/60 p-2.5", styles.cardClass)}>
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-sm font-medium leading-tight">{event.title}</p>
                          <span className={cn("rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-wide", styles.pillClass)}>
                            {event.category}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
