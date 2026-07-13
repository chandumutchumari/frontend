import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CircularProgress-rlDUVetM.js
var import_jsx_runtime = require_jsx_runtime();
function CircularProgress({ value, size = 120, strokeWidth = 8, label, sublabel, className }) {
	const radius = (size - strokeWidth) / 2;
	const circumference = 2 * Math.PI * radius;
	const clamped = Math.min(100, Math.max(0, value));
	const offset = circumference - clamped / 100 * circumference;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative inline-flex flex-col items-center", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				width: size,
				height: size,
				className: "-rotate-90",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: size / 2,
						cy: size / 2,
						r: radius,
						fill: "none",
						stroke: "currentColor",
						strokeWidth,
						className: "text-muted/40"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: size / 2,
						cy: size / 2,
						r: radius,
						fill: "none",
						stroke: "url(#progress-gradient)",
						strokeWidth,
						strokeLinecap: "round",
						strokeDasharray: circumference,
						strokeDashoffset: offset,
						className: "transition-all duration-700 ease-out"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						id: "progress-gradient",
						x1: "0%",
						y1: "0%",
						x2: "100%",
						y2: "100%",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0%",
							stopColor: "oklch(0.55 0.2 255)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "100%",
							stopColor: "oklch(0.72 0.17 250)"
						})]
					}) })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 flex flex-col items-center justify-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-2xl font-bold",
					children: [Math.round(clamped), "%"]
				}), label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5",
					children: label
				})]
			}),
			sublabel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground mt-2 text-center",
				children: sublabel
			})
		]
	});
}
//#endregion
export { CircularProgress as t };
