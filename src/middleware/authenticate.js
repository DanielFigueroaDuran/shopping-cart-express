import supabase from "../config/supabase.js";

const authenticate = async (req, res, next) => {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) {
            return res.status(401).json({ error: "Sin Autorización" });
      };
      const { data: { user }, error } = await supabase.auth.getUser(token);
      if (error || !user) {
            return res.status(401).json({ error: "Unauthorizeds" });
      };
      res.user = user
      next();
};

export default authenticate;