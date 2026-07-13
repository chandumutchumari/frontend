import { c as require_jsx_runtime } from "./_libs/@radix-ui/react-arrow+[...].mjs";
import { Y as FilePenLine } from "./_libs/lucide-react.mjs";
import { t as PageHeader } from "./_ssr/PageHeader-DLBP-QUk.mjs";
import { t as GlassCard } from "./_ssr/GlassCard-C5-F8y9S.mjs";
import { t as EmptyState } from "./_ssr/EmptyState-YDWB-ywr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.academics.registration-bG0vcDZS.js
var import_jsx_runtime = require_jsx_runtime();
function RegistrationPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Course Registration",
		subtitle: "Register for upcoming semester courses."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
		icon: FilePenLine,
		title: "Registration window is closed",
		description: "Course registration will open at the start of the next academic term. Check back later for updates."
	}) })] });
}
//#endregion
export { RegistrationPage as component };
