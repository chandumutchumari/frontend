import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { i as useTheme, r as useAuth } from "./ThemeContext-B4Po1iFY.mjs";
import { n as withFallback, t as api } from "./api-CrOApzXr.mjs";
import { P as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { J as House, K as LoaderCircle, V as Bell, c as Shield, f as Rocket, l as ShieldCheck, m as Moon, o as Sun, s as Smartphone, t as Zap } from "../_libs/lucide-react.mjs";
import { i as AnimatePresence, r as motion } from "../_libs/framer-motion.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { n as useForm, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-dqDbNcJE.js
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
	const [breakpoint, setBreakpoint] = (0, import_react.useState)("desktop");
	(0, import_react.useEffect)(() => {
		const updateBreakpoint = () => {
			const width = window.innerWidth;
			if (width < 768) setBreakpoint("mobile");
			else if (width < 1024) setBreakpoint("tablet");
			else setBreakpoint("desktop");
		};
		updateBreakpoint();
		window.addEventListener("resize", updateBreakpoint);
		return () => window.removeEventListener("resize", updateBreakpoint);
	}, []);
	const isDesktop = breakpoint === "desktop";
	const isTablet = breakpoint === "tablet";
	const heroHeightClass = isDesktop ? "min-h-screen" : isTablet ? "h-[48vh] min-h-[340px]" : "h-[40vh] min-h-[260px]";
	const cardWidth = isDesktop ? "w-full max-w-[580px]" : isTablet ? "w-[68vw] max-w-[560px]" : "w-[92vw] max-w-[520px]";
	const cardPadding = isDesktop ? "p-10" : isTablet ? "p-10" : "p-6";
	const cardRadius = isDesktop ? "rounded-[32px]" : "rounded-[24px]";
	const titleSize = isDesktop ? "text-2xl" : isTablet ? "text-[2rem]" : "text-xl";
	const subtitleSize = isDesktop ? "text-sm" : isTablet ? "text-base" : "text-sm";
	const inputHeight = isDesktop ? "h-14 rounded-[16px]" : "h-[56px] rounded-[18px]";
	const buttonHeight = isDesktop ? "h-14 text-sm rounded-[16px]" : "h-[56px] text-base rounded-[18px]";
	const cardMarginTop = isDesktop ? "lg:-translate-y-[80px] xl:-translate-y-[100px]" : isTablet ? "mt-[-60px]" : "mt-[-50px]";
	const cardStyle = theme === "dark" ? "bg-slate-950/95 border-white/10" : "bg-white/95 border-slate-200/60";
	const features = [
		{
			key: "secure",
			label: "Secure Authentication",
			color: "#2563EB",
			Icon: Shield
		},
		{
			key: "fast",
			label: "Fast & Reliable Login",
			color: "#F59E0B",
			Icon: Zap
		},
		{
			key: "privacy",
			label: "Privacy First",
			color: "#10B981",
			Icon: ShieldCheck
		},
		{
			key: "responsive",
			label: "Fully Responsive Design",
			color: "#8B5CF6",
			Icon: Smartphone
		},
		{
			key: "theme",
			label: "Light & Dark Mode",
			color: "#6366F1",
			Icon: Moon
		},
		{
			key: "notifications",
			label: "Real-Time Notifications",
			color: "#EF4444",
			Icon: Bell
		},
		{
			key: "srmap",
			label: "CampusSync SRMAP v2.0",
			color: "#06B6D4",
			Icon: Rocket
		},
		{
			key: "roommates",
			label: "Know Your Roommates — Coming Soon",
			color: "#EC4899",
			Icon: House
		}
	];
	function hexToRgba(hex, alpha = 1) {
		const h = hex.replace("#", "");
		const bigint = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16);
		return `rgba(${bigint >> 16 & 255}, ${bigint >> 8 & 255}, ${bigint & 255}, ${alpha})`;
	}
	function FeatureRotator({ iconClass, textClass, wrapperClass }) {
		const [index, setIndex] = (0, import_react.useState)(0);
		(0, import_react.useEffect)(() => {
			const t = setInterval(() => setIndex((i) => (i + 1) % features.length), 3500);
			return () => clearInterval(t);
		}, []);
		const current = features[index];
		const glow = hexToRgba(current.color, .45);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: wrapperClass ?? "flex justify-center items-center gap-2 mb-[28px] p-3 rounded-xl bg-muted/40 border border-border/40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					exit: { opacity: 0 },
					transition: { duration: .4 },
					className: "flex items-center gap-3",
					style: {
						color: current.color,
						transition: "color 400ms ease, text-shadow 400ms ease"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(current.Icon, {
						className: `${iconClass} shrink-0`,
						style: {
							color: current.color,
							filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.08))"
						}
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: textClass,
						style: {
							color: current.color,
							textShadow: `0 0 12px ${glow}`
						},
						children: current.label
					})]
				}, current.key)
			})
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-[100svh] w-full overflow-x-hidden bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: toggle,
			"aria-label": "Toggle theme",
			className: "absolute top-4 right-4 z-10 p-2.5 rounded-xl glass glass-border hover:bg-muted/60 transition-colors md:top-6 md:right-6",
			children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-5 w-5" })
		}), isDesktop ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-screen flex items-start justify-center px-4 pb-10 relative overflow-hidden bg-cover bg-center pt-[220px] md:pt-[260px] lg:pt-[300px] xl:pt-[320px]",
			style: {
				backgroundImage: "url('/images/srmap-background.png')",
				backgroundSize: "cover",
				backgroundPosition: "50% 15%"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0",
					style: { backgroundColor: theme === "dark" ? "rgba(0, 0, 0, 0.55)" : "transparent" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl opacity-30",
					style: { background: "var(--gradient-primary)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -bottom-32 -right-32 h-96 w-96 rounded-full blur-3xl opacity-20",
					style: { background: "var(--gradient-primary)" }
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
					className: `relative ${cardWidth} ${cardRadius} border backdrop-blur-xl ${cardPadding} ${cardMarginTop} ${cardStyle}`,
					style: { boxShadow: "var(--shadow-elegant)" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center gap-2 mb-[32px] text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: `font-bold tracking-tight ${titleSize}`,
								children: "Welcome back!"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `text-muted-foreground ${subtitleSize}`,
								children: "Login in to access your dashboard"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureRotator, {
							iconClass: "h-4 w-4",
							textClass: "text-xs"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleSubmit(onSubmit),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-muted-foreground mb-2 block uppercase tracking-wider",
										children: "Application Number"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										...register("applicationNumber"),
										placeholder: "AP22110010234",
										className: `w-full ${inputHeight} px-4 rounded-[16px] bg-background/60 border border-border/60 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all text-sm font-medium`,
										autoComplete: "username"
									}),
									errors.applicationNumber && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-destructive mt-1.5",
										children: errors.applicationNumber.message
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-muted-foreground mb-2 block uppercase tracking-wider",
										children: "Password"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "password",
										...register("password"),
										placeholder: "••••••••",
										className: `w-full ${inputHeight} px-4 rounded-[16px] bg-background/60 border border-border/60 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all text-sm`,
										autoComplete: "current-password"
									}),
									errors.password && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-destructive mt-1.5",
										children: errors.password.message
									})
								] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								disabled: submitting,
								className: `w-full mt-[28px] ${buttonHeight} text-white font-bold transition-all hover:brightness-110 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 flex items-center justify-center gap-2`,
								style: { background: "var(--gradient-primary)" },
								children: [submitting && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), submitting ? "Signing in…" : "Sign In"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground text-center mt-8",
							children: "Trouble signing in? please check your credentials."
						})
					]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `relative ${heroHeightClass} w-full overflow-hidden bg-cover bg-center bg-no-repeat`,
			style: { backgroundImage: "url('/images/srmap-background.png')" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { backgroundColor: theme === "dark" ? "rgba(0, 0, 0, 0.55)" : "rgba(255, 255, 255, 0.15)" }
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
				duration: .45,
				ease: [
					.25,
					.46,
					.45,
					.94
				]
			},
			className: `relative mx-auto ${cardMarginTop} ${cardWidth} ${cardRadius} border ${cardPadding} shadow-[0_30px_60px_-30px_rgba(15,23,42,0.25)] ${cardStyle}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center gap-3 mb-8 text-center px-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: `font-bold tracking-tight ${titleSize}`,
						children: "Welcome back!"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `text-muted-foreground ${subtitleSize}`,
						children: "Login to access your dashboard"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureRotator, {
					iconClass: "h-5 w-5",
					textClass: "text-sm",
					wrapperClass: "flex items-center gap-3 mb-6 rounded-xl border border-border/40 bg-muted/40 p-4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit(onSubmit),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-2 block text-sm font-semibold uppercase tracking-wider text-muted-foreground",
								children: "Application Number"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								...register("applicationNumber"),
								placeholder: "AP22110010234",
								className: `w-full ${inputHeight} rounded-[18px] border border-border/60 bg-background/60 px-4 text-sm font-medium transition-all focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10`,
								autoComplete: "username"
							}),
							errors.applicationNumber && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-destructive",
								children: errors.applicationNumber.message
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-2 block text-sm font-semibold uppercase tracking-wider text-muted-foreground",
								children: "Password"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "password",
								...register("password"),
								placeholder: "••••••••",
								className: `w-full ${inputHeight} rounded-[18px] border border-border/60 bg-background/60 px-4 text-sm transition-all focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10`,
								autoComplete: "current-password"
							}),
							errors.password && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-destructive",
								children: errors.password.message
							})
						] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						disabled: submitting,
						className: `mt-6 flex w-full items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold transition-all hover:brightness-110 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 ${buttonHeight}`,
						children: [submitting && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), submitting ? "Signing in…" : "Sign In"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-7 text-center text-sm text-muted-foreground",
					children: "Trouble signing in? please check your credentials."
				})
			]
		})] })]
	});
}
//#endregion
export { LoginPage as component };
