import { pool } from "../config/db.js";


export const showDetailsSalesId = async (id_sales) => {
      const { rows } = await pool.query(`SELECT * FROM details_sales where id_sales =$1`, [id_sales]);
      return rows[0];
};

export const createSalesDetails = async (id_sales, id_product, description, sales_price, amount, total) => {
      const { rows } = await pool.query(`INSERT INTO details_sales (id_sales, id_product, description, sales_price, amount, total) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
            [id_sales, id_product, description, sales_price, amount, total]);
      return rows[0];
};


