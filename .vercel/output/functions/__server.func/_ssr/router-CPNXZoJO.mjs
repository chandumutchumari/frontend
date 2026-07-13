import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as ThemeProvider, t as AuthProvider } from "./ThemeContext-B4Po1iFY.mjs";
import { t as NotificationProvider } from "./NotificationContext-CQdoJU0u.mjs";
import { F as useRouter, O as redirect, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CPNXZoJO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DFYRVw-F.css";
function reportCampuSyncError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__campuSyncEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center gradient-mesh px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center glass glass-border rounded-3xl p-10",
			style: { boxShadow: "var(--shadow-elegant)" },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-8xl font-black text-gradient",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]",
						style: { background: "var(--gradient-primary)" },
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportCampuSyncError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center gradient-mesh px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center glass glass-border rounded-3xl p-10",
			style: { boxShadow: "var(--shadow-elegant)" },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-14 w-14 mx-auto rounded-2xl bg-destructive/10 grid place-items-center mb-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-2xl",
						children: "!"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]",
						style: { background: "var(--gradient-primary)" },
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-xl border border-border/60 bg-background/60 px-6 py-3 text-sm font-medium transition-colors hover:bg-muted/60",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$19 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "campuSync" },
			{
				name: "description",
				content: "campuSync Generated Project"
			},
			{
				name: "author",
				content: "campuSync"
			},
			{
				property: "og:title",
				content: "campuSync"
			},
			{
				property: "og:description",
				content: "campuSync Generated Project"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			},
			{
				name: "twitter:site",
				content: "@campuSync"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$19.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NotificationProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
			richColors: true,
			position: "top-right"
		})] }) }) })
	});
}
var $$splitComponentImporter$18 = () => import("./login-dqDbNcJE.mjs");
var Route$18 = createFileRoute("/login")({
	head: () => ({ meta: [{ title: "Sign In — campuSync" }, {
		name: "description",
		content: "Sign in to the student portal."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
objectType({
	applicationNumber: stringType().trim().min(3, "Application number is required"),
	password: stringType().min(4, "Password must be at least 4 characters")
});
var $$splitComponentImporter$17 = () => import("../_app-DqsFodNv.mjs");
var Route$17 = createFileRoute("/_app")({
	beforeLoad: () => {
		if (typeof window !== "undefined") {
			if (!window.localStorage.getItem("auth_token")) throw redirect({ to: "/login" });
		}
	},
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./routes-DTEZEvkE.mjs");
var Route$16 = createFileRoute("/")({
	beforeLoad: () => {
		throw redirect({ to: (typeof window !== "undefined" ? window.localStorage.getItem("auth_token") : null) ? "/dashboard" : "/login" });
	},
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("../_app.profile-DHVsyGW4.mjs");
var Route$15 = createFileRoute("/_app/profile")({
	head: () => ({ meta: [{ title: "Profile — campuSync" }] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("../_app.feedback-D-o69XSz.mjs");
var Route$14 = createFileRoute("/_app/feedback")({
	head: () => ({ meta: [{ title: "Feedback — campuSync" }] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("../_app.examinations-BK___Gad.mjs");
var Route$13 = createFileRoute("/_app/examinations")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("../_app.dashboard-CagAMaAD.mjs");
var Route$12 = createFileRoute("/_app/dashboard")({
	head: () => ({ meta: [{ title: "Dashboard — campuSync" }] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("../_app.academics-ChBYLhhn.mjs");
var Route$11 = createFileRoute("/_app/academics")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("../_app.examinations.index-CcQQhtlA.mjs");
var Route$10 = createFileRoute("/_app/examinations/")({
	head: () => ({ meta: [{ title: "Examinations — campuSync" }] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("../_app.academics.index-DYL5PQ9Z.mjs");
var Route$9 = createFileRoute("/_app/academics/")({
	head: () => ({ meta: [{ title: "Academics — campuSync" }] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("../_app.examinations.semester-BwSv7iAS.mjs");
var Route$8 = createFileRoute("/_app/examinations/semester")({
	head: () => ({ meta: [{ title: "Semester Results — campuSync" }] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("../_app.examinations.registration-BIu5qmvB.mjs");
var Route$7 = createFileRoute("/_app/examinations/registration")({
	head: () => ({ meta: [{ title: "Exam Registration — campuSync" }] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("../_app.examinations.marks-RrqFeow1.mjs");
var Route$6 = createFileRoute("/_app/examinations/marks")({
	head: () => ({ meta: [{ title: "Exam Marks — campuSync" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("../_app.examinations.internals-0HqcV9ud.mjs");
var Route$5 = createFileRoute("/_app/examinations/internals")({
	head: () => ({ meta: [{ title: "Internal Marks — campuSync" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("../_app.academics.timetable-CJWpfbEX.mjs");
var Route$4 = createFileRoute("/_app/academics/timetable")({
	head: () => ({ meta: [{ title: "Timetable — campuSync" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("../_app.academics.subjects-Cc9h0xuY.mjs");
var Route$3 = createFileRoute("/_app/academics/subjects")({
	head: () => ({ meta: [{ title: "Subjects — campuSync" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("../_app.academics.registration-bG0vcDZS.mjs");
var Route$2 = createFileRoute("/_app/academics/registration")({
	head: () => ({ meta: [{ title: "Course Registration — campuSync" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("../_app.academics.attendance-code-ek674_xb.mjs");
var Route$1 = createFileRoute("/_app/academics/attendance-code")({
	head: () => ({ meta: [{ title: "Attendance Code — campuSync" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("../_app.academics.attendance-BXRM7cbd.mjs");
var Route = createFileRoute("/_app/academics/attendance")({
	head: () => ({ meta: [{ title: "Attendance — campuSync" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var LoginRoute = Route$18.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$19
});
var AppRoute = Route$17.update({
	id: "/_app",
	getParentRoute: () => Route$19
});
var IndexRoute = Route$16.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$19
});
var AppProfileRoute = Route$15.update({
	id: "/profile",
	path: "/profile",
	getParentRoute: () => AppRoute
});
var AppFeedbackRoute = Route$14.update({
	id: "/feedback",
	path: "/feedback",
	getParentRoute: () => AppRoute
});
var AppExaminationsRoute = Route$13.update({
	id: "/examinations",
	path: "/examinations",
	getParentRoute: () => AppRoute
});
var AppDashboardRoute = Route$12.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => AppRoute
});
var AppAcademicsRoute = Route$11.update({
	id: "/academics",
	path: "/academics",
	getParentRoute: () => AppRoute
});
var AppExaminationsIndexRoute = Route$10.update({
	id: "/",
	path: "/",
	getParentRoute: () => AppExaminationsRoute
});
var AppAcademicsIndexRoute = Route$9.update({
	id: "/",
	path: "/",
	getParentRoute: () => AppAcademicsRoute
});
var AppExaminationsSemesterRoute = Route$8.update({
	id: "/semester",
	path: "/semester",
	getParentRoute: () => AppExaminationsRoute
});
var AppExaminationsRegistrationRoute = Route$7.update({
	id: "/registration",
	path: "/registration",
	getParentRoute: () => AppExaminationsRoute
});
var AppExaminationsMarksRoute = Route$6.update({
	id: "/marks",
	path: "/marks",
	getParentRoute: () => AppExaminationsRoute
});
var AppExaminationsInternalsRoute = Route$5.update({
	id: "/internals",
	path: "/internals",
	getParentRoute: () => AppExaminationsRoute
});
var AppAcademicsTimetableRoute = Route$4.update({
	id: "/timetable",
	path: "/timetable",
	getParentRoute: () => AppAcademicsRoute
});
var AppAcademicsSubjectsRoute = Route$3.update({
	id: "/subjects",
	path: "/subjects",
	getParentRoute: () => AppAcademicsRoute
});
var AppAcademicsRegistrationRoute = Route$2.update({
	id: "/registration",
	path: "/registration",
	getParentRoute: () => AppAcademicsRoute
});
var AppAcademicsAttendanceCodeRoute = Route$1.update({
	id: "/attendance-code",
	path: "/attendance-code",
	getParentRoute: () => AppAcademicsRoute
});
var AppAcademicsRouteChildren = {
	AppAcademicsAttendanceRoute: Route.update({
		id: "/attendance",
		path: "/attendance",
		getParentRoute: () => AppAcademicsRoute
	}),
	AppAcademicsAttendanceCodeRoute,
	AppAcademicsRegistrationRoute,
	AppAcademicsSubjectsRoute,
	AppAcademicsTimetableRoute,
	AppAcademicsIndexRoute
};
var AppAcademicsRouteWithChildren = AppAcademicsRoute._addFileChildren(AppAcademicsRouteChildren);
var AppExaminationsRouteChildren = {
	AppExaminationsInternalsRoute,
	AppExaminationsMarksRoute,
	AppExaminationsRegistrationRoute,
	AppExaminationsSemesterRoute,
	AppExaminationsIndexRoute
};
var AppRouteChildren = {
	AppAcademicsRoute: AppAcademicsRouteWithChildren,
	AppDashboardRoute,
	AppExaminationsRoute: AppExaminationsRoute._addFileChildren(AppExaminationsRouteChildren),
	AppFeedbackRoute,
	AppProfileRoute
};
var rootRouteChildren = {
	IndexRoute,
	AppRoute: AppRoute._addFileChildren(AppRouteChildren),
	LoginRoute
};
var routeTree = Route$19._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
