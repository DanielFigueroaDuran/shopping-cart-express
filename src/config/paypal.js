// const paypal = require("@paypal/checkout-server-sdk");
import paypal from "@paypal/checkout-server-sdk";
// Configuración del entorno (Sandbox o Live)
function environment() {
      let clientId = "YOUR_CLIENT_ID";
      let clientSecret = "YOUR_CLIENT_SECRET";
      return new paypal.core.SandboxEnvironment(clientId, clientSecret);
      // Para producción, usa paypal.core.LiveEnvironment
}

function client() {
      return new paypal.core.PayPalHttpClient(environment());
}
