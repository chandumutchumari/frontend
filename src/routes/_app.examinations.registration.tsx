import { createFileRoute } from "@tanstack/react-router";
import { ClipboardCheck } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { EmptyState } from "@/components/ui/EmptyState";
import { GlassCard } from "@/components/ui/GlassCard";

export const Route = createFileRoute("/_app/examinations/registration")({
  head: () => ({ meta: [{ title: "Exam Registration — campuSync" }] }),
  component: () => (
    <div>
      <PageHeader title="Exam Registration" subtitle="Register for upcoming examinations." />
      <GlassCard>
        <EmptyState
          icon={ClipboardCheck}
          title="No active registration window"
          description="Exam registration will reopen ahead of the next assessment cycle. You'll be notified when it opens."
        />
      </GlassCard>
    </div>
  ),
});
