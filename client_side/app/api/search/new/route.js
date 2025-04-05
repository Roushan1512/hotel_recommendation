import ConnectDB from "@/database/db";

export const POST = async (req) => {
  const db = await ConnectDB();
  const data = await req.json();
  const {
    sid,
    email,
    name,
    country,
    sortBy,
    stars,
    fromNum,
    toNum,
    description,
  } = data;
  console.log(
    sid,
    email,
    name,
    country,
    sortBy,
    stars,
    fromNum,
    toNum,
    description
  );
  const query = `insert into searches(sid,email,name,country,sortBy,stars,fromNum,toNum,description) values ('${sid}','${email}','${name}','${country}',${sortBy},${stars},${fromNum},${toNum},'${description}');`;
  const [res] = await db.query(query);
  console.log(res);
  return new Response("Ok");
};
