import { c as require_jsx_runtime } from "./_libs/@radix-ui/react-arrow+[...].mjs";
import { G as PenLine, H as Award, O as ClipboardCheck, X as FileChartColumnIncreasing } from "./_libs/lucide-react.mjs";
import { t as PageHeader } from "./_ssr/PageHeader-DLBP-QUk.mjs";
import { t as NavCard } from "./_ssr/NavCard-nuSf2xMd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.examinations.index-CcQQhtlA.js
var import_jsx_runtime = require_jsx_runtime();
var cards = [
	{
		to: "/examinations/internals",
		title: "Internal Marks",
		desc: "CIA and continuous assessment scores.",
		icon: PenLine
	},
	{
		to: "/examinations/semester",
		title: "Semester Results",
		desc: "GPA, CGPA and grade breakdown.",
		icon: Award
	},
	{
		to: "/examinations/marks",
		title: "Exam Marks",
		desc: "End-semester mark statements.",
		icon: FileChartColumnIncreasing
	},
	{
		to: "/examinations/registration",
		title: "Exam Registration",
		desc: "Register for upcoming examinations.",
		icon: ClipboardCheck
	}
];
function ExamsHome() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Examinations",
		subtitle: "Review your marks, grades, and exam status."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4",
		children: cards.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavCard, {
			to: c.to,
			title: c.title,
			description: c.desc,
			icon: c.icon,
			delay: i * .05
		}, c.to))
	})] });
}
//#endregion
export { ExamsHome as component };
