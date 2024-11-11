import { Router } from "express";
import { authenticate } from "../middleware/authenticate.js";
import { captureOrder, createOrder } from "../controllers/paypalNewController.js";
const router = Router();

router.post('/create', authenticate, createOrder);
router.get('/success/:idsales', authenticate, captureOrder);

export default router;