import ConnectDB from "@/db/db";

export const GET = async () => {
  await ConnectDB();
  return new Response("API OK");
};
