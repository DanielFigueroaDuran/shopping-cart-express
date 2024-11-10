import { Router } from "express";
import { authenticate } from "../middleware/authenticate.js";
import { createPayment, executePayment } from "../controllers/paypalController.js";
const router = Router();

router.post('/create', authenticate, createPayment);
router.get('/success/:idsales', authenticate, executePayment);

export default router;