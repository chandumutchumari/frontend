export interface LoginPayload {
  applicationNumber: string;
  password: string;
}

export interface Profile {
  studentName: string;
  registerNumber: string;
  institution: string;
  semester: string;
  program: string;
  specialization: string;
  dob: string;
  gender: string;
  phone: string;
  email: string;
  fatherName: string;
  motherName: string;
  accessThrough: string;
}

export interface AttendanceRow {
  subjectCode: string;
  subjectDescription: string;
  classesConducted: number;
  attendanceEntered: number;
  present: number;
  absent: number;
  attendancePercentage: number;
}

export interface SubjectRow {
  code: string;
  name: string;
  credits: number;
}

export interface TimetableSlot {
  time: string;
  Mon?: string;
  Tue?: string;
  Wed?: string;
  Thu?: string;
  Fri?: string;
  Sat?: string;
}

export interface SemesterResultRow {
  course: string;
  grade: string;
  credits: number;
  result: "Pass" | "Fail";
}

export interface CurrentSemesterResultRow {
  semester: string;
  subjectCode: string;
  subjectDescription: string;
  credits: number;
  grade: string;
  result: string;
}

export interface SemesterResult {
  gpa: number;
  cgpa: number;
  semester: string;
  totalCredits: number;
  rows: SemesterResultRow[];
  currentSemesterResults?: CurrentSemesterResultRow[];
}

export interface InternalMarkRow {
  subjectCode: string;
  subjectDescription: string;
  marksObtained: number;
  maxMarks: number;
}

export interface FeedbackItem {
  id: string;
  course: string;
  faculty: string;
  status: "Completed" | "Pending";
  date: string;
}

export interface FeedbackSummary {
  completed: number;
  pending: number;
  history: FeedbackItem[];
}
