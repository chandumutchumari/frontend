import { n as withFallback, t as api } from "./api-2Tg5IZ_I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profile-X--K5P3c.js
var placeholder = {
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
	accessThrough: "Student Portal"
};
function normalizeSemester(value) {
	if (!value) return "";
	const raw = String(value).trim();
	const match = raw.match(/(?:Semester\s*[:\-]?\s*)?([0-9]+|[IVXLCDM]+)/i);
	if (!match) return raw;
	const candidate = match[1].toUpperCase();
	if (/^[0-9]+$/.test(candidate)) return candidate;
	const map = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1e3
	};
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
function normalizePhone(value) {
	if (!value) return "";
	return String(value).trim().replace(/\s*\(verified\)\s*$/i, "").trim();
}
function normalizeProfile(profile) {
	return {
		...profile,
		phone: normalizePhone(profile.phone) || placeholder.phone,
		semester: normalizeSemester(profile.semester) || placeholder.semester
	};
}
async function getProfile() {
	return withFallback(async () => {
		const profile = (await api.get("/profile")).data;
		return normalizeProfile(profile);
	}, placeholder);
}
//#endregion
export { getProfile as t };
