import { Router } from "express";
import { getSalesIdUsers, createSale } from "../controllers/salesController.js";
import { getDetailsSalesIdUsers, createDetalisSales } from "../controllers/salesDetailsController.js";
import { authenticate } from "../middleware/authenticate.js";

const router = Router();

router.post('/', authenticate, createSale);
router.post('/item/:id_users', authenticate, createDetalisSales);


export default router;