import ConnectDB from "@/database/db";

export const POST = async (req) => {
  const db = await ConnectDB();
  const data = await req.json();
  const { sid, email, name, picture } = data;
  const userSearch = `select * from users where sid = '${sid}'`;
  const userExist = await db.query(userSearch);
  console.log("User Exists");
  if (userExist[0].length > 0) {
    return new Response("User Already Exists");
  } else {
    const userAdd = `insert into users values('${sid}','${email}','${name}','${picture}');`;
    const newUser = await db.query(userAdd);
    if (newUser) {
      return new Response("User Added");
    } else {
      return new Response("Error Found");
    }
  }
};
