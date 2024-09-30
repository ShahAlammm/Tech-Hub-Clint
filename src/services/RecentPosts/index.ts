import nexiosInstance from "@/src/config/nexios.config";
import { delay } from "@/src/utils/delay";

export const getRecentPosts = async () => {
  const res = await nexiosInstance.get("/items?sortBy=-createdAt&limit=9");

  const { data }: any = res.data;

  await delay(2000);
  return data;
};
