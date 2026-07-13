import { api } from "./api";

export async function getExaminations() {
  const { data } = await api.get("/examinations");
  return data;
}