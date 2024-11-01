import { Router } from "express";
import { signInNewSession, signUpNewEmail } from "../controllers/authController.js";

const router = Router();

router.post('/signup', signUpNewEmail);
router.post('/signin', signInNewSession);

export default router;