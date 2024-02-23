import { clienteRepository } from "../../infra/db/sequelize/repositories/ClienteRepository"
import { locacaoRepository } from "../../infra/db/sequelize/repositories/LocacaoRepository";
import { AppError } from "../errors/AppError";

class HistoricoClienteService {
    async execute(id: number){
        const cliente = await clienteRepository.buscar(id);
        if(!cliente){
            throw new AppError("ERRO! Cliente não encontrado", 404);
        }
        const locacoes = await locacaoRepository.historico(id);
        return {locacoes, cliente};
    }
}

const historicoClienteService = new HistoricoClienteService()

export {historicoClienteService}