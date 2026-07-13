import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/NavCard-nuSf2xMd.js
var import_jsx_runtime = require_jsx_runtime();
function NavCard({ to, title, description, icon: Icon, delay = 0, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
			duration: .4
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to,
			className: cn("group relative block rounded-2xl glass glass-border p-6 card-hover overflow-hidden", className),
			style: { boxShadow: "var(--shadow-soft)" },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute top-0 right-0 w-24 h-24 rounded-full opacity-[0.06] -translate-y-1/2 translate-x-1/2",
					style: { background: "var(--gradient-primary)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-12 w-12 grid place-items-center rounded-xl text-primary-foreground shrink-0",
						style: { background: "var(--gradient-primary)" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-4 font-semibold text-base",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mt-1.5 leading-relaxed",
					children: description
				})
			]
		})
	});
}
//#endregion
export { NavCard as t };
