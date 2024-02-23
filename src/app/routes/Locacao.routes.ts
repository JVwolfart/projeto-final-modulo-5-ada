import { Router } from "express";
import { locacaoController } from "../controllers/LocacaoController";

const locacaoRoutes = Router();

locacaoRoutes.get("/locacao", locacaoController.listar);
locacaoRoutes.get("/fatura/:id", locacaoController.fatura);
locacaoRoutes.get("/historico/:id", locacaoController.historico);

export {locacaoRoutes}