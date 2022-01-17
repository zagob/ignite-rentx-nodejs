import "reflect-metadata";
import cors from "cors";
import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";

import "@shared/container";
import createConnection from "@shared/infra/typeorm";

import { router } from "./routes";
import { AppError } from "@shared/errors/AppError";

import swaggerFile from "../../../swagger.json";
import upload from "@config/upload";

createConnection();
const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use("/avatar", express.static(`${upload.tmpFolder}/avatar`)); // leitura de dentro da pasta avatar
app.use("/cars", express.static(`${upload.tmpFolder}/cars`)); // leitura de dentro da pasta cars

app.use(cors());
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ message: err.message });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

export { app };
