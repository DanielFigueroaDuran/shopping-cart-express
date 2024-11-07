import { client } from "../config/paypal.js";

const createOrder = async (req, res) => {
      const request = new paypal.orders.OrdersCreateRequest();
      request.prefer("return=representation");
      request.requestBody({
            intent: "CAPTURE",
            purchase_units: [
                  {
                        item_list: {
                              items: req.body.items,
                        },
                        amount: {
                              currency_code: "USD",
                              value: req.body.total // Cambia el valor según el monto de tu transacción
                        },
                        description: 'Esta es la estructura de pagos con paypal'
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