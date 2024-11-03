import { createSalesDetails, showDetailsSalesId } from "../models/salesDetailsModel.js";
import { showSalesIdUsers } from "../models/salesModel.js";

export const getDetailsSalesIdUsers = async (req, res, next) => {
      const { id_sales } = req.params;
      try {
            const response = await showDetailsSalesId(id_sales);
            res.status(200).json(response);
      } catch (error) {
            next(error);
      }
};

export const createDetalisSales = async (req, res, next) => {
      const userId = req.params.id_users;

      const { id_product, description, sales_price, amount, total } = req.body;
      try {
            const sales = await showSalesIdUsers(userId);
            if (!sales) {
                  return res.status(404).json({ error: "Venta no encontrada" });
            };

            const response = await createSalesDetails(
                  sales.id,
                  id_product,
                  description,
                  sales_price,
                  amount,
                  total
            );
            res.status(201).json(response);
      } catch (error) {
            next(error);
      }
};
