export interface FeedbackItem {
  id: string;
  course: string;
  faculty: string;
  submitted: boolean;
}

export interface FeedbackResponse {
  questionId: string;
  rating: number;
  comment?: string;
}
