import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { format, parseISO, startOfDay } from "date-fns";
import academicEvents from "../../academic-events.json";

export type NotificationType = "warning" | "success" | "info";

export type NotificationItem = {
  id: string;
  title: string;
  message: string;
  time: string;
  type: NotificationType;
};

type NotificationContextValue = {
  notifications: NotificationItem[];
  addNotification: (notification: Omit<NotificationItem, "id" | "time"> & { time?: string }) => void;
  removeNotification: (id: string) => void;
};

const NotificationContext = createContext<NotificationContextValue | undefined>(undefined);

const initialNotifications: NotificationItem[] = [];

type AcademicEvent = {
  id: number;
  date: string;
  title: string;
  category: string;
  description: string;
  color: string;
};

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState<NotificationItem[]>(initialNotifications);

  const addNotification = (notification: Omit<NotificationItem, "id" | "time"> & { time?: string }) => {
    const newNotification: NotificationItem = {
      id: `${Date.now()}`,
      time: notification.time ?? "Just now",
      ...notification,
    };

    setNotifications((current) => [newNotification, ...current]);
  };

  const removeNotification = (id: string) => {
    setNotifications((current) => current.filter((notification) => notification.id !== id));
  };

  useEffect(() => {
    const events = (academicEvents as AcademicEvent[]).map((event) => ({ ...event, date: event.date }));

    const syncEventNotifications = () => {
      const now = new Date();
      const upcomingEvents = events.filter((event) => {
        const eventDate = parseISO(event.date);
        const msUntilEvent = eventDate.getTime() - now.getTime();
        return msUntilEvent >= 0 && msUntilEvent < 24 * 60 * 60 * 1000;
      });

      const eventNotifications = upcomingEvents.map((event) => ({
        id: `event-${event.id}`,
        title: `${event.title} is imminent`,
        message: `Event starts on ${format(parseISO(event.date), "MMM d, yyyy")}.`,
        time: "Just now",
        type: "warning" as const,
      }));

      setNotifications((current) => {
        const nonEventNotifications = current.filter((notification) => !notification.id.startsWith("event-"));
        const eventNotificationMap = new Map(eventNotifications.map((notification) => [notification.id, notification]));

        const mergedEventNotifications = [
          ...eventNotifications,
          ...current.filter((notification) => notification.id.startsWith("event-") && !eventNotificationMap.has(notification.id)),
        ].filter((notification) => eventNotificationMap.has(notification.id));

        return [...eventNotifications, ...nonEventNotifications];
      });
    };

    syncEventNotifications();
    const interval = window.setInterval(syncEventNotifications, 5 * 60 * 1000);
    return () => window.clearInterval(interval);
  }, []);

  const value = useMemo(() => ({ notifications, addNotification, removeNotification }), [notifications]);

  return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>;
}

export function useNotifications() {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error("useNotifications must be used within a NotificationProvider");
  }

  return context;
}
