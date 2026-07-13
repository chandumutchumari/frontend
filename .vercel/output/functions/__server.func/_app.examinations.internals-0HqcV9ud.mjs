import { c as require_jsx_runtime } from "./_libs/@radix-ui/react-arrow+[...].mjs";
import { t as useQuery } from "./_libs/tanstack__react-query.mjs";
import { et as ChartColumn } from "./_libs/lucide-react.mjs";
import { t as PageHeader } from "./_ssr/PageHeader-DLBP-QUk.mjs";
import { t as GlassCard } from "./_ssr/GlassCard-C5-F8y9S.mjs";
import { t as DataTable } from "./_ssr/DataTable-DeO_gRzh.mjs";
import { r as TableSkeleton } from "./_ssr/page-skeleton-Bypv7KQQ.mjs";
import { a as XAxis, c as Bar, i as YAxis, n as BarChart, s as CartesianGrid } from "./_libs/recharts+[...].mjs";
import { n as ChartTooltip, r as ChartTooltipContent, t as ChartContainer } from "./_ssr/chart-DsRcMD_V.mjs";
import { t as Progress } from "./_ssr/progress-DOIEKRJF.mjs";
import { n as getInternalMarks } from "./_ssr/examinations-Dwod4A6X.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.examinations.internals-0HqcV9ud.js
var import_jsx_runtime = require_jsx_runtime();
var chartConfig = { marks: {
	label: "Marks",
	color: "var(--color-chart-2)"
} };
function SubjectBarChart({ data, title = "Subject-wise Marks", delay = .2 }) {
	if (!data.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
		delay,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 mb-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-semibold text-sm",
				children: title
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContainer, {
			config: chartConfig,
			className: "h-[240px] w-full aspect-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
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
						dataKey: "name",
						tickLine: false,
						axisLine: false,
						fontSize: 10,
						angle: -20,
						textAnchor: "end",
						height: 50
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						tickLine: false,
						axisLine: false,
						fontSize: 11
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltip, { content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltipContent, {}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						dataKey: "marks",
						fill: "var(--color-chart-2)",
						radius: [
							6,
							6,
							0,
							0
						]
					})
				]
			})
		})]
	});
}
function InternalsPage() {
	const { data, isLoading } = useQuery({
		queryKey: ["internals"],
		queryFn: getInternalMarks
	});
	const chartData = data?.slice(0, 8).map((m) => ({
		name: m.subjectCode.slice(0, 8),
		marks: m.marksObtained,
		max: m.maxMarks
	})) ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Internal Marks",
		subtitle: "Continuous internal assessment scores across subjects."
	}), isLoading || !data ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableSkeleton, { rows: 5 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [chartData.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubjectBarChart, {
			data: chartData,
			title: "Marks Overview"
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
		data,
		searchKeys: ["subjectCode", "subjectDescription"],
		columns: [
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
				key: "marksObtained",
				header: "Obtained",
				render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-bold text-primary",
					children: r.marksObtained
				})
			},
			{
				key: "maxMarks",
				header: "Max"
			},
			{
				key: "percentage",
				header: "Score",
				sortable: false,
				render: (r) => {
					const pct = r.maxMarks ? Math.round(r.marksObtained / r.maxMarks * 100) : 0;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 min-w-[120px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
							value: pct,
							className: "flex-1 h-2"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs font-semibold w-10",
							children: [pct, "%"]
						})]
					});
				}
			}
		]
	})] })] });
}
//#endregion
export { InternalsPage as component };
