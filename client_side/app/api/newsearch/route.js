import ConnectDB from "@/database/db";

export const POST = async (req) => {
  const db = await ConnectDB();
  const data = await req.json();
  const { email, name, country, sortBy, stars, fromNum, toNum, description } =
    data;
  console.log(email, name, country, sortBy, stars, fromNum, toNum, description);
  const query = `insert into searches(email,name,country,sortBy,stars,fromNum,toNum,description) values ('${email}','${name}','${country}',${sortBy},${stars},${fromNum},${toNum},'${description}');`;
  const [res] = await db.query(query);
  console.log(res);
  return new Response("Ok");
};
