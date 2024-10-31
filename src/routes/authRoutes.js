import { Router } from "express";
import { signInNewSession, signUpNewEmail } from "../controllers/authController.js";

const router = Router();

router.post('/singnup', signUpNewEmail);
router.post('/singin', signInNewSession);

export default router;