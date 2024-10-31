import "dotenv/config.js"
import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import authRoutes from "./routes/authRoutes.js";

const app = express();
const PORT = process.env.PORT || 4000;
app.use(helmet());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes)




app.listen(PORT, () => {
      console.log(`Servidor conectado por el puerto ${PORT}`);
})
