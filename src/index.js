import express from "express";
import { casaRouter } from "./routes/casas.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", casaRouter);

app.listen(8080, () => {
  console.log("Servidor corriendo en el puerto 8080");
});
