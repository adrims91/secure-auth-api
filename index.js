import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from 'swagger-ui-express'
import rateLimit from "express-rate-limit";
import dotenv from 'dotenv'
dotenv.config();
import { dbConnection } from "./server.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { userRouter } from "./routes/userRoutes.js";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API',
    version: '1.0.0'
  },
}

const options = {
  swaggerDefinition,
  apis: ['./swagger/*.js']
}

const swaggerSpec = swaggerJSDoc(options);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: 'draft-8',
  legacyHeaders: false
})
const app = express();
dbConnection(process.env.MONGO_URI);

app.use(limiter)
app.use(express.json());
app.use(morgan("dev"))
app.use(compression())
app.use(helmet())



app.use("/auth" , userRouter)

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use(errorHandler)


app.listen(process.env.PORT || 5000, () => {
  console.log("Servidor conectado");
});
