import ConnectDB from "@/database/db";

export const POST = async (req) => {
  const db = await ConnectDB();
  const data = await req.json();
  console.log("DATA", data);
  return new Response("OK");
};
