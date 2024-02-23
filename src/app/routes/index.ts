import { Request, Response, Router } from "express";
import { tipoVeiculoRoutes } from "./TipoVeiculo.routes";
import { veiculoRoutes } from "./Veiculo.routes";
import { clienteRoutes } from "./Cliente.routes";
import { locacaoRoutes } from "./Locacao.routes";
import { requestDateMiddleware } from "../middlewares/RequestDateMiddleware";
import { errorHandlerMiddleware } from "../middlewares/ErrorHandlerMiddleware";
import path from "path";
import { criarTemplate } from "../helpers/TemplateHelper";

const routes = Router();

routes.use(requestDateMiddleware.execute);

routes.get("/", (req: Request, res: Response) => {
    res.format({
        "text/html": () => {
            const caminho = path.resolve(__dirname, "..", "views", "index.hbs");
            const template = criarTemplate(caminho);
            res.send(template({}));
            console.log(res.getHeader("X-Response-Time"));
        }
    })
})

routes.use(tipoVeiculoRoutes);
routes.use(veiculoRoutes);
routes.use(clienteRoutes);
routes.use(locacaoRoutes);

routes.use(errorHandlerMiddleware.execute);

export {routes};