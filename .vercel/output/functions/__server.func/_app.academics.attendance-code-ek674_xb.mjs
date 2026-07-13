import { o as __toESM } from "./_runtime.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "./_libs/@radix-ui/react-arrow+[...].mjs";
import { t as cn } from "./_ssr/utils-C_uf36nf.mjs";
import { t as api } from "./_ssr/api-CrOApzXr.mjs";
import { g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { K as LoaderCircle, b as KeyRound, l as ShieldCheck } from "./_libs/lucide-react.mjs";
import { t as PageHeader } from "./_ssr/PageHeader-DLBP-QUk.mjs";
import { t as GlassCard } from "./_ssr/GlassCard-C5-F8y9S.mjs";
import { t as Button } from "./_ssr/button-BkEeRci-.mjs";
import { t as Input } from "./_ssr/input-B8Q2ztVi.mjs";
import { n as toast } from "./_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.academics.attendance-code-ek674_xb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AttendanceCodePage() {
	const [code, setCode] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)(null);
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [authenticated, setAuthenticated] = (0, import_react.useState)(null);
	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!code.trim()) {
			setStatus("Please enter an attendance code.");
			toast.error("Please enter an attendance code.");
			return;
		}
		setIsSubmitting(true);
		setStatus(null);
		try {
			const { data } = await api.post("/academics/attendance-code", { code: code.trim() });
			const msg = data?.message || "Attendance code submitted.";
			setStatus(msg);
			toast.success(msg);
			setCode("");
		} catch {
			const msg = "Unable to submit attendance code right now.";
			setStatus(msg);
			toast.error(msg);
		} finally {
			setIsSubmitting(false);
		}
	};
	(0, import_react.useEffect)(() => {
		let mounted = true;
		(async () => {
			try {
				const { data } = await api.get("/profile");
				const isAuth = data && data.source === "playwright-session" && data.sessionId;
				if (mounted) setAuthenticated(Boolean(isAuth));
			} catch {
				if (mounted) setAuthenticated(false);
			}
		})();
		return () => {
			mounted = false;
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Attendance Code",
		subtitle: "Submit the attendance code displayed in your classroom."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
		className: "max-w-lg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3 mb-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-12 w-12 rounded-xl grid place-items-center text-primary-foreground",
				style: { background: "var(--gradient-primary)" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "h-5 w-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-semibold",
				children: "Submit Code"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: "Enter the code shown by your faculty"
			})] })]
		}), authenticated === false ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-4 rounded-xl bg-amber-500/10 border border-amber-500/20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-amber-700 dark:text-amber-300",
					children: "You need to be logged into the student portal to submit an attendance code."
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "rounded-xl",
				style: { background: "var(--gradient-primary)" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/login",
					children: "Login to Portal"
				})
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleSubmit,
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "attendance-code",
					className: "block text-sm font-medium mb-2",
					children: "Attendance Code"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "attendance-code",
					value: code,
					onChange: (event) => setCode(event.target.value),
					placeholder: "Enter code",
					className: "h-12 rounded-xl text-center text-lg font-mono tracking-widest uppercase bg-background/60"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "submit",
					disabled: isSubmitting,
					className: "w-full h-11 rounded-xl font-semibold gap-2",
					style: { background: "var(--gradient-primary)" },
					children: [isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4" }), isSubmitting ? "Submitting…" : "Submit Code"]
				}),
				status && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("text-sm text-center p-3 rounded-xl", status.includes("Unable") ? "bg-destructive/10 text-destructive" : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"),
					children: status
				})
			]
		})]
	})] });
}
//#endregion
export { AttendanceCodePage as component };
