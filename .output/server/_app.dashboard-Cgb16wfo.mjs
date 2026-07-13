import { o as __toESM } from "./_runtime.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "./_libs/@radix-ui/react-arrow+[...].mjs";
import { n as useNotifications } from "./_ssr/NotificationContext-CbCtkVlc.mjs";
import { t as cn } from "./_ssr/utils-C_uf36nf.mjs";
import { t as getProfile } from "./_ssr/profile-X--K5P3c.mjs";
import { g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as useQuery } from "./_libs/tanstack__react-query.mjs";
import { A as ChevronLeft, I as BookOpen, N as Calendar, P as CalendarDays, _ as KeyRound, f as MessageSquare, j as ChevronDown, k as ChevronRight, r as TrendingUp, w as ClipboardList, x as GraduationCap, z as Award } from "./_libs/lucide-react.mjs";
import { t as PageHeader } from "./_ssr/PageHeader-DLBP-QUk.mjs";
import { t as GlassCard } from "./_ssr/GlassCard-C5-F8y9S.mjs";
import { n as buttonVariants, t as Button } from "./_ssr/button-BkEeRci-.mjs";
import { t as DashboardSkeleton } from "./_ssr/page-skeleton-Bypv7KQQ.mjs";
import { t as StatCard } from "./_ssr/StatCard-CteE7drM.mjs";
import { n as getSubjects, t as getAttendance } from "./_ssr/academics-D-cZjyHS.mjs";
import { t as Badge } from "./_ssr/badge-D1Dupn2y.mjs";
import { r as getSemesterResult } from "./_ssr/examinations-BBEzd2_n.mjs";
import { t as getFeedback } from "./_ssr/feedback-QdDPK1c-.mjs";
import { n as getDefaultClassNames, t as DayPicker } from "./_libs/react-day-picker.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.dashboard-Cgb16wfo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function QuickActionCard({ to, label, icon: Icon, description }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: cn("group flex flex-col items-center gap-2.5 p-4 rounded-xl border border-border/60", "bg-background/50 hover:bg-primary/5 hover:border-primary/30 transition-all duration-200"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-10 w-10 grid place-items-center rounded-xl text-primary-foreground group-hover:scale-105 transition-transform",
			style: { background: "var(--gradient-primary)" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium",
				children: label
			}), description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[10px] text-muted-foreground mt-0.5",
				children: description
			})]
		})]
	});
}
function Calendar$1({ className, classNames, showOutsideDays = true, captionLayout = "label", buttonVariant = "ghost", formatters, components, ...props }) {
	const defaultClassNames = getDefaultClassNames();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayPicker, {
		showOutsideDays,
		className: cn("bg-background group/calendar p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent", String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`, String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`, className),
		captionLayout,
		formatters: {
			formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
			...formatters
		},
		classNames: {
			root: cn("w-fit", defaultClassNames.root),
			months: cn("relative flex flex-col gap-4 md:flex-row", defaultClassNames.months),
			month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
			nav: cn("absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1", defaultClassNames.nav),
			button_previous: cn(buttonVariants({ variant: buttonVariant }), "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50", defaultClassNames.button_previous),
			button_next: cn(buttonVariants({ variant: buttonVariant }), "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50", defaultClassNames.button_next),
			month_caption: cn("flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)", defaultClassNames.month_caption),
			dropdowns: cn("flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium", defaultClassNames.dropdowns),
			dropdown_root: cn("has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border", defaultClassNames.dropdown_root),
			dropdown: cn("bg-popover absolute inset-0 opacity-0", defaultClassNames.dropdown),
			caption_label: cn("select-none font-medium", captionLayout === "label" ? "text-sm" : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5", defaultClassNames.caption_label),
			table: "w-full border-collapse",
			weekdays: cn("flex", defaultClassNames.weekdays),
			weekday: cn("text-muted-foreground flex-1 select-none rounded-md text-[0.8rem] font-normal", defaultClassNames.weekday),
			week: cn("mt-2 flex w-full", defaultClassNames.week),
			week_number_header: cn("w-(--cell-size) select-none", defaultClassNames.week_number_header),
			week_number: cn("text-muted-foreground select-none text-[0.8rem]", defaultClassNames.week_number),
			day: cn("group/day relative aspect-square h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md", defaultClassNames.day),
			range_start: cn("bg-accent rounded-l-md", defaultClassNames.range_start),
			range_middle: cn("rounded-none", defaultClassNames.range_middle),
			range_end: cn("bg-accent rounded-r-md", defaultClassNames.range_end),
			today: cn("bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none", defaultClassNames.today),
			outside: cn("text-muted-foreground aria-selected:text-muted-foreground", defaultClassNames.outside),
			disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
			hidden: cn("invisible", defaultClassNames.hidden),
			...classNames
		},
		components: {
			Root: ({ className, rootRef, ...props }) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-slot": "calendar",
					ref: rootRef,
					className: cn(className),
					...props
				});
			},
			Chevron: ({ className, orientation, ...props }) => {
				if (orientation === "left") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
					className: cn("size-4", className),
					...props
				});
				if (orientation === "right") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
					className: cn("size-4", className),
					...props
				});
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
					className: cn("size-4", className),
					...props
				});
			},
			DayButton: CalendarDayButton,
			WeekNumber: ({ children, ...props }) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					...props,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-(--cell-size) items-center justify-center text-center",
						children
					})
				});
			},
			...components
		},
		...props
	});
}
function CalendarDayButton({ className, day, modifiers, ...props }) {
	const defaultClassNames = getDefaultClassNames();
	const ref = import_react.useRef(null);
	import_react.useEffect(() => {
		if (modifiers.focused) ref.current?.focus();
	}, [modifiers.focused]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		ref,
		variant: "ghost",
		size: "icon",
		"data-day": day.date.toLocaleDateString(),
		"data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
		"data-range-start": modifiers.range_start,
		"data-range-end": modifiers.range_end,
		"data-range-middle": modifiers.range_middle,
		className: cn("data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square h-auto w-full min-w-(--cell-size) flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] [&>span]:text-xs [&>span]:opacity-70", defaultClassNames.day, className),
		...props
	});
}
function CalendarWidget() {
	const [date, setDate] = (0, import_react.useState)(/* @__PURE__ */ new Date());
	const { addNotification } = useNotifications();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
		delay: .3,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 mb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-semibold text-sm",
					children: "Calendar"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar$1, {
				mode: "single",
				selected: date,
				onSelect: setDate,
				className: "rounded-xl border border-border/40 p-0 pointer-events-auto"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: "Classes today"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: "Upcoming exams"
					})]
				})]
			})
		]
	});
}
function DashboardPage() {
	const { data: profile, isLoading: profileLoading } = useQuery({
		queryKey: ["profile"],
		queryFn: getProfile
	});
	const { data: attendance, isLoading: attLoading } = useQuery({
		queryKey: ["attendance"],
		queryFn: getAttendance
	});
	const { data: subjects, isLoading: subjectsLoading } = useQuery({
		queryKey: ["subjects"],
		queryFn: getSubjects
	});
	const { data: result, isLoading: resultLoading } = useQuery({
		queryKey: ["semester-result"],
		queryFn: getSemesterResult
	});
	const { data: feedback } = useQuery({
		queryKey: ["feedback"],
		queryFn: getFeedback
	});
	const isLoading = profileLoading || attLoading || resultLoading || subjectsLoading;
	const avgAttendance = attendance?.length ? Math.round(attendance.reduce((s, a) => s + a.attendancePercentage, 0) / attendance.length) : 0;
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardSkeleton, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: profile ? `Welcome back!👋 ${profile.studentName.split(" ")[0]}` : "Welcome",
			subtitle: "Everything you need for your academic journey, all in one place.",
			badge: profile?.semester ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
				variant: "secondary",
				className: "rounded-full px-3 py-0.5 text-xs font-medium",
				children: ["Semester ", profile.semester]
			}) : void 0
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: Award,
					label: "CGPA",
					value: result?.cgpa.toFixed(2) ?? "—",
					hint: "All semesters combined",
					delay: 0,
					accent: "success"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: TrendingUp,
					label: "SGPA",
					value: result?.gpa.toFixed(2) ?? "—",
					hint: "Current semester",
					delay: .05
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: BookOpen,
					label: "Subjects",
					value: subjects?.length ?? 0,
					hint: "Enrolled this semester",
					delay: .1
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: ClipboardList,
					label: "Attendance",
					value: `${avgAttendance}%`,
					hint: "Average attendance",
					delay: .15
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				delay: .3,
				className: "lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-semibold text-sm mb-4",
					children: "Quick Actions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickActionCard, {
							to: "/profile",
							label: "Profile",
							icon: BookOpen,
							description: "View details"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickActionCard, {
							to: "/academics",
							label: "Academics",
							icon: GraduationCap,
							description: "Courses & schedule"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickActionCard, {
							to: "/examinations",
							label: "Exams",
							icon: Calendar,
							description: "Marks & results"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickActionCard, {
							to: "/feedback",
							label: "Feedback",
							icon: MessageSquare,
							description: `${feedback?.pending ?? 0} pending`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickActionCard, {
							to: "/academics/attendance-code",
							label: "Att. Code",
							icon: KeyRound,
							description: "Submit code"
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 gap-4 mb-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarWidget, {})
			})
		})
	] });
}
//#endregion
export { DashboardPage as component };
