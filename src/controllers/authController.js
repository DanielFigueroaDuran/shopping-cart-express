import supabase from "../config/supabase.js";


export const signUpNewEmail = async (req, res) => {
      const { email, password } = req.body;
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) return res.status(400).json({ error: error.stack });
      res.status(200).json({ user: data });
};

export const signInNewSession = async (req, res) => {
      const { email, password } = req.body;
      const { data, error } = await supabase.auth.signInNewSession({ email, password });
      if (error) return res.status(400).json({ error: error.stack });
      res.status(200).json({ session: data });
};



