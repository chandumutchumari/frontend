import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { i as useTheme, r as useAuth } from "./ThemeContext-B4Po1iFY.mjs";
import { n as withFallback, t as api } from "./api-2Tg5IZ_I.mjs";
import { P as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { U as LoaderCircle, a as Sun, d as Moon, o as Shield, x as GraduationCap } from "../_libs/lucide-react.mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { n as useForm, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-D4YdMr8E.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
async function login(payload) {
	return withFallback(async () => (await api.post("/auth/login", payload)).data, {
		success: false,
		message: "Unable to complete login"
	});
}
var schema = objectType({
	applicationNumber: stringType().trim().min(3, "Application number is required"),
	password: stringType().min(4, "Password must be at least 4 characters")
});
function LoginPage() {
	const navigate = useNavigate();
	const { setToken } = useAuth();
	const { theme, toggle } = useTheme();
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const { register, handleSubmit, formState: { errors } } = useForm({ resolver: u(schema) });
	const onSubmit = async (values) => {
		setSubmitting(true);
		try {
			const res = await login({
				applicationNumber: values.applicationNumber,
				password: values.password
			});
			if (!res.success || !res.sessionId) throw new Error(res.message || "Invalid credentials");
			setToken(res.sessionId);
			toast.success("Welcome back!");
			navigate({ to: "/dashboard" });
		} catch (error) {
			toast.error(error instanceof Error ? error.message : "Invalid credentials");
		} finally {
			setSubmitting(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex items-center justify-center p-4 relative overflow-hidden gradient-mesh",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl opacity-30",
				style: { background: "var(--gradient-primary)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -bottom-32 -right-32 h-96 w-96 rounded-full blur-3xl opacity-20",
				style: { background: "var(--gradient-primary)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: toggle,
				"aria-label": "Toggle theme",
				className: "absolute top-6 right-6 p-2.5 rounded-xl glass glass-border hover:bg-muted/60 transition-colors z-10",
				children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20,
					scale: .97
				},
				animate: {
					opacity: 1,
					y: 0,
					scale: 1
				},
				transition: {
					duration: .5,
					ease: [
						.25,
						.46,
						.45,
						.94
					]
				},
				className: "relative w-full max-w-md rounded-3xl glass glass-border p-8 sm:p-10",
				style: { boxShadow: "var(--shadow-elegant)" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-14 w-14 grid place-items-center rounded-2xl text-primary-foreground shadow-lg",
							style: { background: "var(--gradient-primary)" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-7 w-7" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-2xl font-bold tracking-tight",
							children: "campuSync"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Login in to access your dashboard"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 mb-6 p-3 rounded-xl bg-muted/40 border border-border/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-4 w-4 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Secure authentication"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit(onSubmit),
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold text-muted-foreground mb-2 block uppercase tracking-wider",
									children: "Application Number"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									...register("applicationNumber"),
									placeholder: "AP22110010234",
									className: "w-full h-12 px-4 rounded-xl bg-background/60 border border-border/60 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all text-sm font-medium",
									autoComplete: "username"
								}),
								errors.applicationNumber && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-destructive mt-1.5",
									children: errors.applicationNumber.message
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold text-muted-foreground mb-2 block uppercase tracking-wider",
									children: "Password"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "password",
									...register("password"),
									placeholder: "••••••••",
									className: "w-full h-12 px-4 rounded-xl bg-background/60 border border-border/60 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all text-sm",
									autoComplete: "current-password"
								}),
								errors.password && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-destructive mt-1.5",
									children: errors.password.message
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								disabled: submitting,
								className: "w-full h-12 rounded-xl text-sm font-bold text-primary-foreground transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg",
								style: { background: "var(--gradient-primary)" },
								children: [submitting && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), submitting ? "Signing in…" : "Sign In"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground text-center mt-8",
						children: "Trouble signing in? please check your credentials."
					})
				]
			})
		]
	});
}
//#endregion
export { LoginPage as component };
