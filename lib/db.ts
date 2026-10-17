import { Pool } from "pg";

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

if (process.env.NODE_ENV !== "production") {
  const globalWithPool = globalThis as typeof globalThis & {
    __pgPool?: Pool;
  };

  if (!globalWithPool.__pgPool) {
    globalWithPool.__pgPool = pool;
  }
}

export default pool;
