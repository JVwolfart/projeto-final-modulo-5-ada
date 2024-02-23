import { Router } from "express";
import { tipoVeiculoController } from "../controllers/TipoVeiculoController";

const tipoVeiculoRoutes = Router();

tipoVeiculoRoutes.get("/tipo_veiculo", tipoVeiculoController.listar);

export {tipoVeiculoRoutes}