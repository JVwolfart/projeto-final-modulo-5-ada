import { NextFunction, Request, Response } from "express";
import { listarTiposVeiculoService } from "../services/ListarTiposVeiculoService";
import path from "path";
import { criarTemplate } from "../helpers/TemplateHelper";

class TipoVeiculoController {
    async listar(req: Request, res: Response, next: NextFunction){
        const tiposVeiculo = await listarTiposVeiculoService.execute();
        res.format({
            "application/json": () => {
                res.send(tiposVeiculo);
            },
            "text/html": () => {
                const caminho = path.resolve(__dirname, "..", "views", "lista_tipos_veiculo.hbs");
                const template = criarTemplate(caminho);
                res.send(template(tiposVeiculo));
                console.log(res.getHeader("X-Response-Time"));
            }
        })
    }
}

const tipoVeiculoController = new TipoVeiculoController();

export {tipoVeiculoController};