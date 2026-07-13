import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHeader-DLBP-QUk.js
var import_jsx_runtime = require_jsx_runtime();
function PageHeader({ title, subtitle, action, badge }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: -8
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: { duration: .35 },
		className: "flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [
				badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-2",
					children: badge
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight",
					children: title
				}),
				subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1.5 text-sm sm:text-base text-muted-foreground max-w-2xl",
					children: subtitle
				})
			]
		}), action && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "shrink-0",
			children: action
		})]
	});
}
//#endregion
export { PageHeader as t };
