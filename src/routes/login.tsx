import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Loader2, Shield, Zap, ShieldCheck, Smartphone, Bell, Rocket, Home } from "lucide-react";
import { toast } from "sonner";
import { login } from "@/services/auth";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign In — campuSync" },
      { name: "description", content: "Sign in to the student portal." },
    ],
  }),
  component: LoginPage,
});

const schema = z.object({
  applicationNumber: z.string().trim().min(3, "Application number is required"),
  password: z.string().min(4, "Password must be at least 4 characters"),
});

type FormVals = z.infer<typeof schema>;

function LoginPage() {
  const navigate = useNavigate();
  const { setToken } = useAuth();
  const { theme, toggle } = useTheme();
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormVals>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormVals) => {
    setSubmitting(true);
    try {
      const res = await login({ applicationNumber: values.applicationNumber, password: values.password });
      if (!res.success || !res.sessionId) {
        throw new Error(res.message || "Invalid credentials");
      }

      setToken(res.sessionId);
      toast.success("Welcome back!");
      navigate({ to: "/dashboard" });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Invalid credentials");
    } finally {
      setSubmitting(false);
    }
  };

  const [breakpoint, setBreakpoint] = useState<"mobile" | "tablet" | "desktop">("desktop");

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setBreakpoint("mobile");
      } else if (width < 1024) {
        setBreakpoint("tablet");
      } else {
        setBreakpoint("desktop");
      }
    };

    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);
    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  const isDesktop = breakpoint === "desktop";
  const isTablet = breakpoint === "tablet";
  const heroHeightClass = isDesktop ? "min-h-screen" : isTablet ? "h-[48vh] min-h-[340px]" : "h-[40vh] min-h-[260px]";
  const cardWidth = isDesktop
    ? "w-full max-w-[580px]"
    : isTablet
    ? "w-[68vw] max-w-[560px]"
    : "w-[92vw] max-w-[520px]";
  const cardPadding = isDesktop ? "p-10" : isTablet ? "p-10" : "p-6";
  const cardRadius = isDesktop ? "rounded-[32px]" : "rounded-[24px]";
  const titleSize = isDesktop ? "text-2xl" : isTablet ? "text-[2rem]" : "text-xl";
  const subtitleSize = isDesktop ? "text-sm" : isTablet ? "text-base" : "text-sm";
  const inputHeight = isDesktop ? "h-14 rounded-[16px]" : "h-[56px] rounded-[18px]";
  const buttonHeight = isDesktop ? "h-14 text-sm rounded-[16px]" : "h-[56px] text-base rounded-[18px]";
  const cardMarginTop = isDesktop ? "lg:-translate-y-[80px] xl:-translate-y-[100px]" : isTablet ? "mt-[-60px]" : "mt-[-50px]";
  const cardStyle = theme === "dark" ? "bg-slate-950/95 border-white/10" : "bg-white/95 border-slate-200/60";

  const features = [
    { key: "secure", label: "Secure Authentication", color: "#2563EB", Icon: Shield },
    { key: "fast", label: "Fast & Reliable Login", color: "#F59E0B", Icon: Zap },
    { key: "privacy", label: "Privacy First", color: "#10B981", Icon: ShieldCheck },
    { key: "responsive", label: "Fully Responsive Design", color: "#8B5CF6", Icon: Smartphone },
    { key: "theme", label: "Light & Dark Mode", color: "#6366F1", Icon: Moon },
    { key: "notifications", label: "Real-Time Notifications", color: "#EF4444", Icon: Bell },
    { key: "srmap", label: "CampusSync SRMAP v2.0", color: "#06B6D4", Icon: Rocket },
    { key: "roommates", label: "Know Your Roommates — Coming Soon", color: "#EC4899", Icon: Home },
  ];

  function hexToRgba(hex: string, alpha = 1) {
    const h = hex.replace('#', '');
    const bigint = parseInt(h.length === 3 ? h.split('').map(c=>c+c).join('') : h, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  function FeatureRotator({ iconClass, textClass, wrapperClass }: { iconClass: string; textClass: string; wrapperClass?: string }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const t = setInterval(() => setIndex((i) => (i + 1) % features.length), 3500);
      return () => clearInterval(t);
    }, []);

    const current = features[index];

    const glow = hexToRgba(current.color, 0.45);

    const outer = wrapperClass ?? "flex justify-center items-center gap-2 mb-[28px] p-3 rounded-xl bg-muted/40 border border-border/40";

    return (
      <div className={outer}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current.key}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3"
            style={{ color: current.color, transition: 'color 400ms ease, text-shadow 400ms ease' }}
          >
            <current.Icon className={`${iconClass} shrink-0`} style={{ color: current.color, filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.08))' }} />
            <p className={textClass} style={{ color: current.color, textShadow: `0 0 12px ${glow}` }}>
              {current.label}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="min-h-[100svh] w-full overflow-x-hidden bg-background">
      <button
        onClick={toggle}
        aria-label="Toggle theme"
        className="absolute top-4 right-4 z-10 p-2.5 rounded-xl glass glass-border hover:bg-muted/60 transition-colors md:top-6 md:right-6"
      >
        {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </button>

      {isDesktop ? (
        <div
          className="min-h-screen flex items-start justify-center px-4 pb-10 relative overflow-hidden bg-cover bg-center pt-[220px] md:pt-[260px] lg:pt-[300px] xl:pt-[320px]"
          style={{
            backgroundImage: "url('/images/srmap-background.png')",
            backgroundSize: "cover",
            backgroundPosition: "50% 15%",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: theme === "dark" ? "rgba(0, 0, 0, 0.55)" : "transparent",
            }}
          />
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl opacity-30"
               style={{ background: "var(--gradient-primary)" }} />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full blur-3xl opacity-20"
               style={{ background: "var(--gradient-primary)" }} />
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`relative ${cardWidth} ${cardRadius} border backdrop-blur-xl ${cardPadding} ${cardMarginTop} ${cardStyle}`}
            style={{ boxShadow: "var(--shadow-elegant)" }}
          >
            <div className="flex flex-col items-center gap-2 mb-[32px] text-center">
              <h1 className={`font-bold tracking-tight ${titleSize}`}>Welcome back!</h1>
              <p className={`text-muted-foreground ${subtitleSize}`}>Login in to access your dashboard</p>
            </div>
            <FeatureRotator iconClass="h-4 w-4" textClass="text-xs" />
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-6">
                <div>
                  <label className="text-xs font-semibold text-muted-foreground mb-2 block uppercase tracking-wider">
                    Application Number
                  </label>
                  <input
                    {...register("applicationNumber")}
                    placeholder="AP22110010234"
                    className={`w-full ${inputHeight} px-4 rounded-[16px] bg-background/60 border border-border/60 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all text-sm font-medium`}
                    autoComplete="username"
                  />
                  {errors.applicationNumber && (
                    <p className="text-xs text-destructive mt-1.5">{errors.applicationNumber.message}</p>
                  )}
                </div>
                <div>
                  <label className="text-xs font-semibold text-muted-foreground mb-2 block uppercase tracking-wider">
                    Password
                  </label>
                  <input
                    type="password"
                    {...register("password")}
                    placeholder="••••••••"
                    className={`w-full ${inputHeight} px-4 rounded-[16px] bg-background/60 border border-border/60 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all text-sm`}
                    autoComplete="current-password"
                  />
                  {errors.password && (
                    <p className="text-xs text-destructive mt-1.5">{errors.password.message}</p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className={`w-full mt-[28px] ${buttonHeight} text-white font-bold transition-all hover:brightness-110 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 flex items-center justify-center gap-2`}
                style={{ background: "var(--gradient-primary)" }}
              >
                {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
                {submitting ? "Signing in…" : "Sign In"}
              </button>
            </form>
            <p className="text-xs text-muted-foreground text-center mt-8">
              Trouble signing in? please check your credentials.
            </p>
          </motion.div>
        </div>
      ) : (
        <>
          <div className={`relative ${heroHeightClass} w-full overflow-hidden bg-cover bg-center bg-no-repeat`} style={{ backgroundImage: "url('/images/srmap-background.png')" }}>
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: theme === "dark" ? "rgba(0, 0, 0, 0.55)" : "rgba(255, 255, 255, 0.15)",
              }}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`relative mx-auto ${cardMarginTop} ${cardWidth} ${cardRadius} border ${cardPadding} shadow-[0_30px_60px_-30px_rgba(15,23,42,0.25)] ${cardStyle}`}
          >
            <div className="flex flex-col items-center gap-3 mb-8 text-center px-1">
              <h1 className={`font-bold tracking-tight ${titleSize}`}>Welcome back!</h1>
              <p className={`text-muted-foreground ${subtitleSize}`}>Login to access your dashboard</p>
            </div>
            <FeatureRotator
              iconClass="h-5 w-5"
              textClass="text-sm"
              wrapperClass="flex items-center gap-3 mb-6 rounded-xl border border-border/40 bg-muted/40 p-4"
            />
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Application Number
                  </label>
                  <input
                    {...register("applicationNumber")}
                    placeholder="AP22110010234"
                    className={`w-full ${inputHeight} rounded-[18px] border border-border/60 bg-background/60 px-4 text-sm font-medium transition-all focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10`}
                    autoComplete="username"
                  />
                  {errors.applicationNumber && (
                    <p className="mt-2 text-sm text-destructive">{errors.applicationNumber.message}</p>
                  )}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Password
                  </label>
                  <input
                    type="password"
                    {...register("password")}
                    placeholder="••••••••"
                    className={`w-full ${inputHeight} rounded-[18px] border border-border/60 bg-background/60 px-4 text-sm transition-all focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10`}
                    autoComplete="current-password"
                  />
                  {errors.password && (
                    <p className="mt-2 text-sm text-destructive">{errors.password.message}</p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className={`mt-6 flex w-full items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold transition-all hover:brightness-110 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 ${buttonHeight}`}
              >
                {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
                {submitting ? "Signing in…" : "Sign In"}
              </button>
            </form>
            <p className="mt-7 text-center text-sm text-muted-foreground">
              Trouble signing in? please check your credentials.
            </p>
          </motion.div>
        </>
      )}
    </div>
  );
}
