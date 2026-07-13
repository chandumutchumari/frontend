import { o as __toESM } from "./_runtime.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "./_libs/@radix-ui/react-arrow+[...].mjs";
import { i as useTheme, r as useAuth } from "./_ssr/ThemeContext-B4Po1iFY.mjs";
import { n as useNotifications } from "./_ssr/NotificationContext-CbCtkVlc.mjs";
import { t as cn } from "./_ssr/utils-C_uf36nf.mjs";
import { t as getProfile } from "./_ssr/profile-X--K5P3c.mjs";
import { f as Outlet, g as Link, l as useRouterState } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as useQuery } from "./_libs/tanstack__react-query.mjs";
import { A as ChevronLeft, C as Clock, E as Circle, G as House, H as PenLine, J as CircleCheck, L as BookMarked, M as Check, P as CalendarDays, R as Bell, S as FileText, _ as KeyRound, a as Sun, c as Settings, d as Moon, f as MessageSquare, g as LayoutDashboard, h as LogOut, k as ChevronRight, n as User, p as Menu, q as FileChartColumnIncreasing, t as X, v as Info, w as ClipboardList, x as GraduationCap, z as Award } from "./_libs/lucide-react.mjs";
import { i as AnimatePresence, r as motion } from "./_libs/framer-motion.mjs";
import { a as Label2, c as Root2, d as SubTrigger2, f as Trigger, i as ItemIndicator2, l as Separator2, n as Content2, o as Portal2, r as Item2, s as RadioItem2, t as CheckboxItem2, u as SubContent2 } from "./_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import { i as Trigger$1, n as Portal, r as Root2$1, t as Content2$1 } from "./_libs/radix-ui__react-popover.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app-ChhHMl7d.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var mainItems = [
	{
		to: "/dashboard",
		label: "Dashboard",
		icon: LayoutDashboard
	},
	{
		to: "/profile",
		label: "Profile",
		icon: User
	},
	{
		to: "/feedback",
		label: "Feedback",
		icon: MessageSquare
	}
];
var academicItems = [
	{
		to: "/academics",
		label: "Overview",
		icon: GraduationCap
	},
	{
		to: "/academics/attendance",
		label: "Attendance",
		icon: ClipboardList
	},
	{
		to: "/academics/subjects",
		label: "Subjects",
		icon: BookMarked
	},
	{
		to: "/academics/timetable",
		label: "Timetable",
		icon: CalendarDays
	},
	{
		to: "/academics/attendance-code",
		label: "Att. Code",
		icon: KeyRound
	}
];
var examItems = [
	{
		to: "/examinations",
		label: "Overview",
		icon: FileText
	},
	{
		to: "/examinations/internals",
		label: "Internals",
		icon: PenLine
	},
	{
		to: "/examinations/semester",
		label: "Results",
		icon: Award
	},
	{
		to: "/examinations/marks",
		label: "Exam Marks",
		icon: FileChartColumnIncreasing
	}
];
function NavSection({ title, items, pathname, collapsed, onClose }) {
	const isActive = (to) => pathname === to || to !== "/academics" && to !== "/examinations" && pathname.startsWith(to + "/") || to === "/academics" && pathname === "/academics" || to === "/examinations" && pathname === "/examinations";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-4",
		children: [!collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "px-3 mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/70",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col gap-0.5",
			children: items.map((it) => {
				const active = isActive(it.to);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: it.to,
					onClick: onClose,
					title: collapsed ? it.label : void 0,
					className: cn("relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200", active ? "text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/60", collapsed && "justify-center px-2"),
					children: [
						active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							layoutId: "sidebar-active",
							className: "absolute inset-0 rounded-xl",
							style: { background: "var(--gradient-primary)" },
							transition: {
								type: "spring",
								stiffness: 400,
								damping: 35
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { className: cn("relative h-4 w-4 shrink-0", active && "drop-shadow-sm") }),
						!collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "relative truncate",
							children: it.label
						})
					]
				}, it.to);
			})
		})]
	});
}
function Sidebar({ open, collapsed, onClose, onToggleCollapse }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const { logout } = useAuth();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-30 bg-foreground/40 backdrop-blur-sm lg:hidden",
		onClick: onClose
	}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: cn("fixed lg:sticky top-0 left-0 z-40 h-screen shrink-0 border-r border-border/60 glass-strong transition-all duration-300 ease-out", collapsed ? "w-[72px]" : "w-64", open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("flex h-16 items-center border-b border-border/60", collapsed ? "justify-center px-2" : "justify-between px-4"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("flex items-center gap-2.5", collapsed && "justify-center"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-9 w-9 rounded-xl shadow-md shrink-0 grid place-items-center",
						style: { background: "var(--gradient-primary)" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-4 w-4 text-primary-foreground" })
					}), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-bold leading-tight tracking-tight",
						children: "campuSync"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] text-muted-foreground",
						children: "Student Dashboard"
					})] })]
				}), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					className: "lg:hidden p-1.5 rounded-lg hover:bg-muted/60 transition-colors",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: cn("p-3 flex flex-col h-[calc(100vh-8rem)] overflow-y-auto scrollbar-thin", collapsed && "px-2"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavSection, {
						title: "Main",
						items: mainItems,
						pathname,
						collapsed,
						onClose
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavSection, {
						title: "Academics",
						items: academicItems,
						pathname,
						collapsed,
						onClose
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavSection, {
						title: "Examinations",
						items: examItems,
						pathname,
						collapsed,
						onClose
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("absolute bottom-0 left-0 right-0 p-3 border-t border-border/60 glass-strong space-y-1", collapsed && "px-2"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onToggleCollapse,
					className: cn("hidden lg:flex w-full items-center gap-3 px-3 py-2 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors", collapsed && "justify-center px-2"),
					children: collapsed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Collapse" })] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => {
						logout();
						window.location.href = "/login";
					},
					className: cn("flex w-full items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors", collapsed && "justify-center px-2"),
					title: collapsed ? "Logout" : void 0,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4 shrink-0" }), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Logout" })]
				})]
			})
		]
	})] });
}
var labelMap = {
	dashboard: "Dashboard",
	profile: "Profile",
	academics: "Academics",
	attendance: "Attendance",
	subjects: "Subjects",
	timetable: "Timetable",
	registration: "Registration",
	"attendance-code": "Attendance Code",
	examinations: "Examinations",
	internals: "Internal Marks",
	semester: "Semester Results",
	marks: "Exam Marks",
	feedback: "Feedback"
};
function Breadcrumbs() {
	const segments = useRouterState({ select: (s) => s.location.pathname }).split("/").filter(Boolean);
	if (segments.length <= 1) return null;
	const crumbs = segments.map((seg, i) => ({
		label: labelMap[seg] ?? seg.charAt(0).toUpperCase() + seg.slice(1),
		path: "/" + segments.slice(0, i + 1).join("/"),
		isLast: i === segments.length - 1
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		"aria-label": "Breadcrumb",
		className: "hidden sm:flex items-center gap-1 text-xs text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/dashboard",
			className: "hover:text-foreground transition-colors p-1 rounded-md hover:bg-muted/60",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-3.5 w-3.5" })
		}), crumbs.map((crumb) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3 shrink-0 opacity-50" }), crumb.isLast ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-medium text-foreground px-1",
			children: crumb.label
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: crumb.path,
			className: "hover:text-foreground transition-colors px-1 rounded-md hover:bg-muted/60",
			children: crumb.label
		})] }, crumb.path))]
	});
}
var Popover = Root2$1;
var PopoverTrigger = Trigger$1;
var PopoverContent = import_react.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2$1, {
	ref,
	align,
	sideOffset,
	className: cn("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)", className),
	...props
}) }));
PopoverContent.displayName = Content2$1.displayName;
var iconMap = {
	warning: Clock,
	success: CircleCheck,
	info: Info
};
var colorMap = {
	warning: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
	success: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
	info: "bg-primary/10 text-primary"
};
function NotificationsPanel() {
	const { notifications } = useNotifications();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			"aria-label": "Notifications",
			className: "relative p-2.5 rounded-xl hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-all",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-2 right-2 h-2 w-2 rounded-full bg-destructive ring-2 ring-card" })]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PopoverContent, {
		align: "end",
		className: "w-80 p-0 rounded-2xl glass-strong glass-border",
		sideOffset: 8,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-4 py-3 border-b border-border/60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-semibold text-sm",
					children: "Notifications"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted-foreground mt-0.5",
					children: [notifications.length, " unread"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-h-72 overflow-y-auto scrollbar-thin",
				children: notifications.map((n) => {
					const Icon = iconMap[n.type];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-4 py-3 border-b border-border/40 last:border-0 hover:bg-muted/40 transition-colors cursor-pointer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: cn("h-8 w-8 rounded-lg grid place-items-center shrink-0", colorMap[n.type]),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium",
										children: n.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground mt-0.5 line-clamp-2",
										children: n.message
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] text-muted-foreground mt-1",
										children: n.time
									})
								]
							})]
						})
					}, n.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-4 py-2.5 border-t border-border/60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "text-xs font-medium text-primary hover:underline w-full text-center",
					children: "View all notifications"
				})
			})
		]
	})] });
}
var DropdownMenu = Root2;
var DropdownMenuTrigger = Trigger;
var DropdownMenuSubTrigger = import_react.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubTrigger2, {
	ref,
	className: cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-auto" })]
}));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
var DropdownMenuSubContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubContent2, {
	ref,
	className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}));
DropdownMenuSubContent.displayName = SubContent2.displayName;
var DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}) }));
DropdownMenuContent.displayName = Content2.displayName;
var DropdownMenuItem = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className),
	...props
}));
DropdownMenuItem.displayName = Item2.displayName;
var DropdownMenuCheckboxItem = import_react.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckboxItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	checked,
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), children]
}));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
var DropdownMenuRadioItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-2 w-2 fill-current" }) })
	}), children]
}));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
var DropdownMenuLabel = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label2, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
	...props
}));
DropdownMenuLabel.displayName = Label2.displayName;
var DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
DropdownMenuSeparator.displayName = Separator2.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("ml-auto text-xs tracking-widest opacity-60", className),
		...props
	});
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
function Topbar({ onMenu }) {
	const { theme, toggle } = useTheme();
	const { logout } = useAuth();
	const { data: profile } = useQuery({
		queryKey: ["profile"],
		queryFn: getProfile
	});
	const initials = profile?.studentName ? profile.studentName.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase() : "ST";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-20 h-16 glass-strong border-b border-border/60",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "h-full px-4 sm:px-6 flex items-center gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onMenu,
					className: "lg:hidden p-2 rounded-xl hover:bg-muted/80 transition-colors",
					"aria-label": "Open menu",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "ml-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "text-2xl sm:text-3xl font-extrabold tracking-tight leading-none",
						children: "campuSync"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden md:block flex-1 min-w-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1 md:flex-none ml-auto md:ml-0" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: toggle,
							"aria-label": "Toggle theme",
							className: "p-2.5 rounded-xl hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-all",
							children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationsPanel, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: cn("flex items-center gap-2.5 pl-1 pr-2 py-1 rounded-xl hover:bg-muted/80 transition-all"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-9 w-9 rounded-xl grid place-items-center text-sm font-bold text-primary-foreground shrink-0 shadow-sm",
									style: { background: "var(--gradient-primary)" },
									children: initials
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hidden sm:block text-left",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold leading-tight truncate max-w-[120px]",
										children: profile?.studentName?.split(" ")[0] ?? "Student"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] text-muted-foreground truncate max-w-[120px]",
										children: profile?.registerNumber ?? "—"
									})]
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
							align: "end",
							className: "w-56 rounded-xl glass-strong glass-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuLabel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: profile?.studentName ?? "Student"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground font-normal",
									children: profile?.program ?? "Student Portal"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/profile",
										className: "cursor-pointer gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4" }), "My Profile"]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
									className: "gap-2 cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "h-4 w-4" }), "Settings"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
									className: "gap-2 cursor-pointer text-destructive focus:text-destructive",
									onClick: () => {
										logout();
										window.location.href = "/login";
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), "Logout"]
								})
							]
						})] })
					]
				})
			]
		})
	});
}
function PageTransition({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 8
		},
		animate: {
			opacity: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			y: -8
		},
		transition: {
			duration: .3,
			ease: [
				.25,
				.46,
				.45,
				.94
			]
		},
		children
	});
}
function DashboardLayout({ children }) {
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const [collapsed, setCollapsed] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex bg-background text-foreground gradient-mesh",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sidebar, {
			open: mobileOpen,
			collapsed,
			onClose: () => setMobileOpen(false),
			onToggleCollapse: () => setCollapsed((c) => !c)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 flex flex-col min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Topbar, {
				onMenu: () => setMobileOpen(true),
				collapsed
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 p-4 sm:p-6 lg:p-8 max-w-[1600px] w-full mx-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTransition, { children })
			})]
		})]
	});
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) });
//#endregion
export { SplitComponent as component };
