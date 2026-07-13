import { api } from "./api";

export async function getFeedback() {
  const { data } = await api.get("/feedback");
  return data;
}
