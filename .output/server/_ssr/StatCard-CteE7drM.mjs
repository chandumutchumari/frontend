import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { i as TrendingDown, r as TrendingUp } from "../_libs/lucide-react.mjs";
import { n as useTransform, r as motion, t as useSpring } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/StatCard-CteE7drM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var accentStyles = {
	default: "var(--gradient-primary)",
	success: "linear-gradient(135deg, oklch(0.55 0.17 150), oklch(0.7 0.17 150))",
	warning: "linear-gradient(135deg, oklch(0.65 0.16 75), oklch(0.78 0.16 75))"
};
function AnimatedNumber({ value }) {
	const num = typeof value === "number" ? value : parseFloat(String(value).replace(/[^0-9.]/g, ""));
	const isNumeric = !isNaN(num) && typeof value === "number" || !isNaN(num) && /^[\d.]+/.test(String(value));
	const spring = useSpring(0, {
		stiffness: 80,
		damping: 20
	});
	const display = useTransform(spring, (v) => {
		if (!isNumeric) return String(value);
		const prefix = String(value).match(/^[^0-9]*/)?.[0] ?? "";
		const suffix = String(value).match(/[^0-9.]*$/)?.[0] ?? "";
		const decimals = String(value).includes(".") ? String(value).split(".")[1]?.length ?? 0 : 0;
		return `${prefix}${v.toFixed(decimals)}${suffix}`;
	});
	(0, import_react.useEffect)(() => {
		if (isNumeric) spring.set(num);
	}, [
		num,
		isNumeric,
		spring
	]);
	if (!isNumeric) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: value });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, { children: display });
}
function StatCard({ icon: Icon, label, value, hint, delay = 0, trend, accent = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 16
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			delay,
			duration: .4,
			ease: [
				.25,
				.46,
				.45,
				.94
			]
		},
		className: "group relative rounded-2xl glass glass-border p-5 card-hover overflow-hidden",
		style: { boxShadow: "var(--shadow-soft)" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
			style: { background: "radial-gradient(circle at top right, oklch(0.55 0.2 255 / 0.06), transparent 60%)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex items-start justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-wider text-muted-foreground font-semibold",
						children: label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-2xl sm:text-3xl font-bold tracking-tight",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedNumber, { value })
					}),
					hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1.5 text-xs text-muted-foreground",
						children: hint
					}),
					trend !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("flex items-center gap-1 mt-2 text-xs font-medium", trend >= 0 ? "text-emerald-600 dark:text-emerald-400" : "text-red-500"),
						children: [
							trend >= 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-3 w-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingDown, { className: "h-3 w-3" }),
							Math.abs(trend),
							"% vs last term"
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-11 w-11 grid place-items-center rounded-xl shrink-0 text-primary-foreground shadow-sm",
				style: { background: accentStyles[accent] },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
			})]
		})]
	});
}
//#endregion
export { StatCard as t };
