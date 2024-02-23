import { NextFunction, Request, Response } from "express";
import { listarClientesService } from "../services/ListarClientesService";
import path from "path";
import { criarTemplate } from "../helpers/TemplateHelper";
import { listarClientesAtivosService } from "../services/ListarClientesAtivosService";
import { listarClientesInativosService } from "../services/ListarClientesInativosService";

class ClienteController {
    async listar(req: Request, res: Response, next: NextFunction){
        const clientes = await listarClientesService.execute();
        res.format({
            "application/json": () => {
                res.send(clientes);
            },
            
            "text/html": () => {
                const caminho = path.resolve(__dirname, "..", "views", "lista_clientes.hbs");
                const template = criarTemplate(caminho);
                res.send(template(clientes));
                console.log(res.getHeader("X-Response-Time"));
            }
        })
    }

    async listarClientesAtivos(req: Request, res: Response, next: NextFunction){
        const clientes = await listarClientesAtivosService.execute();
        res.format({
            "application/json": () => {
                res.send(clientes);
            },
            
            "text/html": () => {
                const caminho = path.resolve(__dirname, "..", "views", "lista_clientes_ativos.hbs");
                const template = criarTemplate(caminho);
                res.send(template(clientes));
                console.log(res.getHeader("X-Response-Time"));
            }
        })
    }

    async listarClientesInativos(req: Request, res: Response, next: NextFunction){
        const clientes = await listarClientesInativosService.execute();
        res.format({
            "application/json": () => {
                res.send(clientes);
            },
            
            "text/html": () => {
                const caminho = path.resolve(__dirname, "..", "views", "lista_clientes_inativos.hbs");
                const template = criarTemplate(caminho);
                res.send(template(clientes));
                console.log(res.getHeader("X-Response-Time"));
            }
        })
    }
}

const clienteController = new ClienteController();

export {clienteController}