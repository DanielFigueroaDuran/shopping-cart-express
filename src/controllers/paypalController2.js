import paypal from "../config/paypal.js";
import { confirmSales } from "../models/salesModel.js";

export const createPayment = (req, res, next) => {
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
                  // const redirectUrl = payment.links.find(link => link.rel === "approval_url").href
                  // res.status(200).json({ redirectUrl });
                  res.status(200).json({ payment });

            }
      });
};

export const executePayment = async (req, res, next) => {
      const { idSales } = req.params;
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
                              await confirmSales("confirmado", idSales);
                              console.log("completo", idSales);
                              res.status(200).json({ payment });
                        } catch (error) {
                              next(error)
                        }
                  }
            }
      );


};