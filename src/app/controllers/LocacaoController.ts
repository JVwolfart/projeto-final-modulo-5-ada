import { NextFunction, Request, Response } from "express";
import { listarLocacoesService } from "../services/ListarLocacoesService";
import { criarTemplate } from "../helpers/TemplateHelper";
import path from "path";
import { emitirFaturaService } from "../services/EmitirFaturaService";
import { AppError } from "../errors/AppError";
import { historicoClienteService } from "../services/HistoricoClienteService";

class LocacaoController {
    async listar(req: Request, res: Response, next: NextFunction){
        const locacoes = await listarLocacoesService.execute();
        res.format({
            "application/json": () => {
                res.send(locacoes);
            },

            "text/html": () => {
                const caminho = path.resolve(__dirname, "..", "views", "lista_locacoes.hbs");
                const template = criarTemplate(caminho);
                res.send(template(locacoes));
                console.log(res.getHeader("X-Response-Time"));
            }
        })
    }

    async fatura(req: Request, res: Response, next: NextFunction){
        const {id} = req.params;
        try {
            const fatura = await emitirFaturaService.execute(parseInt(id));
            res.format({
                "application/json": () => {
                    res.send(fatura);
                },
                "text/html": () => {
                    const caminho = path.resolve(__dirname, "..", "views", "fatura.hbs");
                    const template = criarTemplate(caminho);
                    res.send(template(fatura));
                    console.log(res.getHeader("X-Response-Time"));
                }
            })
        } catch (error) {
            res.format({
                "application/json": () => {
                    next(error);
                },

                "text/html": () => {
                    const caminho = path.resolve(__dirname, "..", "views", "erro.hbs");
                    const template = criarTemplate(caminho);
                    if(error instanceof AppError){
                        const e = {mensagem: error.mensagem}
                        res.send(template(e));
                    } else {
                        const e = {mensagem: "Ocorreu um erro interno no servidor"}
                        res.send(template(e));
                    }
                    console.log(res.getHeader("X-Response-Time"));
                }
            })
        }
    }

    async historico(req: Request, res: Response, next: NextFunction){
        const {id} = req.params;
        try {
            const historico = await historicoClienteService.execute(parseInt(id));
            res.format({
                "application/json": () => {
                    res.send(historico);
                },
                "text/html": () => {
                    const caminho = path.resolve(__dirname, "..", "views", "historico.hbs");
                    const template = criarTemplate(caminho);
                    res.send(template(historico));
                    console.log(res.getHeader("X-Response-Time"));
                }
            })
        } catch (error) {
            res.format({
                "application/json": () => {
                    next(error);
                },
                "text/html": () => {
                    const caminho = path.resolve(__dirname, "..", "views", "erro.hbs");
                    const template = criarTemplate(caminho);
                    if(error instanceof AppError){
                        const e = {mensagem: error.mensagem}
                        res.send(template(e));
                    } else {
                        const e = {mensagem: "Ocorreu um erro interno no servidor"}
                        res.send(template(e));
                    }
                    console.log(res.getHeader("X-Response-Time"));
                }
            })
        }
    }
}

const locacaoController = new LocacaoController();

export {locacaoController}