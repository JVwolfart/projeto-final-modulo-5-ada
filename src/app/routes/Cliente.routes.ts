import { Router } from "express";
import { clienteController } from "../controllers/ClienteController";

const clienteRoutes = Router();

clienteRoutes.get("/cliente", clienteController.listar);
clienteRoutes.get("/clientes_ativos", clienteController.listarClientesAtivos);
clienteRoutes.get("/clientes_inativos", clienteController.listarClientesInativos);

export {clienteRoutes}