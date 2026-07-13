import type { StudentProfile } from "@/types/profile";
import Card from "@/components/common/Card";
import { formatDisplayName } from "@/utils/formatter";

function PersonalInfo({ profile }: { profile: Partial<StudentProfile> }) {
  const rows: [string, string | undefined][] = [
    ["Date of Birth", profile.dateOfBirth],
    ["Gender", profile.gender],
    ["Blood Group", profile.bloodGroup],
    ["Email", profile.email],
    ["Mobile", profile.mobile],
    ["Father", profile.fatherName],
    ["Mother", profile.motherName],
  ];
  return (
    <Card title="Personal Information">
      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
        {rows.map(([k, v]) => (
          <div key={k}>
            <dt className="text-muted-foreground">{k}</dt>
            <dd className="font-medium">{k === "Father" || k === "Mother" ? formatDisplayName(v) || "-" : v ?? "-"}</dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}

export default PersonalInfo;
