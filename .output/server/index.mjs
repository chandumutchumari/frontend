globalThis.__nitro_main__ = import.meta.url;
import { a as toEventHandler, c as NodeResponse, i as defineLazyEventHandler, l as serve, n as HTTPError, r as defineHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/academics-7DEDTuXb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4d6-9VtBjGXVyIYCMFBGRXrU15tp+Kc\"",
		"mtime": "2026-07-03T08:15:11.648Z",
		"size": 1238,
		"path": "../public/assets/academics-7DEDTuXb.js"
	},
	"/assets/AnimatePresence-Dkh4iypN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"104f-KJIrZIEus/MHgbstFsMb0PbxovA\"",
		"mtime": "2026-07-03T08:15:11.595Z",
		"size": 4175,
		"path": "../public/assets/AnimatePresence-Dkh4iypN.js"
	},
	"/assets/api-Dyu5Nkl5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b003-j5ix2eDdcD1qqBh8gw26oD+hmDs\"",
		"mtime": "2026-07-03T08:15:11.648Z",
		"size": 45059,
		"path": "../public/assets/api-Dyu5Nkl5.js"
	},
	"/assets/award--Ok54kXk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"112-f4QvSn3FI6h3Xo/DDhE77N7GBqE\"",
		"mtime": "2026-07-03T08:15:11.648Z",
		"size": 274,
		"path": "../public/assets/award--Ok54kXk.js"
	},
	"/assets/badge-Ckhyq7rW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"324-lVjrimCU6z7L1uormwiAIXAX7ok\"",
		"mtime": "2026-07-03T08:15:11.648Z",
		"size": 804,
		"path": "../public/assets/badge-Ckhyq7rW.js"
	},
	"/assets/button-BYXWNvpP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"55e-YfEToJP0H/LIccuyK41zQ5Vuf5c\"",
		"mtime": "2026-07-03T08:15:11.658Z",
		"size": 1374,
		"path": "../public/assets/button-BYXWNvpP.js"
	},
	"/assets/book-marked-CsJHl9hF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f7-94y148yXbnRAK7e1loQ2x6aT/B4\"",
		"mtime": "2026-07-03T08:15:11.656Z",
		"size": 247,
		"path": "../public/assets/book-marked-CsJHl9hF.js"
	},
	"/assets/calendar-days-BqwFLfuf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ee-4la2xHg+/9sUoVyZIp/UJZr8dPs\"",
		"mtime": "2026-07-03T08:15:11.662Z",
		"size": 494,
		"path": "../public/assets/calendar-days-BqwFLfuf.js"
	},
	"/assets/calendar-DssFYo_b.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e3-iXtYCQM6BVQQBOcqOMVJTitIohM\"",
		"mtime": "2026-07-03T08:15:11.662Z",
		"size": 483,
		"path": "../public/assets/calendar-DssFYo_b.js"
	},
	"/assets/circle-check-S70llP4z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b2-7bbeRBj5/qce40M05m2kos+SZgc\"",
		"mtime": "2026-07-03T08:15:11.668Z",
		"size": 178,
		"path": "../public/assets/circle-check-S70llP4z.js"
	},
	"/assets/CircularProgress-oM8vRjDe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"56f-FC5M1JgUpX9el6LRAowhDYTSfgg\"",
		"mtime": "2026-07-03T08:15:11.609Z",
		"size": 1391,
		"path": "../public/assets/CircularProgress-oM8vRjDe.js"
	},
	"/assets/chevron-down-CWynokkF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"80-0d01APHgJPVPqmmiNH6ivoGuM04\"",
		"mtime": "2026-07-03T08:15:11.668Z",
		"size": 128,
		"path": "../public/assets/chevron-down-CWynokkF.js"
	},
	"/assets/clipboard-check-hI-YUmZL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"130-PxEsUIt9TyMpo9HDbYl6SxWYRB4\"",
		"mtime": "2026-07-03T08:15:11.668Z",
		"size": 304,
		"path": "../public/assets/clipboard-check-hI-YUmZL.js"
	},
	"/assets/createLucideIcon-B_1GbDvl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4ab-Y4enwiXY2yAcF1Gu2b12sxHBTW8\"",
		"mtime": "2026-07-03T08:15:11.673Z",
		"size": 1195,
		"path": "../public/assets/createLucideIcon-B_1GbDvl.js"
	},
	"/assets/DataTable-D8LwKFBE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1102-J7A94mV3V9Xqy4apD+Ay7tlavgw\"",
		"mtime": "2026-07-03T08:15:11.612Z",
		"size": 4354,
		"path": "../public/assets/DataTable-D8LwKFBE.js"
	},
	"/assets/dist-Bbg7zwcE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"90a-Z9qoOVN5OBajkTT7KbVKC6RvY7M\"",
		"mtime": "2026-07-03T08:15:11.675Z",
		"size": 2314,
		"path": "../public/assets/dist-Bbg7zwcE.js"
	},
	"/assets/clock-6-gyif_i.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a9-ltdFrS0Zzz9dBOXmbtuKbhJ38pM\"",
		"mtime": "2026-07-03T08:15:11.673Z",
		"size": 169,
		"path": "../public/assets/clock-6-gyif_i.js"
	},
	"/assets/dist-C1RJhgYD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"281-K2XQEy4dSuaU+NZeVCiNF1cCMKU\"",
		"mtime": "2026-07-03T08:15:11.677Z",
		"size": 641,
		"path": "../public/assets/dist-C1RJhgYD.js"
	},
	"/assets/EmptyState-oPVPTL_6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ac-I93MCTIfs58LTnZ7NneGAxX4tBs\"",
		"mtime": "2026-07-03T08:15:11.614Z",
		"size": 684,
		"path": "../public/assets/EmptyState-oPVPTL_6.js"
	},
	"/assets/dist-DrKn-YtC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"61a-ibev35QTvlkI+olAVgvKl6Aprzo\"",
		"mtime": "2026-07-03T08:15:11.681Z",
		"size": 1562,
		"path": "../public/assets/dist-DrKn-YtC.js"
	},
	"/assets/clipboard-list-XHxTcx04.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19b-1RpuaF8nhu3mzEB9naZxMCFiXJ4\"",
		"mtime": "2026-07-03T08:15:11.668Z",
		"size": 411,
		"path": "../public/assets/clipboard-list-XHxTcx04.js"
	},
	"/assets/feedback-DgOuelCN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"252-C9a9DWY4HpKdNIWYtG69TwAXm4Q\"",
		"mtime": "2026-07-03T08:15:11.681Z",
		"size": 594,
		"path": "../public/assets/feedback-DgOuelCN.js"
	},
	"/assets/examinations-Cfw-Agnm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2c6-/HsvK1z8Pf4inVgUmH6VDcMRwBc\"",
		"mtime": "2026-07-03T08:15:11.681Z",
		"size": 710,
		"path": "../public/assets/examinations-Cfw-Agnm.js"
	},
	"/assets/chart-D5R4sO99.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"55c55-3pDX+cjupXPfNRec0QxUcUKj4Uo\"",
		"mtime": "2026-07-03T08:15:11.667Z",
		"size": 351317,
		"path": "../public/assets/chart-D5R4sO99.js"
	},
	"/assets/file-pen-line-DKfoLNX0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d1-glkOUHKXp+6OW3+sjtO/PTMZVrI\"",
		"mtime": "2026-07-03T08:15:11.681Z",
		"size": 465,
		"path": "../public/assets/file-pen-line-DKfoLNX0.js"
	},
	"/assets/GlassCard-CKXyOiDs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"20b-Lkw0mBB6CXprbTig2Fhd02KlXU0\"",
		"mtime": "2026-07-03T08:15:11.614Z",
		"size": 523,
		"path": "../public/assets/GlassCard-CKXyOiDs.js"
	},
	"/assets/graduation-cap-DtIWmifl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14c-Ef30Aubf6A/nU7rMbabFJvzmBw8\"",
		"mtime": "2026-07-03T08:15:11.681Z",
		"size": 332,
		"path": "../public/assets/graduation-cap-DtIWmifl.js"
	},
	"/assets/input-ZaD0ZHgT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26d-/GDH+YhrfC5uzYFR0lwWBwCa5pQ\"",
		"mtime": "2026-07-03T08:15:11.687Z",
		"size": 621,
		"path": "../public/assets/input-ZaD0ZHgT.js"
	},
	"/assets/jsx-runtime-D8nDyRPw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2210-qrBAUPDOR8ROKpBVNEla8AGnGKU\"",
		"mtime": "2026-07-03T08:15:11.687Z",
		"size": 8720,
		"path": "../public/assets/jsx-runtime-D8nDyRPw.js"
	},
	"/assets/key-round-DCxUkwQK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"163-XP9geoMtrcUn8TBghjK2ov13pag\"",
		"mtime": "2026-07-03T08:15:11.688Z",
		"size": 355,
		"path": "../public/assets/key-round-DCxUkwQK.js"
	},
	"/assets/loader-circle-D8psbp0G.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"90-Acq+TaQonHAGEyTPCObIqaAAS2c\"",
		"mtime": "2026-07-03T08:15:11.688Z",
		"size": 144,
		"path": "../public/assets/loader-circle-D8psbp0G.js"
	},
	"/assets/login-hUC48ezI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8e53-t/emGoWulVp79/QzcDyZvCttTPs\"",
		"mtime": "2026-07-03T08:15:11.693Z",
		"size": 36435,
		"path": "../public/assets/login-hUC48ezI.js"
	},
	"/assets/message-square-IB7H6D3V.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"179-eQqXdoXW3roRlok21zbrGP6YX6s\"",
		"mtime": "2026-07-03T08:15:11.693Z",
		"size": 377,
		"path": "../public/assets/message-square-IB7H6D3V.js"
	},
	"/assets/index-p-DXPLqW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6627d-HS50rEhtwwa7YjguLM3iM5IiFo8\"",
		"mtime": "2026-07-03T08:15:11.595Z",
		"size": 418429,
		"path": "../public/assets/index-p-DXPLqW.js"
	},
	"/assets/NavCard-DPO2Cgp7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5b9-23OF8t3iS0EcVD6imaXkchWspLc\"",
		"mtime": "2026-07-03T08:15:11.617Z",
		"size": 1465,
		"path": "../public/assets/NavCard-DPO2Cgp7.js"
	},
	"/assets/page-skeleton-BviyFYIR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"63d-ezn8xwxPRzgyqKYfuS13hQNCs6U\"",
		"mtime": "2026-07-03T08:15:11.698Z",
		"size": 1597,
		"path": "../public/assets/page-skeleton-BviyFYIR.js"
	},
	"/assets/PageHeader-BQNFHVAo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2bf-Xq07jq1h3t4svMpYeNNLFxk+epU\"",
		"mtime": "2026-07-03T08:15:11.619Z",
		"size": 703,
		"path": "../public/assets/PageHeader-BQNFHVAo.js"
	},
	"/assets/pen-line-DGLhqdE3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"277-HWj05t6v1Or9Xwab4+3l/hZ8b20\"",
		"mtime": "2026-07-03T08:15:11.698Z",
		"size": 631,
		"path": "../public/assets/pen-line-DGLhqdE3.js"
	},
	"/assets/profile-B3ckgLsx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"350-4Fnj7FJjBDZV6f1h0xLPkIdFboI\"",
		"mtime": "2026-07-03T08:15:11.698Z",
		"size": 848,
		"path": "../public/assets/profile-B3ckgLsx.js"
	},
	"/assets/progress-B8rb5e7L.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7d0-plbHSU/1REt+HpQtfsbj4N4opf4\"",
		"mtime": "2026-07-03T08:15:11.698Z",
		"size": 2e3,
		"path": "../public/assets/progress-B8rb5e7L.js"
	},
	"/assets/proxy-BARP7WGe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d8c3-d5qjTxNW3ppELrtK8KyrLTcxKSg\"",
		"mtime": "2026-07-03T08:15:11.698Z",
		"size": 121027,
		"path": "../public/assets/proxy-BARP7WGe.js"
	},
	"/assets/routes-DJ7LAi8J.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26-SoFMfAHVJ5oqB5t+mpFRoQvFIoc\"",
		"mtime": "2026-07-03T08:15:11.698Z",
		"size": 38,
		"path": "../public/assets/routes-DJ7LAi8J.js"
	},
	"/assets/StatCard-Dkv9C-EV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"132f-fhy2DdwBmmdORP0cHpjvhYm2S+o\"",
		"mtime": "2026-07-03T08:15:11.620Z",
		"size": 4911,
		"path": "../public/assets/StatCard-Dkv9C-EV.js"
	},
	"/assets/styles-CHRlGnnH.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"17623-in2lkphiERc5QD4BHORWpSDgdDM\"",
		"mtime": "2026-07-03T08:15:11.710Z",
		"size": 95779,
		"path": "../public/assets/styles-CHRlGnnH.css"
	},
	"/assets/sun-DtUNlX_h.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"27c-arrDMqUEVHlyVZdJEiNlu+puaiY\"",
		"mtime": "2026-07-03T08:15:11.698Z",
		"size": 636,
		"path": "../public/assets/sun-DtUNlX_h.js"
	},
	"/assets/user-DPog7uCY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c4-EMVsHpcWO6UAEjQ8Q27bTJdle1Q\"",
		"mtime": "2026-07-03T08:15:11.698Z",
		"size": 196,
		"path": "../public/assets/user-DPog7uCY.js"
	},
	"/assets/useQuery-BDzIoy9f.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2257-s4cgiPL5N16M9PZzSVH+ogVwcG8\"",
		"mtime": "2026-07-03T08:15:11.698Z",
		"size": 8791,
		"path": "../public/assets/useQuery-BDzIoy9f.js"
	},
	"/assets/useStore-CiD2yklt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4821-+XbXW1FIKLw6g0LwIWo3PwsoKgo\"",
		"mtime": "2026-07-03T08:15:11.698Z",
		"size": 18465,
		"path": "../public/assets/useStore-CiD2yklt.js"
	},
	"/assets/utils-B6KiDbIe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6a7d-iNkBSvaSyIjvZOzWoTvEa49qwcI\"",
		"mtime": "2026-07-03T08:15:11.710Z",
		"size": 27261,
		"path": "../public/assets/utils-B6KiDbIe.js"
	},
	"/assets/YAxis-C3IAWgGC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5eec-iZNqLVwMzebj5rItFxDIzacyXZk\"",
		"mtime": "2026-07-03T08:15:11.620Z",
		"size": 24300,
		"path": "../public/assets/YAxis-C3IAWgGC.js"
	},
	"/assets/_app-xBHG3e_J.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17a01-cdvCoBVETdDzTzkGa4rDjlFBWZ4\"",
		"mtime": "2026-07-03T08:15:11.623Z",
		"size": 96769,
		"path": "../public/assets/_app-xBHG3e_J.js"
	},
	"/assets/_app.academics-DAXZijdM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8d-7irsFg/BYTNAd/ni9c/y936n00k\"",
		"mtime": "2026-07-03T08:15:11.623Z",
		"size": 141,
		"path": "../public/assets/_app.academics-DAXZijdM.js"
	},
	"/assets/_app.academics.attendance-C-cnlPk-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"780a-W8FG0mLwjUP85p2h1CZqAS13HTU\"",
		"mtime": "2026-07-03T08:15:11.627Z",
		"size": 30730,
		"path": "../public/assets/_app.academics.attendance-C-cnlPk-.js"
	},
	"/assets/_app.academics.attendance-code-CjA4bQEP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d9d-cTr4D9Mr572vgXT4NSW2ksP0JPw\"",
		"mtime": "2026-07-03T08:15:11.627Z",
		"size": 3485,
		"path": "../public/assets/_app.academics.attendance-code-CjA4bQEP.js"
	},
	"/assets/_app.academics.index-CSkh9Zx_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4f2-HjZQubVbQidVwUoGf5NGslYiKZs\"",
		"mtime": "2026-07-03T08:15:11.629Z",
		"size": 1266,
		"path": "../public/assets/_app.academics.index-CSkh9Zx_.js"
	},
	"/assets/_app.academics.registration-axKVSwrp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"256-Fct/OsYMjDtckSwXDwK1latlv0g\"",
		"mtime": "2026-07-03T08:15:11.631Z",
		"size": 598,
		"path": "../public/assets/_app.academics.registration-axKVSwrp.js"
	},
	"/assets/_app.academics.subjects-C-T3lqvD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"789-5ZkyprhvwgzuRZhXBL9eD2v1y+s\"",
		"mtime": "2026-07-03T08:15:11.631Z",
		"size": 1929,
		"path": "../public/assets/_app.academics.subjects-C-T3lqvD.js"
	},
	"/assets/_app.academics.timetable-CjpBriOf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"85c-7W7PpuRx5FeS2Inx7h9nxB3HsWA\"",
		"mtime": "2026-07-03T08:15:11.631Z",
		"size": 2140,
		"path": "../public/assets/_app.academics.timetable-CjpBriOf.js"
	},
	"/assets/_app.dashboard-qiy3ckNY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12a67-j1UxQMJYdlcPDab+kjNskLgOqbg\"",
		"mtime": "2026-07-03T08:15:11.631Z",
		"size": 76391,
		"path": "../public/assets/_app.dashboard-qiy3ckNY.js"
	},
	"/assets/_app.examinations-DAXZijdM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8d-7irsFg/BYTNAd/ni9c/y936n00k\"",
		"mtime": "2026-07-03T08:15:11.631Z",
		"size": 141,
		"path": "../public/assets/_app.examinations-DAXZijdM.js"
	},
	"/assets/_app.examinations.index-DtSTRr2M.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"419-B+FJTqcvSMe8usAp8Re4LFS+CyQ\"",
		"mtime": "2026-07-03T08:15:11.631Z",
		"size": 1049,
		"path": "../public/assets/_app.examinations.index-DtSTRr2M.js"
	},
	"/assets/_app.examinations.internals-hNwwHSqp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c19-OV4tXmlu8BewcKeP3HHLMTq0QqA\"",
		"mtime": "2026-07-03T08:15:11.631Z",
		"size": 3097,
		"path": "../public/assets/_app.examinations.internals-hNwwHSqp.js"
	},
	"/assets/_app.examinations.marks-BMxgxQHS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"68d-E1+d6eQmqCFcZ6eFngqE/S7TAwY\"",
		"mtime": "2026-07-03T08:15:11.643Z",
		"size": 1677,
		"path": "../public/assets/_app.examinations.marks-BMxgxQHS.js"
	},
	"/assets/_app.examinations.registration-CLiDrW1d.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"245-bBkALPsmro3TXZGRtXu+gHPp9fM\"",
		"mtime": "2026-07-03T08:15:11.645Z",
		"size": 581,
		"path": "../public/assets/_app.examinations.registration-CLiDrW1d.js"
	},
	"/assets/_app.feedback-Sc4bh0jj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9d4-xSaMlaRArniqxSENmDxhzNg2RYo\"",
		"mtime": "2026-07-03T08:15:11.648Z",
		"size": 2516,
		"path": "../public/assets/_app.feedback-Sc4bh0jj.js"
	},
	"/assets/_app.examinations.semester-BnvQ31nE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3b9b-kqLhQB/8+5W0GuY8VOmmiEZSn80\"",
		"mtime": "2026-07-03T08:15:11.648Z",
		"size": 15259,
		"path": "../public/assets/_app.examinations.semester-BnvQ31nE.js"
	},
	"/assets/_app.profile-DKOK7pSv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1182-DuhskkVuLcIjN7zH7Cg9Foymv3A\"",
		"mtime": "2026-07-03T08:15:11.648Z",
		"size": 4482,
		"path": "../public/assets/_app.profile-DKOK7pSv.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_ZjwAue = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_ZjwAue
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
