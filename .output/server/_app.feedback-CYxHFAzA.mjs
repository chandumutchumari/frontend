import { c as require_jsx_runtime } from "./_libs/@radix-ui/react-arrow+[...].mjs";
import { t as cn } from "./_ssr/utils-C_uf36nf.mjs";
import { t as useQuery } from "./_libs/tanstack__react-query.mjs";
import { C as Clock, J as CircleCheck, b as History } from "./_libs/lucide-react.mjs";
import { t as PageHeader } from "./_ssr/PageHeader-DLBP-QUk.mjs";
import { t as GlassCard } from "./_ssr/GlassCard-C5-F8y9S.mjs";
import { t as DataTable } from "./_ssr/DataTable-DeO_gRzh.mjs";
import { n as StatCardsSkeleton, r as TableSkeleton } from "./_ssr/page-skeleton-Bypv7KQQ.mjs";
import { t as StatCard } from "./_ssr/StatCard-CteE7drM.mjs";
import { t as Progress } from "./_ssr/progress-DOIEKRJF.mjs";
import { t as Badge } from "./_ssr/badge-D1Dupn2y.mjs";
import { t as getFeedback } from "./_ssr/feedback-QdDPK1c-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.feedback-CYxHFAzA.js
var import_jsx_runtime = require_jsx_runtime();
function FeedbackPage() {
	const { data, isLoading } = useQuery({
		queryKey: ["feedback"],
		queryFn: getFeedback
	});
	const total = (data?.completed ?? 0) + (data?.pending ?? 0);
	const completionPct = total ? Math.round((data?.completed ?? 0) / total * 100) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Feedback",
		subtitle: "Track and manage your course feedback submissions."
	}), isLoading || !data ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCardsSkeleton, { count: 3 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableSkeleton, { rows: 5 })
	})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: CircleCheck,
					label: "Completed",
					value: data.completed,
					hint: "Submitted feedback",
					accent: "success"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: Clock,
					label: "Pending",
					value: data.pending,
					hint: "Awaiting response",
					accent: "warning",
					delay: .05
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: History,
					label: "Total",
					value: total,
					hint: "All feedback items",
					delay: .1
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
			className: "mb-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between mb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium",
					children: "Completion Progress"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-sm font-bold text-primary",
					children: [completionPct, "%"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
				value: completionPct,
				className: "h-2.5"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
			data: data.history,
			searchKeys: [
				"course",
				"faculty",
				"status"
			],
			columns: [
				{
					key: "course",
					header: "Course",
					render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: r.course
					})
				},
				{
					key: "faculty",
					header: "Faculty"
				},
				{
					key: "date",
					header: "Date"
				},
				{
					key: "status",
					header: "Status",
					render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						className: cn("rounded-full font-semibold", r.status === "Completed" ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10" : "bg-amber-500/10 text-amber-600 dark:text-amber-400 hover:bg-amber-500/10"),
						children: r.status
					})
				}
			]
		})
	] })] });
}
//#endregion
export { FeedbackPage as component };
