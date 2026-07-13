import { n as withFallback, t as api } from "./api-2Tg5IZ_I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/feedback-QdDPK1c-.js
var placeholder = {
	completed: 3,
	pending: 2,
	history: [
		{
			id: "1",
			course: "Data Structures",
			faculty: "Dr. R. Verma",
			status: "Completed",
			date: "2026-05-10"
		},
		{
			id: "2",
			course: "Operating Systems",
			faculty: "Dr. S. Iyer",
			status: "Completed",
			date: "2026-05-12"
		},
		{
			id: "3",
			course: "DBMS",
			faculty: "Dr. P. Singh",
			status: "Completed",
			date: "2026-05-15"
		},
		{
			id: "4",
			course: "Computer Networks",
			faculty: "Dr. K. Rao",
			status: "Pending",
			date: "—"
		},
		{
			id: "5",
			course: "Software Engineering",
			faculty: "Dr. M. Joshi",
			status: "Pending",
			date: "—"
		}
	]
};
var getFeedback = () => withFallback(async () => (await api.get("/feedback")).data, placeholder);
//#endregion
export { getFeedback as t };
