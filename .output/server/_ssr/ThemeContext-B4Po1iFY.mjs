import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ThemeContext-B4Po1iFY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Ctx$1 = (0, import_react.createContext)(null);
function AuthProvider({ children }) {
	const [token, setTokenState] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const t = typeof window !== "undefined" ? window.localStorage.getItem("auth_token") : null;
		if (t) setTokenState(t);
	}, []);
	const setToken = (0, import_react.useCallback)((t) => {
		setTokenState(t);
		if (typeof window !== "undefined") if (t) window.localStorage.setItem("auth_token", t);
		else window.localStorage.removeItem("auth_token");
	}, []);
	const logout = (0, import_react.useCallback)(() => setToken(null), [setToken]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ctx$1.Provider, {
		value: {
			token,
			setToken,
			logout,
			isAuthenticated: !!token
		},
		children
	});
}
function useAuth() {
	const ctx = (0, import_react.useContext)(Ctx$1);
	if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
	return ctx;
}
var Ctx = (0, import_react.createContext)(null);
function ThemeProvider({ children }) {
	const [theme, setTheme] = (0, import_react.useState)("light");
	(0, import_react.useEffect)(() => {
		const initial = (typeof window !== "undefined" && window.localStorage.getItem("theme")) ?? "light";
		setTheme(initial);
		document.documentElement.classList.toggle("dark", initial === "dark");
	}, []);
	const toggle = (0, import_react.useCallback)(() => {
		setTheme((prev) => {
			const next = prev === "dark" ? "light" : "dark";
			document.documentElement.classList.toggle("dark", next === "dark");
			if (typeof window !== "undefined") window.localStorage.setItem("theme", next);
			return next;
		});
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ctx.Provider, {
		value: {
			theme,
			toggle
		},
		children
	});
}
function useTheme() {
	const ctx = (0, import_react.useContext)(Ctx);
	if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
	return ctx;
}
//#endregion
export { useTheme as i, ThemeProvider as n, useAuth as r, AuthProvider as t };
