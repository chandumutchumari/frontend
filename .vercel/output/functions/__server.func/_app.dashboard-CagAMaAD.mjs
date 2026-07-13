import { o as __toESM } from "./_runtime.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "./_libs/@radix-ui/react-arrow+[...].mjs";
import { t as academic_events_default } from "./_ssr/academic-events-Pnu17fh9.mjs";
import { A as startOfDay, i as parseISO, m as format } from "./_libs/date-fns.mjs";
import { t as cn } from "./_ssr/utils-C_uf36nf.mjs";
import { n as getProfile, t as formatDisplayName } from "./_ssr/formatter-BG-twP6X.mjs";
import { g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as useQuery } from "./_libs/tanstack__react-query.mjs";
import { D as ClipboardList, H as Award, I as Calendar, J as House, L as CalendarDays, M as ChevronRight, N as ChevronLeft, P as ChevronDown, b as KeyRound, h as MessageSquare, i as TrendingUp, n as X, w as GraduationCap, z as BookOpen } from "./_libs/lucide-react.mjs";
import { r as motion } from "./_libs/framer-motion.mjs";
import { a as DialogOverlay$1, c as DialogTrigger$1, i as DialogDescription$1, n as DialogClose$1, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "./_libs/@radix-ui/react-dialog+[...].mjs";
import { t as PageHeader } from "./_ssr/PageHeader-DLBP-QUk.mjs";
import { t as GlassCard } from "./_ssr/GlassCard-C5-F8y9S.mjs";
import { n as buttonVariants, t as Button } from "./_ssr/button-BkEeRci-.mjs";
import { t as DashboardSkeleton } from "./_ssr/page-skeleton-Bypv7KQQ.mjs";
import { t as StatCard } from "./_ssr/StatCard-CteE7drM.mjs";
import { n as getSubjects, t as getAttendance } from "./_ssr/academics-YZq2LoZy.mjs";
import { t as Badge } from "./_ssr/badge-D1Dupn2y.mjs";
import { r as getSemesterResult } from "./_ssr/examinations-Dwod4A6X.mjs";
import { t as getFeedback } from "./_ssr/feedback-C3IXiM0X.mjs";
import { n as getDefaultClassNames, t as DayPicker } from "./_libs/react-day-picker.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.dashboard-CagAMaAD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function QuickActionCard({ to, label, icon: Icon, description, badge, asButton, buttonProps, className: classNameProp, ...restButtonProps }) {
	const className = cn("group relative flex h-full w-full cursor-pointer flex-col items-center justify-center gap-2.5 p-2.5 sm:p-3 md:p-4 rounded-xl border border-border/60 min-h-[44px]", "bg-background/50 hover:bg-primary/5 hover:border-primary/30 transition-all duration-200", buttonProps?.className, classNameProp);
	const content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "roommates-badge absolute right-3 top-3 inline-flex items-center justify-center px-2.5 py-1 text-[10px] font-bold text-white",
			children: badge
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-11 w-11 md:h-10 md:w-10 grid place-items-center rounded-xl text-primary-foreground group-hover:scale-105 transition-transform",
			style: { background: "var(--gradient-primary)" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium",
				children: label
			}), description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[10px] text-muted-foreground mt-0.5",
				children: description
			})]
		})
	] });
	if (asButton) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className,
		...restButtonProps,
		...buttonProps ?? {},
		children: content
	});
	if (!to) throw new Error("QuickActionCard requires a 'to' prop when not rendered as a button.");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		className,
		children: content
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
var colorStyles = {
	orange: {
		dotClass: "bg-orange-500",
		pillClass: "bg-orange-500/10 text-orange-700 dark:text-orange-300",
		cardClass: "border-orange-500/40"
	},
	blue: {
		dotClass: "bg-sky-500",
		pillClass: "bg-sky-500/10 text-sky-700 dark:text-sky-300",
		cardClass: "border-sky-500/40"
	},
	purple: {
		dotClass: "bg-violet-500",
		pillClass: "bg-violet-500/10 text-violet-700 dark:text-violet-300",
		cardClass: "border-violet-500/40"
	},
	cyan: {
		dotClass: "bg-cyan-500",
		pillClass: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300",
		cardClass: "border-cyan-500/40"
	},
	green: {
		dotClass: "bg-emerald-500",
		pillClass: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
		cardClass: "border-emerald-500/40"
	},
	yellow: {
		dotClass: "bg-amber-500",
		pillClass: "bg-amber-500/10 text-amber-700 dark:text-amber-300",
		cardClass: "border-amber-500/40"
	},
	red: {
		dotClass: "bg-rose-500",
		pillClass: "bg-rose-500/10 text-rose-700 dark:text-rose-300",
		cardClass: "border-rose-500/40"
	}
};
var fallbackStyle = {
	dotClass: "bg-primary",
	pillClass: "bg-primary/10 text-primary",
	cardClass: "border-border/40"
};
function CalendarWidget() {
	const [date, setDate] = (0, import_react.useState)(/* @__PURE__ */ new Date());
	const events = (0, import_react.useMemo)(() => {
		return academic_events_default.map((event) => ({
			...event,
			date: event.date
		}));
	}, []);
	const eventsByDate = (0, import_react.useMemo)(() => {
		return events.reduce((accumulator, event) => {
			const existing = accumulator.get(event.date) ?? [];
			existing.push(event);
			accumulator.set(event.date, existing);
			return accumulator;
		}, /* @__PURE__ */ new Map());
	}, [events]);
	const today = startOfDay(/* @__PURE__ */ new Date());
	const tomorrow = startOfDay(new Date(today));
	tomorrow.setDate(tomorrow.getDate() + 1);
	const todayKey = format(today, "yyyy-MM-dd");
	const tomorrowKey = format(tomorrow, "yyyy-MM-dd");
	const todayEvents = eventsByDate.get(todayKey) ?? [];
	const tomorrowEvents = eventsByDate.get(tomorrowKey) ?? [];
	const upcomingEvents = [...events].filter((event) => parseISO(event.date) >= today).sort((left, right) => parseISO(left.date).getTime() - parseISO(right.date).getTime()).slice(0, 5);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
		delay: .3,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 mb-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-semibold text-sm",
				children: "Calendar"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-[minmax(0,1.35fr)_minmax(220px,280px)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar$1, {
				mode: "single",
				selected: date,
				onSelect: setDate,
				className: "rounded-xl border border-border/40 p-0 pointer-events-auto",
				components: { DayContent: ({ date: dayDate }) => {
					const key = format(dayDate, "yyyy-MM-dd");
					const dayEvents = eventsByDate.get(key) ?? [];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex h-full w-full items-center justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: format(dayDate, "d") }), dayEvents.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute bottom-0.5 left-1/2 flex -translate-x-1/2 gap-1",
							children: dayEvents.slice(0, 3).map((event) => {
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-1.5 w-1.5 rounded-full", (colorStyles[event.color] ?? fallbackStyle).dotClass) }, `${event.id}-${event.title}`);
							})
						}) : null]
					});
				} }
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border/40 bg-background/70 p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-sm font-semibold",
							children: "Upcoming Events"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-medium text-muted-foreground",
							children: "Next 5"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2",
						children: upcomingEvents.length > 0 ? upcomingEvents.map((event) => {
							const styles = colorStyles[event.color] ?? fallbackStyle;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: cn("rounded-lg border bg-background/70 p-2.5", styles.cardClass),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-medium leading-tight",
											children: event.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-muted-foreground",
											children: format(parseISO(event.date), "MMM d, yyyy")
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-wide", styles.pillClass),
										children: event.category
									})]
								})
							}, event.id);
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "No upcoming events."
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: todayEvents.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2",
						children: todayEvents.map((event) => {
							const styles = colorStyles[event.color] ?? fallbackStyle;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: cn("rounded-lg bg-background/60 p-2.5", styles.cardClass),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium leading-tight",
										children: event.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-wide", styles.pillClass),
										children: event.category
									})]
								})
							}, event.id);
						})
					}) : null }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: tomorrowEvents.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2",
						children: tomorrowEvents.map((event) => {
							const styles = colorStyles[event.color] ?? fallbackStyle;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: cn("rounded-lg bg-background/60 p-2.5", styles.cardClass),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium leading-tight",
										children: event.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-wide", styles.pillClass),
										children: event.category
									})]
								})
							}, event.id);
						})
					}) : null })]
				})]
			})]
		})]
	});
}
var Dialog = Dialog$1;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = DialogPortal$1;
var DialogClose = DialogClose$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose$1, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
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
	const firstName = formatDisplayName(profile?.studentName).split(" ")[0] || "Student";
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardSkeleton, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: profile ? `Welcome back!👋 ${firstName}` : "Welcome",
			subtitle: "Everything you need for your academic journey, all in one place.",
			badge: profile?.semester ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
				variant: "secondary",
				className: "rounded-full px-3 py-0.5 text-xs font-medium",
				children: ["Semester ", profile.semester]
			}) : void 0
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6",
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
					className: "grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3",
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
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickActionCard, {
								asButton: true,
								badge: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "badge-ripple" }), "New"] }),
								icon: House,
								label: "Know Your Roommates",
								buttonProps: { type: "button" }
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
							className: "max-w-md border-border/60 bg-background/95 p-0 shadow-2xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 10
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .2,
									ease: "easeOut"
								},
								className: "rounded-2xl border border-border/60 bg-background/95 p-5 sm:p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-4 flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-primary-foreground",
										style: { background: "var(--gradient-primary)" },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-5 w-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
											className: "text-left text-base font-semibold",
											children: "🏠 Hostel Details"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
											className: "text-left text-sm leading-6 text-muted-foreground",
											children: "Hostel information will be available here once the official hostel allocation details are updated."
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, {
									className: "flex justify-end",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "secondary",
											children: "Got It"
										})
									})
								})]
							})
						})] })
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
