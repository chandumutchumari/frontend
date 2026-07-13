import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import type { ExamRegistrationItem } from "@/types/examination";

function ExamRegistration({ items }: { items: ExamRegistrationItem[] }) {
  return (
    <Card title="Exam Registration">
      <ul className="divide-y divide-border">
        {items.map((it) => (
          <li key={it.code} className="flex items-center justify-between py-3">
            <div>
              <p className="font-medium">{it.name}</p>
              <p className="text-xs text-muted-foreground">{it.code}</p>
            </div>
            <Button variant={it.registered ? "secondary" : "primary"}>
              {it.registered ? "Registered" : "Register"}
            </Button>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default ExamRegistration;
