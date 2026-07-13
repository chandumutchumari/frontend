import { c as require_jsx_runtime } from "./_libs/@radix-ui/react-arrow+[...].mjs";
import { t as getProfile } from "./_ssr/profile-X--K5P3c.mjs";
import { t as useQuery } from "./_libs/tanstack__react-query.mjs";
import { F as Building2, I as BookOpen, N as Calendar, m as Mail, n as User, u as Phone } from "./_libs/lucide-react.mjs";
import { t as PageHeader } from "./_ssr/PageHeader-DLBP-QUk.mjs";
import { t as GlassCard } from "./_ssr/GlassCard-C5-F8y9S.mjs";
import { r as TableSkeleton } from "./_ssr/page-skeleton-Bypv7KQQ.mjs";
import { t as Badge } from "./_ssr/badge-D1Dupn2y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.profile-Bizy-mkm.js
var import_jsx_runtime = require_jsx_runtime();
var labels = {
	studentName: "Student Name",
	registerNumber: "Register Number",
	institution: "Institution",
	semester: "Semester",
	program: "Program",
	specialization: "Specialization",
	dob: "Date of Birth",
	gender: "Gender",
	phone: "Phone",
	email: "Email",
	fatherName: "Father's Name",
	motherName: "Mother's Name",
	accessThrough: "Access Through"
};
var fieldGroups = [
	{
		title: "Academic Info",
		keys: [
			"institution",
			"program",
			"specialization",
			"semester"
		]
	},
	{
		title: "Personal Info",
		keys: [
			"dob",
			"gender",
			"fatherName",
			"motherName"
		]
	},
	{
		title: "Contact Info",
		keys: ["phone", "email"]
	}
];
function ProfilePage() {
	const { data, isLoading } = useQuery({
		queryKey: ["profile"],
		queryFn: getProfile
	});
	const formattedPhone = data?.phone?.replace(/\s*\(verified\)\s*$/i, "").trim() ?? "—";
	const initials = data?.studentName ? data.studentName.split(" ").map((n) => n[0]).slice(0, 2).join("") : "?";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "My Profile",
		subtitle: "Your personal and academic information at a glance."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-1 lg:grid-cols-[340px_minmax(0,1fr)] gap-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
			delay: 0,
			className: "text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto w-fit",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-28 w-28 rounded-2xl grid place-items-center text-3xl font-bold text-primary-foreground shadow-lg",
						style: { background: "var(--gradient-primary)" },
						children: data ? initials : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-10 w-10" })
					}), data?.semester && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						className: "absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full px-3 shadow-sm",
						children: ["Sem ", data.semester]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 text-xl font-bold",
					children: data?.studentName ?? "—"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground font-mono mt-1",
					children: data?.registerNumber
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mt-1",
					children: data?.program
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-3 text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 p-3 rounded-xl bg-muted/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm truncate",
								children: data?.email ?? "—"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 p-3 rounded-xl bg-muted/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm",
								children: formattedPhone
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 p-3 rounded-xl bg-muted/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-4 w-4 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm truncate",
								children: data?.institution ?? "—"
							})]
						})
					]
				})
			]
		}), isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableSkeleton, { rows: 8 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-4",
			children: fieldGroups.map((group, gi) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				delay: gi * .05,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 mb-4",
					children: [
						gi === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-4 w-4 text-primary" }),
						gi === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4 text-primary" }),
						gi === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-4 w-4 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-sm",
							children: group.title
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
					children: group.keys.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-3 rounded-xl bg-muted/30 border border-border/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-wider text-muted-foreground font-medium",
							children: labels[k]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm font-medium break-words",
							children: data?.[k] ?? "—"
						})]
					}, k))
				})]
			}, group.title))
		})]
	})] });
}
//#endregion
export { ProfilePage as component };
