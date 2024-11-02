import { showRolesIdUser } from "../models/userModel.js";

export const isAdmin = async (req, res, next) => {
      const user = req.user;
      if (!user) {
            return res.status(401).json({ error: "Unauthorized" });
      };
      try {
            const userRole = await showRolesIdUser(user.id);
            if (userRole !== "admin") {
                  return res.status(403).json({ error: "Forbidden" });
            };
            next();
      } catch (error) {
            next(error);
      }
};