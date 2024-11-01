import { pool } from "../config/db.js";

//const table = products;

export const showAllProducts = async () => {
      const { rows } = await pool.query(`SELECT * FROM products`);
      return rows;
};

export const showProductsId = async (id) => {
      const { rows } = await pool.query(`SELECT * FROM products where id =$1`, [id]);
      return rows[0];
};

export const createProducts = async (name, price, img) => {
      const { rows } = await pool.query(`INSERT INTO products (name,price,img) VALUES ($1, $2, $3) RETURNING *`, [name, price, img]);
      return rows[0];
};

export const updateProducts = async (name, price, img, id) => {
      const { rows } = await pool.query(`UPDATE products SET name = $1, price = $2, img = $3 where id = $4 RETURNING *`, [name, price, img, id]);
};

export const deleteProducts = async (id) => {
      const { rows } = await pool.query(`DELETE FROM products WHERE id = $1 RETURNING *`, [id]);
      return rows[0];
};