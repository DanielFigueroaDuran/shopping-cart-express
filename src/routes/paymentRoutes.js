import { Router } from "express";
import { authenticate } from "../middleware/authenticate.js";
import { createPayment, executePayment } from "../controllers/paypalController2.js";
const router = Router();

router.post('/create', authenticate, createPayment);
router.get('/success/:idSales', authenticate, executePayment);

export default router;