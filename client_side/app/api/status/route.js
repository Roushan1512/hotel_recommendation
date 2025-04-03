import ConnectDB from "@/database/db";

export const GET = async () => {
  const db = await ConnectDB();
  const query = "show databases;";
  const [res] = await db.query(query);
  return Response.json(res);
};
