import {
      createSalesDetails,
      showDetailsSalesId
} from "../models/salesDetailsModel.js";


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
      const { id_sales, id_product, description, sales_price, amount, total } = req.body;
      try {
            const response = await createSalesDetails(id_sales, id_product, description, sales_price, amount, total);
            res.status(201).json(response);
      } catch (error) {
            next(error);
      }
};
