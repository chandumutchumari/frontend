import { api, withFallback } from "./api";
import type { Profile } from "@/types";

const placeholder: Profile = {
  studentName: " ",
  registerNumber: " ",
  institution: " ",
  semester: "-",
  program: "-",
  specialization: "-",
  dob: "-",
  gender: "-",
  phone: "-",
  email: "-",
  fatherName: "-",
  motherName: "-",
  accessThrough: "Student Portal",
};

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

function normalizePhone(value: string | undefined | null): string {
  if (!value) return "";

  const raw = String(value).trim();
  return raw.replace(/\s*\(verified\)\s*$/i, "").trim();
}

function normalizeProfile(profile: Profile): Profile {
  return {
    ...profile,
    phone: normalizePhone(profile.phone) || placeholder.phone,
    semester: normalizeSemester(profile.semester) || placeholder.semester,
  };
}

export async function getProfile(): Promise<Profile> {
  return withFallback(async () => {
    const profile = (await api.get<Profile>("/profile")).data;
    return normalizeProfile(profile);
  }, placeholder);
}
