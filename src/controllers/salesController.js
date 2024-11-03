import {
      createSales,
      showSalesIdUsers
} from "../models/salesModel.js";


export const getSalesIdUsers = async (req, res, next) => {
      const { id_users } = req.params;
      try {
            const response = await showSalesIdUsers(id_users);
            res.status(200).json(response);
      } catch (error) {
            next(error);
      }
};

export const createSale = async (req, res, next) => {
      const { id_users, state, total } = req.body;
      try {
            const response = await createSales(id_users, state, total);
            res.status(201).json(response);
      } catch (error) {
            next(error);
      }
};

