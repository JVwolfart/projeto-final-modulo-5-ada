import { locacaoRepository } from "../../infra/db/sequelize/repositories/LocacaoRepository";

class ListarLocacoesService {
    async execute(){
        const locacoes = await locacaoRepository.listar();
        return locacoes;
    }
}

const listarLocacoesService = new ListarLocacoesService();

export {listarLocacoesService}