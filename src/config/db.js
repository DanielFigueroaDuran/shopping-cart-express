import "dotenv/config";
import fs from "fs";
import pkg from 'pg';

const { Pool } = pkg;

export const pool = new Pool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_POR,
      ssl: {
            rejectUnauthorized: true,
            ca: fs.readFileSync("src/certs/ca.crt").toString()
      },
      allowExitOnIdle: true
});

// Verify connection to the database

pool.connect((error, Client, release) => {
      if (error) {
            console.log('error de conexión', error.stack);
      } else {
            console.log('conexión exitosa');
            release();
      }
});
