import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/GlassCard-C5-F8y9S.js
var import_jsx_runtime = require_jsx_runtime();
var paddingMap = {
	none: "",
	sm: "p-4",
	md: "p-6",
	lg: "p-8"
};
function GlassCard({ children, className, hover = false, delay = 0, padding = "md" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 12
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			delay,
			duration: .35,
			ease: [
				.25,
				.46,
				.45,
				.94
			]
		},
		className: cn("rounded-2xl glass glass-border", paddingMap[padding], hover && "card-hover cursor-pointer", className),
		style: { boxShadow: "var(--shadow-soft)" },
		children
	});
}
//#endregion
export { GlassCard as t };
