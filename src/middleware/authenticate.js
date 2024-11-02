import supabase from "../config/supabase.js";

export const authenticate = async (req, res, next) => {
      try {
            const token = req.headers.authorization?.split(" ")[1];
            if (!token) {
                  return res.status(401).json({ error: "Unauthorized" });
            }

            const { data: { user }, error } = await supabase.auth.getUser(token);
            if (error) {
                  if (error.message.includes("token is expired")) {
                        return res.status(401).json({ error: "Token expired. Please re-authenticate." });
                  }
                  return res.status(401).json({ error: "Unauthorized" });
            }

            req.user = user;
            next();
      } catch (error) {
            console.error("Unexpected error in authentication middleware:", error);
            return res.status(500).json({ error: "Server error" });
      }
};
