import dotenv from "dotenv";

dotenv.config();
const env = process.env;

/* PORT_DB=5432
PORT_SERVER=3333
DB_USER=postgres
DB_PASSWORD=postgres */

const config = {
  port: 3333,
};

export default config;
