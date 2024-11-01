import { Router } from "express";
import {
      getProducts,
      getProductId,
      createProduct,
      updateProduct,
      deleteProduct
} from "../controllers/productController.js";

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProductId);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);


export default router;