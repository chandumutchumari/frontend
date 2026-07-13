import type { StudentProfile } from "@/types/profile";
import Card from "@/components/common/Card";
import { formatDisplayName } from "@/utils/formatter";

function ProfileCard({ profile }: { profile: Partial<StudentProfile> }) {
  return (
    <Card title="Profile">
      <div className="space-y-1 text-sm">
        <p><span className="text-muted-foreground">Name: </span>{formatDisplayName(profile.studentName)}</p>
        <p><span className="text-muted-foreground">Reg No: </span>{profile.registrationNumber}</p>
        <p><span className="text-muted-foreground">Program: </span>{profile.program}</p>
      </div>
    </Card>
  );
}

export default ProfileCard;
