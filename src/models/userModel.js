import { pool } from "../config/db.js"


export const showRolesIdUser = async (idAuthSupabase) => {
      const { rows } = await pool.query("SELECT role FROM users where id_auth_supabase = $1", [idAuthSupabase]);
      return rows[0]?.role;
};

export const showUserIdSupabase = async (idAuthSupabase) => {
      const { rows } = await pool.query("SELECT * FROM users where id_auth_supabase = $1", [idAuthSupabase]);
      return rows[0];
}
