import { api } from "./api";

export async function getAcademics() {
  const { data } = await api.get("/academics");
  return data;
}