import { veiculoRepository } from "../../infra/db/sequelize/repositories/VeiculoRepository";

class ListarVeiculosAtivosService {
    async execute(){
        const veiculos = await veiculoRepository.listarVeiculosAtivos();
        return veiculos;
    }
}

const listarVeiculosAtivosService = new ListarVeiculosAtivosService();

export {listarVeiculosAtivosService};