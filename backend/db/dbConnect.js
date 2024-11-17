const mysql = require('mysql2/promise');
const config = require('../config/config');




const connDb =async ()=>{

  return  await mysql.createConnection({
        host: config.database.host,//'localhost',
        user: config.database.user,//'root',
        password:config.database.password,//'root',
        database: config.database.name//'taskmanagement',
      });
}
console.log(connDb)  

  module.exports={
    connDb
  }