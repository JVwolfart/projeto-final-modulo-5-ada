import { veiculoRepository } from "../../infra/db/sequelize/repositories/VeiculoRepository";

class ListarVeiculosBaixadosService {
    async execute(){
        const veiculos = await veiculoRepository.listarVeiculosBaixados();
        return veiculos;
    }
}

const listarVeiculosBaixadosService = new ListarVeiculosBaixadosService();

export {listarVeiculosBaixadosService};