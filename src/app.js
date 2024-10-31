import "dotenv/config.js"
import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
// import cartRoutes from "./routes/cartRoutes.js";
// import paymentRoutes from "./routes/paymentRoutes.js";
// import productRoutes from "./routes/productRoutes.js";
// import supabaseRoutes from "./routes/supabaseRoutes.js";

const app = express();
const PORT = process.env.PORT || 4000;


app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
// app.use('/api/cart/', cartRoutes);
// app.use('/api/payment/', paymentRoutes);
// app.use('/api/product/', productRoutes);

app.listen(PORT, () => {
      console.log(`Servidor conectado por el puerto ${PORT}`);
});
