import { c as require_jsx_runtime } from "./_libs/@radix-ui/react-arrow+[...].mjs";
import { t as cn } from "./_ssr/utils-C_uf36nf.mjs";
import { t as useQuery } from "./_libs/tanstack__react-query.mjs";
import { t as PageHeader } from "./_ssr/PageHeader-DLBP-QUk.mjs";
import { t as DataTable } from "./_ssr/DataTable-DeO_gRzh.mjs";
import { r as TableSkeleton } from "./_ssr/page-skeleton-Bypv7KQQ.mjs";
import { t as Badge } from "./_ssr/badge-D1Dupn2y.mjs";
import { t as getExamMarks } from "./_ssr/examinations-BBEzd2_n.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.examinations.marks-CZ-5yD1E.js
var import_jsx_runtime = require_jsx_runtime();
function ExamMarksPage() {
	const { data, isLoading } = useQuery({
		queryKey: ["exam-marks"],
		queryFn: getExamMarks
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Exam Marks",
		subtitle: "End-semester mark statements and grade details."
	}), isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableSkeleton, { rows: 6 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
		data: data ?? [],
		searchKeys: [
			"subjectCode",
			"subjectDescription",
			"semester",
			"grade"
		],
		empty: "No exam marks available",
		columns: [
			{
				key: "semester",
				header: "Semester"
			},
			{
				key: "examMonthYear",
				header: "Month & Year"
			},
			{
				key: "subjectCode",
				header: "Code",
				render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xs font-semibold",
					children: r.subjectCode
				})
			},
			{
				key: "subjectDescription",
				header: "Subject",
				render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium",
					children: r.subjectDescription
				})
			},
			{
				key: "credits",
				header: "Credits"
			},
			{
				key: "grade",
				header: "Grade",
				render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "secondary",
					className: "rounded-lg font-bold",
					children: r.grade
				})
			},
			{
				key: "gradePoints",
				header: "GP",
				render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold",
					children: r.gradePoints
				})
			},
			{
				key: "result",
				header: "Result",
				render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					className: cn("rounded-full", String(r.result).toLowerCase() === "pass" ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10" : "bg-red-500/10 text-red-600 dark:text-red-400 hover:bg-red-500/10"),
					children: r.result
				})
			},
			{
				key: "attempt",
				header: "Attempt"
			}
		]
	})] });
}
//#endregion
export { ExamMarksPage as component };
