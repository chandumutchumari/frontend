import { c as require_jsx_runtime } from "./_libs/@radix-ui/react-arrow+[...].mjs";
import { B as BookMarked, D as ClipboardList, L as CalendarDays, Y as FilePenLine, b as KeyRound } from "./_libs/lucide-react.mjs";
import { t as PageHeader } from "./_ssr/PageHeader-DLBP-QUk.mjs";
import { t as NavCard } from "./_ssr/NavCard-nuSf2xMd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.academics.index-DYL5PQ9Z.js
var import_jsx_runtime = require_jsx_runtime();
var cards = [
	{
		to: "/academics/attendance",
		title: "Attendance",
		desc: "Subject-wise attendance summary with analytics.",
		icon: ClipboardList
	},
	{
		to: "/academics/subjects",
		title: "Subjects",
		desc: "Current semester courses and credit details.",
		icon: BookMarked
	},
	{
		to: "/academics/timetable",
		title: "Timetable",
		desc: "Weekly class schedule and time slots.",
		icon: CalendarDays
	},
	{
		to: "/academics/registration",
		title: "Course Registration",
		desc: "Register for upcoming term courses.",
		icon: FilePenLine
	},
	{
		to: "/academics/attendance-code",
		title: "Attendance Code",
		desc: "Submit the portal attendance code.",
		icon: KeyRound
	}
];
function AcademicsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Academics",
		subtitle: "Manage your courses, attendance, and class schedule."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4",
		children: cards.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavCard, {
			to: c.to,
			title: c.title,
			description: c.desc,
			icon: c.icon,
			delay: i * .05
		}, c.to))
	})] });
}
//#endregion
export { AcademicsPage as component };
