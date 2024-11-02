import { Router } from "express";
import {
      getProducts,
      getProductId,
      createProduct,
      updateProduct,
      deleteProduct
} from "../controllers/productController.js";
//import authenticate from "../middleware/authenticate.js";
import { authenticate } from "../middleware/authenticate.js";
import { isAdmin } from "../middleware/isAdmin.js";

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProductId);

// Routes admin users

router.post('/', authenticate, isAdmin, createProduct);
router.put('/:id', authenticate, isAdmin, updateProduct);
router.delete('/:id', authenticate, isAdmin, deleteProduct);


export default router;