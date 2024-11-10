import { client } from "../config/paypal.js";

// create order pay

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
            const order = await client().execute(request);
            res.json({ id: order.result.id }); // Enviar el ID de la orden al cliente
      } catch (err) {
            res.status(500).send(err);
      }
};

//capture the order

export const executePayment = async (req, res) => {
      const { orderID } = req.body; // Recibe el orderID desde el frontend

      const request = new paypal.orders.OrdersCaptureRequest(orderID);
      request.requestBody({});

      try {
            const capture = await client().execute(request);
            res.json(capture.result); // Enviar el resultado de la captura al cliente
      } catch (err) {
            res.status(500).send(err);
      }
};