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

export const createProducts = async (name, price, image) => {
      const { rows } = await pool.query(`INSERT INTO products (name,price,image) VALUES ($1, $2, $3) RETURNING *`, [name, price, image]);
      return rows[0];
};

export const updateProducts = async (name, price, image, id) => {
      const { rows } = await pool.query(`UPDATE products SET name = $1, price = $2, image = $3 where id = $4 RETURNING *`, [name, price, image, id]);
      return rows[0];
};

export const deleteProducts = async (id) => {
      const { rows } = await pool.query(`DELETE FROM products WHERE id = $1 RETURNING *`, [id]);
      return rows[0];
};