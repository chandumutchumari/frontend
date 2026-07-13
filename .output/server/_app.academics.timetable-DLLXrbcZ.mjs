import { c as require_jsx_runtime } from "./_libs/@radix-ui/react-arrow+[...].mjs";
import { t as cn } from "./_ssr/utils-C_uf36nf.mjs";
import { t as useQuery } from "./_libs/tanstack__react-query.mjs";
import { t as PageHeader } from "./_ssr/PageHeader-DLBP-QUk.mjs";
import { t as GlassCard } from "./_ssr/GlassCard-C5-F8y9S.mjs";
import { r as TableSkeleton } from "./_ssr/page-skeleton-Bypv7KQQ.mjs";
import { r as getTimetable } from "./_ssr/academics-D-cZjyHS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.academics.timetable-DLLXrbcZ.js
var import_jsx_runtime = require_jsx_runtime();
var days = [
	"Mon",
	"Tue",
	"Wed",
	"Thu",
	"Fri",
	"Sat"
];
var dayColors = {
	Mon: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
	Tue: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
	Wed: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
	Thu: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
	Fri: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
	Sat: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20"
};
function TimetablePage() {
	const { data, isLoading } = useQuery({
		queryKey: ["timetable"],
		queryFn: getTimetable
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Timetable",
		subtitle: "Your weekly class schedule at a glance."
	}), isLoading || !data ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableSkeleton, { rows: 6 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, {
		padding: "none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto scrollbar-thin",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-sm min-w-[700px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "bg-muted/50 sticky top-0 backdrop-blur-md",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "text-left font-semibold px-4 py-3.5 text-muted-foreground",
						children: "Time"
					}), days.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "text-left font-semibold px-4 py-3.5 text-muted-foreground",
						children: d
					}, d))] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: data.map((slot, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-t border-border/50 hover:bg-muted/20 transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-4 py-3 font-mono text-xs text-muted-foreground whitespace-nowrap font-medium",
						children: slot.time
					}), days.map((d) => {
						const v = slot[d];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2.5",
							children: v && v !== "—" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("inline-block px-2.5 py-1.5 rounded-lg text-xs font-medium border", dayColors[d]),
								children: v
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground/40",
								children: "—"
							})
						}, d);
					})]
				}, i)) })]
			})
		})
	})] });
}
//#endregion
export { TimetablePage as component };
