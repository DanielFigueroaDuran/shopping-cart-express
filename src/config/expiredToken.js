import { supabase } from './supabaseClient';

supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'TOKEN_REFRESHED') {
            console.log('Token ha sido renovado automáticamente.');
      } else if (event === 'SIGNED_OUT') {
            console.log('El usuario ha cerrado sesión o el token ha expirado.');
            // Redirige al usuario para que vuelva a autenticarse si es necesario
      }
});