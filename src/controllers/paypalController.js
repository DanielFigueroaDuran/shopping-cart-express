import { client } from "../config/paypal.js";

const createOrder = async (req, res) => {
      const request = new paypal.orders.OrdersCreateRequest();
      request.prefer("return=representation");
      request.requestBody({
            intent: "CAPTURE",
            purchase_units: [
                  {
                        amount: {
                              currency_code: "USD",
                              value: "100.00" // Cambia el valor según el monto de tu transacción
                        }
                  }
            ]
      });

      try {
            const response = await client().execute(request);
            console.log(`Order ID: ${response.result.id}`);
            return response.result;
      } catch (err) {
            console.error(err);
            return null;
      }
}