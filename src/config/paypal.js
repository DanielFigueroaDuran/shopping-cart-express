import "dotenv/config.js"
// import paypal from "@paypal/checkout-server-sdk";
// // Configuración del entorno (Sandbox o Live)
// const environment = () => {
//       let clientId = process.env.PAYPAL_CLIENT_ID;
//       let clientSecret = process.env.PAYPAL_CLIENT_SECRET;
//       return new paypal.core.SandboxEnvironment(clientId, clientSecret);
//       // Para producción, usa paypal.core.LiveEnvironment
// }

// export const client = () => {
//       return new paypal.core.PayPalHttpClient(environment());
// }

import paypal from "paypal-rest-sdk";

paypal.configure({
      mode: process.env.PAYPAL_MODE,
      client_id: process.env.PAYPAL_CLIENT_ID,
      client_secret: process.env.PAYPAL_CLIENT_SECRET,
});
export const paypal = { paypal };