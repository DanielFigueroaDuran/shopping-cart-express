import { pool } from "../config/db.js";

const table = products;

export const showAllProducts = async () => {
      const { rows } = await pool.query(`SELECT * FROM ${table}`);
      return rows;
};

export const showProductsId = async (id) => {
      const { rows } = await pool.query(`SELECT * FROM ${table} where id =$1`, [id]);
      return rows[0];
};

export const createProduct = async (name, price, img) => {
      const { rows } = await pool.query(`INSERT INTO ${table} (name,price,img) VALUES ($1, $2, $3) RETURNING *`,
            [name, price, img]);
      return rows[0];
};

export const updateProduct = async (name, price, img, id) => {
      const { rows } = await pool.query(`UPDATE ${table} SET name = $1, price = $2, img = $3 where id = $4 RETURNING *`,
            [name, price, img, id]);
};

export const deleteProduct = async (id) => {
      const { rows } = await pool.query(`DELETE FROM ${table} WHERE id = $1`, [id]);
};