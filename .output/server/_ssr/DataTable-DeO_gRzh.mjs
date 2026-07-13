import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { D as ChevronsUpDown, O as ChevronUp, j as ChevronDown, l as Search, y as Inbox } from "../_libs/lucide-react.mjs";
import { i as AnimatePresence, r as motion } from "../_libs/framer-motion.mjs";
import { t as Button } from "./button-BkEeRci-.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { t as EmptyState } from "./EmptyState-YDWB-ywr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/DataTable-DeO_gRzh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DataTable({ columns, data, empty = "No records yet.", searchable = true, searchPlaceholder = "Search records…", searchKeys, paginated = true, pageSize = 10, stickyHeader = true }) {
	const [search, setSearch] = (0, import_react.useState)("");
	const [sortKey, setSortKey] = (0, import_react.useState)(null);
	const [sortDir, setSortDir] = (0, import_react.useState)(null);
	const [page, setPage] = (0, import_react.useState)(0);
	const keys = searchKeys ?? columns.map((c) => c.key);
	const filtered = (0, import_react.useMemo)(() => {
		let rows = [...data];
		if (search.trim()) {
			const q = search.toLowerCase();
			rows = rows.filter((row) => keys.some((k) => String(row[k] ?? "").toLowerCase().includes(q)));
		}
		if (sortKey && sortDir) rows.sort((a, b) => {
			const av = a[sortKey];
			const bv = b[sortKey];
			const aNum = typeof av === "number" ? av : parseFloat(String(av));
			const bNum = typeof bv === "number" ? bv : parseFloat(String(bv));
			if (!isNaN(aNum) && !isNaN(bNum)) return sortDir === "asc" ? aNum - bNum : bNum - aNum;
			return sortDir === "asc" ? String(av).localeCompare(String(bv)) : String(bv).localeCompare(String(av));
		});
		return rows;
	}, [
		data,
		search,
		sortKey,
		sortDir,
		keys
	]);
	const totalPages = paginated ? Math.max(1, Math.ceil(filtered.length / pageSize)) : 1;
	const paged = paginated ? filtered.slice(page * pageSize, (page + 1) * pageSize) : filtered;
	const toggleSort = (key) => {
		if (sortKey !== key) {
			setSortKey(key);
			setSortDir("asc");
		} else if (sortDir === "asc") setSortDir("desc");
		else {
			setSortKey(null);
			setSortDir(null);
		}
		setPage(0);
	};
	const SortIcon = ({ colKey }) => {
		if (sortKey !== colKey) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronsUpDown, { className: "h-3.5 w-3.5 opacity-40" });
		return sortDir === "asc" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3.5 w-3.5" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl glass glass-border overflow-hidden",
		style: { boxShadow: "var(--shadow-soft)" },
		children: [
			searchable && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-4 border-b border-border/60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative max-w-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: search,
						onChange: (e) => {
							setSearch(e.target.value);
							setPage(0);
						},
						placeholder: searchPlaceholder,
						className: "pl-9 h-10 rounded-xl bg-background/60 border-border/60"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto scrollbar-thin",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: cn("bg-muted/50 text-muted-foreground", stickyHeader && "sticky top-0 z-10 backdrop-blur-md"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: columns.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: cn("text-left font-semibold px-4 py-3.5 whitespace-nowrap", c.sortable !== false && "cursor-pointer select-none hover:text-foreground transition-colors", c.className),
							onClick: () => c.sortable !== false && toggleSort(String(c.key)),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [c.header, c.sortable !== false && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortIcon, { colKey: String(c.key) })]
							})
						}, String(c.key))) })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "popLayout",
						children: paged.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							colSpan: columns.length,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
								icon: Inbox,
								title: empty,
								description: search ? "Try adjusting your search." : void 0
							})
						}) }) : paged.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.tr, {
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							exit: { opacity: 0 },
							transition: { delay: i * .02 },
							className: "border-t border-border/50 hover:bg-muted/30 transition-colors group",
							children: columns.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: cn("px-4 py-3.5 group-hover:text-foreground", c.className),
								children: c.render ? c.render(row) : String(row[c.key] ?? "")
							}, String(c.key)))
						}, i))
					}) })]
				})
			}),
			paginated && filtered.length > pageSize && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between px-4 py-3 border-t border-border/60 bg-muted/20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted-foreground",
					children: [
						"Showing ",
						page * pageSize + 1,
						"–",
						Math.min((page + 1) * pageSize, filtered.length),
						" of ",
						filtered.length
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "sm",
						className: "h-8 rounded-lg text-xs",
						disabled: page === 0,
						onClick: () => setPage((p) => p - 1),
						children: "Previous"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "sm",
						className: "h-8 rounded-lg text-xs",
						disabled: page >= totalPages - 1,
						onClick: () => setPage((p) => p + 1),
						children: "Next"
					})]
				})]
			})
		]
	});
}
//#endregion
export { DataTable as t };
