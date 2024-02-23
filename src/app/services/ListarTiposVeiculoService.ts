import { tipoVeiculoRepository } from "../../infra/db/sequelize/repositories/TipoVeiculoRepository";

class ListarTiposVeiculoService {
    async execute(){
        const tiposVeiculo = await tipoVeiculoRepository.listar();
        return tiposVeiculo;
    }
}

const listarTiposVeiculoService = new ListarTiposVeiculoService();

export {listarTiposVeiculoService};