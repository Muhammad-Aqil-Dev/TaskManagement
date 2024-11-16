require('dotenv').config();

const config={
    server:{
        port:process.env.PORT || 5001
    },
    database: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_NAME,
      },
    jwt:{
        secret_key:process.env.ACCESS_TOKEN_SECRET
    }
}

module.exports=config