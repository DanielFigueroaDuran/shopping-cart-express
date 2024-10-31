import { supabase } from "../config/supabase.js"

const signUp = async ({ email, password }) => {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) throw new Error(error.stack);
      return data;
};

const signIn = async ({ email, password }) => {
      const { data, error } = await supabase.auth.signInWithEmail({ email, password });
      if (error) throw new Error(error.stack);
      return data;
};

export const user = {
      signUp,
      signIn
}