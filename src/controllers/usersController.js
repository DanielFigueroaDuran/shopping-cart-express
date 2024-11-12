import { createUser, showUserIdSupabase } from "../models/userModel.js";

export const getUsersIdSupabase = async (req, res, next) => {
      const { id_auth_supabase } = req.params;
      try {
            const response = await showUserIdSupabase(id_auth_supabase);
            res.status(200).json(response);
      } catch (error) {
            next(error);
      }
};

export const createUsers = async (req, res, next) => {
      const { role, id_auth_supabase, name } = req.body;
      try {
            const response = await createUser(role, id_auth_supabase, name);
            res.status(201).json(response);
      } catch (error) {
            next(error);
      }
};
