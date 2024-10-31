import { Router } from "express";
import supabase from "../config/supabase";

const router = Router();

router.get('/credentials', (req, res) => {
      res.json({ supabase });
});