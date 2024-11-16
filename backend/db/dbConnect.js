const mysql = require('mysql2/promise');




const connDb =async ()=>{

  return  await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password:'root',
        database: 'taskmanagement',
      });
}
console.log(connDb)  

  module.exports={
    connDb
  }