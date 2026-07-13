import { t as axios } from "../_libs/axios+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/api-2Tg5IZ_I.js
var api = axios.create({
	baseURL: "https://campusync-backend-production.up.railway.app/api",
	withCredentials: true,
	headers: { "Content-Type": "application/json" }
});
api.interceptors.request.use((config) => {
	if (typeof window !== "undefined") {
		const token = window.localStorage.getItem("auth_token");
		if (token) config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});
async function withFallback(call, fallback) {
	try {
		return await call();
	} catch {
		return fallback;
	}
}
//#endregion
export { withFallback as n, api as t };
