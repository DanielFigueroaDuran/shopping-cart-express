import { pool } from "../config/db.js";

export const showAllProducts = async () => {
      const { rows } = await pool.query("SELECT * FROM products");
      return rows;
};

export const showProductsId = async (id) => {
      const { rows } = await pool.query("SELECT * FROM products where id =$1", [id]);
      return rows[0];
};

export const createProduct = async (name, price, img) => {
      const { rows } = await pool.query(`INSERT INTO products (name,price,img) VALUES ($1, $2, $3)`, [name, price, img]);
      return rows[0];
};
