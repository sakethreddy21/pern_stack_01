const Pool = require("pg").Pool;
const pool = new Pool ({
  user: "postgres",
  password: "saketh@21",
  port:5432,
  host:"localhost",
  database:"partydb"
})

module.exports=pool;