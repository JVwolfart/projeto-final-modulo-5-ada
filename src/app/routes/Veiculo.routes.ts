import { Router } from "express";
import { veiculoController } from "../controllers/VeiculoController";

const veiculoRoutes = Router();

veiculoRoutes.get("/veiculo", veiculoController.listar);
veiculoRoutes.get("/veiculos_ativos", veiculoController.listarVeiculosAtivos);
veiculoRoutes.get("/veiculos_baixados", veiculoController.listarVeiculosBaixados);

export {veiculoRoutes}