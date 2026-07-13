import { c as require_jsx_runtime } from "./_libs/@radix-ui/react-arrow+[...].mjs";
import { t as cn } from "./_ssr/utils-C_uf36nf.mjs";
import { t as useQuery } from "./_libs/tanstack__react-query.mjs";
import { J as CircleCheck, V as TriangleAlert, Y as ChartPie, w as ClipboardList } from "./_libs/lucide-react.mjs";
import { t as PageHeader } from "./_ssr/PageHeader-DLBP-QUk.mjs";
import { t as GlassCard } from "./_ssr/GlassCard-C5-F8y9S.mjs";
import { t as DataTable } from "./_ssr/DataTable-DeO_gRzh.mjs";
import { n as StatCardsSkeleton, r as TableSkeleton } from "./_ssr/page-skeleton-Bypv7KQQ.mjs";
import { t as StatCard } from "./_ssr/StatCard-CteE7drM.mjs";
import { t as CircularProgress } from "./_ssr/CircularProgress-rlDUVetM.mjs";
import { l as Pie, t as PieChart, u as Cell } from "./_libs/recharts+[...].mjs";
import { n as ChartTooltip, r as ChartTooltipContent, t as ChartContainer } from "./_ssr/chart-DsRcMD_V.mjs";
import { t as getAttendance } from "./_ssr/academics-D-cZjyHS.mjs";
import { t as Progress } from "./_ssr/progress-DOIEKRJF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.academics.attendance-CHyupMP3.js
var import_jsx_runtime = require_jsx_runtime();
var COLORS = ["var(--color-chart-1)", "var(--color-chart-5)"];
function AttendanceDonutChart({ present, absent, title = "Attendance Distribution", delay = .25 }) {
	const data = [{
		name: "Present",
		value: present
	}, {
		name: "Absent",
		value: absent
	}].filter((d) => d.value > 0);
	if (!data.length) return null;
	const total = present + absent;
	const pct = total ? Math.round(present / total * 100) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
		delay,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 mb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartPie, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-semibold text-sm",
					children: title
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContainer, {
					config: {
						present: {
							label: "Present",
							color: "var(--color-chart-1)"
						},
						absent: {
							label: "Absent",
							color: "var(--color-chart-5)"
						}
					},
					className: "h-[200px] w-full aspect-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltip, { content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltipContent, { hideLabel: true }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
						data,
						cx: "50%",
						cy: "50%",
						innerRadius: 55,
						outerRadius: 80,
						paddingAngle: 3,
						dataKey: "value",
						strokeWidth: 0,
						children: data.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: COLORS[i % COLORS.length] }, i))
					})] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 flex flex-col items-center justify-center pointer-events-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-2xl font-bold",
						children: [pct, "%"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] text-muted-foreground uppercase",
						children: "Present"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-center gap-4 mt-2",
				children: data.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5 text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-2.5 w-2.5 rounded-full",
						style: { background: COLORS[i] }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-muted-foreground",
						children: [
							d.name,
							": ",
							d.value
						]
					})]
				}, d.name))
			})
		]
	});
}
function AttendancePage() {
	const { data, isLoading } = useQuery({
		queryKey: ["attendance"],
		queryFn: getAttendance
	});
	const avg = data?.length ? Math.round(data.reduce((s, a) => s + a.attendancePercentage, 0) / data.length) : 0;
	const belowThreshold = data?.filter((a) => a.attendancePercentage < 75).length ?? 0;
	const aboveThreshold = data?.filter((a) => a.attendancePercentage >= 75).length ?? 0;
	const totalPresent = data?.reduce((s, a) => s + a.present, 0) ?? 0;
	const totalAbsent = data?.reduce((s, a) => s + a.absent, 0) ?? 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Attendance",
		subtitle: "Track your subject-wise attendance and stay above the threshold."
	}), isLoading || !data ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCardsSkeleton, { count: 3 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableSkeleton, { rows: 6 })
	})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: ClipboardList,
					label: "Average",
					value: `${avg}%`,
					hint: "Across all subjects",
					accent: avg >= 75 ? "success" : "warning"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: CircleCheck,
					label: "Above 75%",
					value: aboveThreshold,
					hint: "Subjects on track",
					accent: "success",
					delay: .05
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: TriangleAlert,
					label: "Below 75%",
					value: belowThreshold,
					hint: "Needs attention",
					accent: "warning",
					delay: .1
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, {
				className: "flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircularProgress, {
					value: avg,
					label: "Avg",
					sublabel: "Overall attendance"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AttendanceDonutChart, {
					present: totalPresent,
					absent: totalAbsent
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
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
					key: "classesConducted",
					header: "Conducted"
				},
				{
					key: "present",
					header: "Present"
				},
				{
					key: "absent",
					header: "Absent"
				},
				{
					key: "attendancePercentage",
					header: "Percentage",
					render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 min-w-[160px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
							value: r.attendancePercentage,
							className: cn("flex-1 h-2", r.attendancePercentage < 75 && "[&>div]:bg-amber-500")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: cn("text-xs font-bold w-10 text-right", r.attendancePercentage < 75 ? "text-amber-600 dark:text-amber-400" : "text-emerald-600 dark:text-emerald-400"),
							children: [r.attendancePercentage, "%"]
						})]
					})
				}
			]
		})
	] })] });
}
//#endregion
export { AttendancePage as component };
