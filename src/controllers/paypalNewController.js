import paypal from "@paypal/checkout-server-sdk";
import { client } from "../config/paypalNew.js";



// Ruta para crear una orden de pago
export const createOrder = async (req, res) => {
      const request = new paypal.orders.OrdersCreateRequest();
      request.prefer("return=representation");
      request.requestBody({
            intent: "CAPTURE",
            purchase_units: [
                  {
                        amount: {
                              currency_code: "USD",
                              value: req.body.total // Cambia este valor según el monto de la transacción
                        },
                        description: "Esta es la estructura de pagos con paypal",
                  }
            ]
      });

      try {
            const order = await client().execute(request);
            res.json(order.result); // Enviar el ID de la orden al cliente
      } catch (err) {
            res.status(500).send(err);
      }
};

// Ruta para capturar la orden
export const captureOrder = async (req, res) => {
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