import { createFileRoute } from "@tanstack/react-router";
import { FileSignature } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { EmptyState } from "@/components/ui/EmptyState";
import { GlassCard } from "@/components/ui/GlassCard";

export const Route = createFileRoute("/_app/academics/registration")({
  head: () => ({ meta: [{ title: "Course Registration — campuSync" }] }),
  component: RegistrationPage,
});

function RegistrationPage() {
  return (
    <div>
      <PageHeader title="Course Registration" subtitle="Register for upcoming semester courses." />
      <GlassCard>
        <EmptyState
          icon={FileSignature}
          title="Registration window is closed"
          description="Course registration will open at the start of the next academic term. Check back later for updates."
        />
      </GlassCard>
    </div>
  );
}
