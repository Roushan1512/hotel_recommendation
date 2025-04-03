import mysql from "mysql2/promise";

const ConnectDB = async () => {
  try {
    const connInst = mysql.createConnection({
      host: process.env.dbHost,
      port: process.env.dbPort,
      user: process.env.dbUser,
      password: process.env.dbPass,
      database: process.env.dbName,
    });
    console.log("MySql Connected");
    return connInst;
  } catch (err) {
    console.log("MySql Failed");
    return err;
  }
};
export default ConnectDB;
