import {
      showAllProducts,
      showProductsId,
      createProducts,
      updateProducts,
      deleteProducts
} from "../models/productModel.js";

export const getProducts = async (req, res, next) => {
      try {
            const result = await showAllProducts();
            res.status(200).json(result);
      } catch (error) {
            next(error); //passes the error to middleware
      }
};

export const getProductId = async (req, res, next) => {
      const { id } = req.params;
      try {
            const response = await showProductsId(id);
            res.status(200).json(response);
      } catch (error) {
            next(error);
      }
};

export const createProduct = async (req, res, next) => {
      const { name, price, image } = req.body;
      try {
            const response = await createProducts(name, price, image);
            res.status(201).json(response);
      } catch (error) {
            next(error);
      }
};

export const updateProduct = async (req, res, next) => {
      const { id } = req.params;
      const { name, price, image } = req.body;
      try {
            const response = await updateProducts(name, price, image, id);
            res.status(200).json(response);
      } catch (error) {
            next(error);
      }
};

export const deleteProduct = async (req, res, next) => {
      const { id } = req.params;
      try {
            const response = await deleteProducts(id);
            res.status(200).json(response);
      } catch (error) {
            next(error);
      }
};