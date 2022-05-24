 import { Pool } from "pg";
 import { password, port, user } from "pg/lib/defaults";

 export const pool = new Pool({
     host: 'ec2-3-228-235-79.compute-1.amazonaws.com',
     user: 'zrzwyvafeufear',
     password: 'dc23b73d9da886fdf64f033f42fcda160bf8a5dfa901c06367df1f3607fdf070',
     database: 'de9buvfhtbndn9',
     port: 5432,
     ssl: { rejectUnauthorized: false }
 })