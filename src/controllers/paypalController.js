//import { client } from "../config/paypal.js";

// // create order pay

// const createOrder = async (req, res) => {
//       const request = new paypal.orders.OrdersCreateRequest();
//       request.prefer("return=representation");
//       request.requestBody({
//             intent: "CAPTURE",
//             purchase_units: [
//                   {
//                         item_list: {
//                               items: req.body.items,
//                         },
//                         amount: {
//                               currency_code: "USD",
//                               value: req.body.total // Cambia el valor según el monto de tu transacción
//                         },
//                         description: 'Esta es la estructura de pagos con paypal'
//                   }
//             ]
//       });

//       try {
//             const order = await client().execute(request);
//             res.json({ id: order.result.id }); // Enviar el ID de la orden al cliente
//       } catch (err) {
//             res.status(500).send(err);
//       }
// };

// //capture the order

// export const executePayment = async (req, res) => {
//       const { orderID } = req.body; // Recibe el orderID desde el frontend

//       const request = new paypal.orders.OrdersCaptureRequest(orderID);
//       request.requestBody({});

//       try {
//             const capture = await client().execute(request);
//             res.json(capture.result); // Enviar el resultado de la captura al cliente
//       } catch (err) {
//             res.status(500).send(err);
//       }
// };

import paypal from "../config/paypal.js";
import { confirmSales } from "../models/salesModel.js";

exports.createPayment = (req, res, next) => {
      const { items, total } = req.body
      const mappedItems = items.map(item => ({
            name: item.descripcion,
            sku: `SKU-${item.id_producto}`,
            price: (item.precio_venta).toString(),
            currency: "USD",
            quantity: item.cantidad
      }))
      const create_payment_json = {
            intent: "sale",
            payer: {
                  payment_method: "paypal",
            },
            redirect_urls: {
                  return_url: "http://localhost:5173/pago/success",
                  cancel_url: "http://localhost:5173/",
            },
            transactions: [
                  {
                        item_list: {
                              items: mappedItems,
                        },
                        amount: {
                              currency: "USD",
                              total: total,
                        },
                        description: "Esta es la estructura de pagos con paypal",
                  },
            ],
      };
      paypal.payment.create(create_payment_json, async function (error, payment) {
            if (error) {
                  next(error);
            } else {
                  const redirectUrl = payment.links.find(link => link.rel === "approval_url").href
                  res.status(200).json({ redirectUrl });
            }
      });
};

export const executePayment = async (req, res, next) => {
      const { id_venta } = req.params;
      const { paymentId, PayerID } = req.query;
      const execute_payment_json = {
            payer_id: PayerID,
            transactions: [
                  {
                        amount: {
                              currency: "USD",
                              total: req.query.total,
                        },
                  },
            ],
      };
      paypal.payment.execute(
            paymentId,
            execute_payment_json,
            async function (error, payment) {
                  if (error) {
                        next(error);
                  } else {
                        try {
                              await confirmarVenta("confirmado", id_venta);
                              console.log("completo");
                              res.status(200).json({ payment });
                        } catch (error) {
                              next(error)
                        }
                  }
            }
      );
};