import ConnectDB from "@/database/db";

export const GET = async () => {
  const db = await ConnectDB();
  const [res] = await db.query("select * from searches;");
  return Response.json(res);
};
