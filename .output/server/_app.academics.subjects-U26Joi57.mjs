import { c as require_jsx_runtime } from "./_libs/@radix-ui/react-arrow+[...].mjs";
import { t as useQuery } from "./_libs/tanstack__react-query.mjs";
import { L as BookMarked, W as Layers } from "./_libs/lucide-react.mjs";
import { t as PageHeader } from "./_ssr/PageHeader-DLBP-QUk.mjs";
import { t as DataTable } from "./_ssr/DataTable-DeO_gRzh.mjs";
import { n as StatCardsSkeleton, r as TableSkeleton } from "./_ssr/page-skeleton-Bypv7KQQ.mjs";
import { t as StatCard } from "./_ssr/StatCard-CteE7drM.mjs";
import { n as getSubjects } from "./_ssr/academics-D-cZjyHS.mjs";
import { t as Badge } from "./_ssr/badge-D1Dupn2y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.academics.subjects-U26Joi57.js
var import_jsx_runtime = require_jsx_runtime();
function SubjectsPage() {
	const { data, isLoading } = useQuery({
		queryKey: ["subjects"],
		queryFn: getSubjects
	});
	const totalCredits = data?.reduce((s, sub) => s + sub.credits, 0) ?? 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Subjects",
		subtitle: "Courses you're enrolled in this semester."
	}), isLoading || !data ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCardsSkeleton, { count: 2 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableSkeleton, { rows: 5 })
	})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
			icon: BookMarked,
			label: "Total Subjects",
			value: data.length,
			hint: "Enrolled this semester"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
			icon: Layers,
			label: "Total Credits",
			value: totalCredits,
			hint: "Credit hours",
			delay: .05,
			accent: "success"
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
		data,
		searchKeys: ["code", "name"],
		columns: [
			{
				key: "code",
				header: "Code",
				render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "outline",
					className: "font-mono text-xs rounded-lg",
					children: r.code
				})
			},
			{
				key: "name",
				header: "Subject Name",
				render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium",
					children: r.name
				})
			},
			{
				key: "credits",
				header: "Credits",
				render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold text-primary",
					children: r.credits
				})
			}
		]
	})] })] });
}
//#endregion
export { SubjectsPage as component };
