import { Request, Response, NextFunction } from "express";
import { listarVeiculosService } from "../services/ListarVeiculosService";
import { criarTemplate } from "../helpers/TemplateHelper";
import path from "path";
import { AppError } from "../errors/AppError";
import { listarVeiculosAtivosService } from "../services/ListarVeiculosAtivosService";
import { listarVeiculosBaixadosService } from "../services/ListarVeiculosBaixadosService";

class VeiculoController {
    async listar(req: Request, res: Response, next: NextFunction){
        const veiculos = await listarVeiculosService.execute();
        res.format({
            "application/json": () => {
                res.send(veiculos);
            },

            "text/html": () => {
                const caminho = path.resolve(__dirname, "..", "views", "lista_veiculos.hbs");
                const template = criarTemplate(caminho);
                res.send(template(veiculos));
                console.log(res.getHeader("X-Response-Time"));
            }
        })
    }

    async listarVeiculosAtivos(req: Request, res: Response, next: NextFunction){
        const veiculos = await listarVeiculosAtivosService.execute();
        res.format({
            "application/json": () => {
                res.send(veiculos);
            },

            "text/html": () => {
                const caminho = path.resolve(__dirname, "..", "views", "lista_veiculos_ativos.hbs");
                const template = criarTemplate(caminho);
                res.send(template(veiculos));
                console.log(res.getHeader("X-Response-Time"));
            }
        })
    }

    async listarVeiculosBaixados(req: Request, res: Response, next: NextFunction){
        const veiculos = await listarVeiculosBaixadosService.execute();
        res.format({
            "application/json": () => {
                res.send(veiculos);
            },

            "text/html": () => {
                const caminho = path.resolve(__dirname, "..", "views", "lista_veiculos_baixados.hbs");
                const template = criarTemplate(caminho);
                res.send(template(veiculos));
                console.log(res.getHeader("X-Response-Time"));
            }
        })
    }
    
}

const veiculoController = new VeiculoController();

export {veiculoController}