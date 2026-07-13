import { api, withFallback } from "./api";
import type { InternalMarkRow, SemesterResult } from "@/types";
import type { ExamMarkDetail } from "@/types/examination";

const semesterResult: SemesterResult = {
  semester: "",
  gpa: 0.0,
  cgpa: 0.0,
  totalCredits: 0,
  rows: [],
};

const internals: InternalMarkRow[] = [];

function normalizeSemester(value: string | undefined | null): string {
  if (!value) return "";
  const raw = String(value).trim();
  const match = raw.match(/(?:Semester\s*[:\-]?\s*)?([0-9]+|[IVXLCDM]+)/i);
  if (!match) return raw;

  const candidate = match[1].toUpperCase();
  if (/^[0-9]+$/.test(candidate)) return candidate;

  const map: Record<string, number> = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let total = 0;
  let prev = 0;
  for (let i = candidate.length - 1; i >= 0; i -= 1) {
    const current = map[candidate[i]] ?? 0;
    if (current < prev) total -= current;
    else total += current;
    prev = current;
  }

  return total > 0 ? total.toString() : raw;
}

export const getSemesterResult = () =>
  withFallback(async () => {
    const result = (await api.get<SemesterResult>("/examinations/semester")).data;
    return {
      ...result,
      semester: normalizeSemester(result.semester) || semesterResult.semester,
    };
  }, semesterResult);

export const getExamMarks = () =>
  withFallback(async () => (await api.get<ExamMarkDetail[]>("/examinations/marks")).data, []);

export const getInternalMarks = () =>
  withFallback(async () => (await api.get<InternalMarkRow[]>("/examinations/internals")).data, internals);
