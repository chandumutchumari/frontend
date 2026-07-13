import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/NotificationContext-CbCtkVlc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NotificationContext = (0, import_react.createContext)(void 0);
var initialNotifications = [{
	id: "1",
	title: "Course registration postponed",
	message: "Course registration has been postponed to 6th July.",
	time: "1d ago",
	type: "info"
}];
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
	const value = (0, import_react.useMemo)(() => ({
		notifications,
		addNotification
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
