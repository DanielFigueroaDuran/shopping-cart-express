import "dotenv/config.js"
import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import { errorHandler } from "./middleware/errorHandler.js";
import authRoutes from "./routes/authRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
//import paypalNewRoutes from "./routes/paypalNewRoutes.js";
import productRoutes from "./routes/productRoutes.js";
// import supabaseRoutes from "./routes/supabaseRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";

const app = express();
const PORT = process.env.PORT || 4000;


app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(bodyParser.json());
app.use(errorHandler);//controller Handler

app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/payment', paymentRoutes);
//app.use('/api/paypal/', paypalNewRoutes);
app.use('/api/products', productRoutes);
app.use('/api/users', usersRoutes);

app.listen(PORT, () => {
      console.log(`Servidor conectado por el puerto ${PORT}`);
});
