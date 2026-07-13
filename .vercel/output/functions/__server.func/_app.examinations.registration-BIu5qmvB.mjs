import { c as require_jsx_runtime } from "./_libs/@radix-ui/react-arrow+[...].mjs";
import { O as ClipboardCheck } from "./_libs/lucide-react.mjs";
import { t as PageHeader } from "./_ssr/PageHeader-DLBP-QUk.mjs";
import { t as GlassCard } from "./_ssr/GlassCard-C5-F8y9S.mjs";
import { t as EmptyState } from "./_ssr/EmptyState-YDWB-ywr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.examinations.registration-BIu5qmvB.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
	title: "Exam Registration",
	subtitle: "Register for upcoming examinations."
}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
	icon: ClipboardCheck,
	title: "No active registration window",
	description: "Exam registration will reopen ahead of the next assessment cycle. You'll be notified when it opens."
}) })] });
//#endregion
export { SplitComponent as component };
