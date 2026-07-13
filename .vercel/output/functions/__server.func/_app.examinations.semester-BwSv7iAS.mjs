import { c as require_jsx_runtime } from "./_libs/@radix-ui/react-arrow+[...].mjs";
import { t as cn } from "./_ssr/utils-C_uf36nf.mjs";
import { t as useQuery } from "./_libs/tanstack__react-query.mjs";
import { $ as ChartLine } from "./_libs/lucide-react.mjs";
import { t as PageHeader } from "./_ssr/PageHeader-DLBP-QUk.mjs";
import { t as GlassCard } from "./_ssr/GlassCard-C5-F8y9S.mjs";
import { t as DataTable } from "./_ssr/DataTable-DeO_gRzh.mjs";
import { r as TableSkeleton } from "./_ssr/page-skeleton-Bypv7KQQ.mjs";
import { t as CircularProgress } from "./_ssr/CircularProgress-rlDUVetM.mjs";
import { a as XAxis, i as YAxis, o as Line, r as LineChart, s as CartesianGrid } from "./_libs/recharts+[...].mjs";
import { n as ChartTooltip, r as ChartTooltipContent, t as ChartContainer } from "./_ssr/chart-DsRcMD_V.mjs";
import { t as Badge } from "./_ssr/badge-D1Dupn2y.mjs";
import { r as getSemesterResult } from "./_ssr/examinations-Dwod4A6X.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.examinations.semester-BwSv7iAS.js
var import_jsx_runtime = require_jsx_runtime();
var chartConfig = { gpa: {
	label: "GPA",
	color: "var(--color-chart-3)"
} };
function SemesterLineChart({ data, title = "Semester Performance", delay = .1 }) {
	if (!data.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
		delay,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 mb-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartLine, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-semibold text-sm",
				children: title
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContainer, {
			config: chartConfig,
			className: "h-[220px] w-full aspect-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
				data,
				margin: {
					top: 5,
					right: 5,
					left: -20,
					bottom: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						strokeDasharray: "3 3",
						vertical: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "semester",
						tickLine: false,
						axisLine: false,
						fontSize: 11
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						domain: [0, 10],
						tickLine: false,
						axisLine: false,
						fontSize: 11
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltip, { content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltipContent, {}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						type: "monotone",
						dataKey: "gpa",
						stroke: "var(--color-chart-3)",
						strokeWidth: 2.5,
						dot: {
							fill: "var(--color-chart-3)",
							strokeWidth: 2,
							r: 4
						},
						activeDot: { r: 6 }
					})
				]
			})
		})]
	});
}
function SemesterPage() {
	const { data, isLoading } = useQuery({
		queryKey: ["semester-result"],
		queryFn: getSemesterResult
	});
	const gpaPercent = data ? data.gpa / 10 * 100 : 0;
	const semesterChartData = data ? [{
		semester: data.semester || "Current",
		gpa: data.gpa
	}] : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Semester Results",
		subtitle: "Your grades and grade-point summary."
	}), isLoading || !data ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableSkeleton, { rows: 6 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl p-6 text-primary-foreground relative overflow-hidden md:col-span-1",
					style: {
						background: "var(--gradient-primary)",
						boxShadow: "var(--shadow-elegant)"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 w-24 h-24 rounded-full opacity-20 bg-white -translate-y-1/2 translate-x-1/2" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wider opacity-80 font-semibold",
							children: "SGPA"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-5xl font-black mt-2",
							children: data.gpa.toFixed(2)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm opacity-90 mt-2",
							children: data.semester
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, {
					className: "flex flex-col items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircularProgress, {
						value: gpaPercent,
						label: "GPA",
						sublabel: `Out of 10.0`
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold",
						children: "CGPA"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-4xl font-black mt-2 text-gradient",
						children: data.cgpa.toFixed(2)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground mt-2",
						children: "All semesters combined"
					})
				] })
			]
		}),
		semesterChartData.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-6 max-w-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SemesterLineChart, { data: semesterChartData })
		}),
		data.currentSemesterResults?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-lg font-semibold mb-2",
				children: "Current Semester Results"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-4 text-sm text-muted-foreground",
				children: "All Pass results are shown in green and all Fail results are shown in red."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				data: data.currentSemesterResults,
				searchKeys: [
					"subjectCode",
					"subjectDescription",
					"grade"
				],
				columns: [
					{
						key: "semester",
						header: "Semester"
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
						header: "Subject"
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
						key: "result",
						header: "Result",
						render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							className: cn("rounded-full", String(r.result).toLowerCase() === "pass" ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10" : "bg-red-500/10 text-red-600 dark:text-red-400 hover:bg-red-500/10"),
							children: r.result
						})
					}
				]
			})
		] }) : null
	] })] });
}
//#endregion
export { SemesterPage as component };
