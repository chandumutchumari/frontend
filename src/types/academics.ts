export interface Subject {
  code: string;
  name: string;
  credits: number;
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

export interface TimetableSlot {
  day: string;
  time: string;
  subject: string;
  room: string;
}
