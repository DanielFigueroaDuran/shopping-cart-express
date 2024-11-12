import { Router } from "express";
import { getUsersIdSupabase } from "../controllers/usersController.js";
import { authenticate } from "../middleware/authenticate.js";
import { isAdmin } from "../middleware/isAdmin.js";

const router = Router();

router.get('/:id_auth_supabase', authenticate, getUsersIdSupabase);


export default router;