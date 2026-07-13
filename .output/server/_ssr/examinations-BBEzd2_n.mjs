import { n as withFallback, t as api } from "./api-2Tg5IZ_I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/examinations-BBEzd2_n.js
var semesterResult = {
	semester: "",
	gpa: 0,
	cgpa: 0,
	totalCredits: 0,
	rows: []
};
var internals = [];
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
var getSemesterResult = () => withFallback(async () => {
	const result = (await api.get("/examinations/semester")).data;
	return {
		...result,
		semester: normalizeSemester(result.semester) || semesterResult.semester
	};
}, semesterResult);
var getExamMarks = () => withFallback(async () => (await api.get("/examinations/marks")).data, []);
var getInternalMarks = () => withFallback(async () => (await api.get("/examinations/internals")).data, internals);
//#endregion
export { getInternalMarks as n, getSemesterResult as r, getExamMarks as t };
