import ConnectDB from "@/database/db";

export const GET = async (req, { params }) => {
  const { sid } = await params;
  console.log(sid);
  const db = await ConnectDB();
  const query = `select * from searches where email = '${sid}'`;
  const [res] = await db.query(query);
  return Response.json(res);
};
