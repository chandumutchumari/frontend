export interface SemesterResult {
  semester: string;
  sgpa: number;
  cgpa: number;
  status: string;
}

export interface InternalMark {
  subject: string;
  cia1: number;
  cia2: number;
  assignment: number;
  total: number;
}

export interface ExamMarkDetail {
  semester: string;
  examMonthYear: string;
  subjectCode: string;
  subjectDescription: string;
  credits: number;
  grade: string;
  gradePoints: number;
  result: string;
  attempt: string;
}

export interface ExamRegistrationItem {
  code: string;
  name: string;
  registered: boolean;
}
