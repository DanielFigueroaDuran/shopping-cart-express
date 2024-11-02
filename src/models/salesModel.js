import { pool } from "../config/db.js";


export const showSalesIdUsers = async (id) => {
      const { rows } = await pool.query(`SELECT * FROM sales where id_users =$1`, [id]);
      return rows[0];
};

export const createSales = async (id, state, total) => {
      const { rows } = await pool.query(`INSERT INTO sales (id_users, state, total) VALUES ($1, $2, $3) RETURNING *`, [id, state, total]);
      return rows[0];
};

export const updateSalesStatus = async (state, id) => {
      const { rows } = await pool.query(`UPDATE sales SET state = $1 where id_users = $2 RETURNING *`, [state, id]);
      return rows[0];
};

