import { Router } from "express";
import { getSalesIdUsers, createSales } from "../controllers/salesController.js";
import { getDetailsSalesIdUsers, createDetalisSales } from "../controllers/salesDetailsController.js";
import { authenticate } from "../middleware/authenticate.js";

const router = Router();

router.post('/', authenticate, createSales);
router.post('/item', authenticate, createDetalisSales);


export default router;