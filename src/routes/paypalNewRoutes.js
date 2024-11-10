import { Router } from "express";
import { authenticate } from "../middleware/authenticate.js";
import { createOrder } from "../controllers/paypalNewController.js";
const router = Router();

router.post('/create', authenticate, createOrder);
// router.get('/success/:idsales', authenticate, executePayment);

export default router;