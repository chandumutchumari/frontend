import { api, withFallback } from "./api";
import type { AttendanceRow, SubjectRow, TimetableSlot } from "@/types";

const attendance: AttendanceRow[] = [
  { subject: "Data Structures", faculty: "Dr. R. Verma", present: 38, absent: 4, percentage: 90, status: "Good" },
  { subject: "Operating Systems", faculty: "Dr. S. Iyer", present: 30, absent: 8, percentage: 78, status: "Warning" },
  { subject: "DBMS", faculty: "Dr. P. Singh", present: 35, absent: 5, percentage: 87, status: "Good" },
  { subject: "Computer Networks", faculty: "Dr. K. Rao", present: 25, absent: 15, percentage: 62, status: "Critical" },
  { subject: "Software Engineering", faculty: "Dr. M. Joshi", present: 40, absent: 2, percentage: 95, status: "Good" },
];

const timetable: TimetableSlot[] = [
  { time: "09:00 - 10:00", Mon: "Data Structures", Tue: "DBMS", Wed: "OS", Thu: "Networks", Fri: "SE", Sat: "—" },
  { time: "10:00 - 11:00", Mon: "DBMS", Tue: "OS", Wed: "SE", Thu: "Data Structures", Fri: "Networks", Sat: "—" },
  { time: "11:15 - 12:15", Mon: "Networks", Tue: "SE", Wed: "Data Structures", Thu: "DBMS", Fri: "OS", Sat: "Lab" },
  { time: "01:30 - 02:30", Mon: "Lab", Tue: "Lab", Wed: "Lab", Thu: "Tutorial", Fri: "Project", Sat: "—" },
  { time: "02:30 - 03:30", Mon: "Lab", Tue: "Lab", Wed: "Lab", Thu: "Tutorial", Fri: "Project", Sat: "—" },
];

export const getAttendance = () =>
  withFallback(async () => (await api.get<AttendanceRow[]>("/academics/attendance")).data, attendance);

export const getSubjects = () =>
  api.get<SubjectRow[]>("/academics/subjects").then((response) => response.data);

export const getTimetable = () =>
  withFallback(async () => (await api.get<TimetableSlot[]>("/academics/timetable")).data, timetable);
