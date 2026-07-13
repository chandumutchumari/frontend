import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import type { FeedbackItem } from "@/types/feedback";

function FeedbackCard({ item, onOpen }: { item: FeedbackItem; onOpen?: (id: string) => void }) {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-semibold">{item.course}</h4>
        </div>
        <Button onClick={() => onOpen?.(item.id)} variant={item.submitted ? "secondary" : "primary"}>
          {item.submitted ? "Submitted" : "Give Feedback"}
        </Button>
      </div>
    </Card>
  );
}

export default FeedbackCard;
