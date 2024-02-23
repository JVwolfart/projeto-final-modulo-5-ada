import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { routes } from "./app/routes";
import morgan from "morgan";
import helmet from "helmet";
import responseTime from "response-time";
import lowerCasePaths from "express-lowercase-paths";
import cors from "cors"
import favicon from "serve-favicon";
import path from "path";

const app = express();

app.use(favicon(path.resolve(__dirname, "public", "logo_rentacar.jpg")));
app.use(morgan("tiny"));
app.use(helmet());
app.use(responseTime());
app.use(lowerCasePaths());
app.use(cors({
    origin: ["http://127.0.0.1:5500", "http://localhost:5500"]
}))

app.use(routes);

app.listen(Number(process.env.PORT), () => {
    console.log("Servidor iniciado...");
});