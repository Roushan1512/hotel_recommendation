import ConnectDB from "@/database/db";

export const GET = async () => {
  try {
    const db = await ConnectDB();
    const searches =
      "create table searches(id int auto_increment primary key, sid varchar(255), email varchar(255), name varchar(255), country varchar(255), sortBy int, stars int, fromNum int, toNum int, description varchar(255), created_at timestamp default current_timestamp);";
    const searchesCreated = await db.query(searches);
    const users =
      "create table users (sid varchar(255) primary key, email varchar(255), name varchar(255), picture varchar(255));";
    const usersCreated = await db.query(users);
    return new Response("Both Tables Created");
  } catch (err) {
    return new Response("Tables Not Created");
  }
};
