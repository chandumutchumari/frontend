import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as academic_events_default } from "./academic-events-Pnu17fh9.mjs";
import { i as parseISO, m as format } from "../_libs/date-fns.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/NotificationContext-CQdoJU0u.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NotificationContext = (0, import_react.createContext)(void 0);
var initialNotifications = [];
function NotificationProvider({ children }) {
	const [notifications, setNotifications] = (0, import_react.useState)(initialNotifications);
	const addNotification = (notification) => {
		const newNotification = {
			id: `${Date.now()}`,
			time: notification.time ?? "Just now",
			...notification
		};
		setNotifications((current) => [newNotification, ...current]);
	};
	const removeNotification = (id) => {
		setNotifications((current) => current.filter((notification) => notification.id !== id));
	};
	(0, import_react.useEffect)(() => {
		const events = academic_events_default.map((event) => ({
			...event,
			date: event.date
		}));
		const syncEventNotifications = () => {
			const now = /* @__PURE__ */ new Date();
			const eventNotifications = events.filter((event) => {
				const msUntilEvent = parseISO(event.date).getTime() - now.getTime();
				return msUntilEvent >= 0 && msUntilEvent < 1440 * 60 * 1e3;
			}).map((event) => ({
				id: `event-${event.id}`,
				title: `${event.title} is imminent`,
				message: `Event starts on ${format(parseISO(event.date), "MMM d, yyyy")}.`,
				time: "Just now",
				type: "warning"
			}));
			setNotifications((current) => {
				const nonEventNotifications = current.filter((notification) => !notification.id.startsWith("event-"));
				const eventNotificationMap = new Map(eventNotifications.map((notification) => [notification.id, notification]));
				[...eventNotifications, ...current.filter((notification) => notification.id.startsWith("event-") && !eventNotificationMap.has(notification.id))].filter((notification) => eventNotificationMap.has(notification.id));
				return [...eventNotifications, ...nonEventNotifications];
			});
		};
		syncEventNotifications();
		const interval = window.setInterval(syncEventNotifications, 300 * 1e3);
		return () => window.clearInterval(interval);
	}, []);
	const value = (0, import_react.useMemo)(() => ({
		notifications,
		addNotification,
		removeNotification
	}), [notifications]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationContext.Provider, {
		value,
		children
	});
}
function useNotifications() {
	const context = (0, import_react.useContext)(NotificationContext);
	if (!context) throw new Error("useNotifications must be used within a NotificationProvider");
	return context;
}
//#endregion
export { useNotifications as n, NotificationProvider as t };
