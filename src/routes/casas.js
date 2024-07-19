import { Router } from "express";
import {
  getCasaController,
  createCasaController,
  deleteCasaController,
  upDateCasaController,
} from "../controllers/casas.js";
const casaRouter = Router();

casaRouter.get("/", getCasaController);
casaRouter.post("/", createCasaController);
casaRouter.delete("/:id", deleteCasaController);
casaRouter.put("/:id", upDateCasaController);

export { casaRouter };
