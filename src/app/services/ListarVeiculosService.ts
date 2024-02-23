import { veiculoRepository } from "../../infra/db/sequelize/repositories/VeiculoRepository";

class ListarVeiculosService {
    async execute(){
        const veiculos = await veiculoRepository.listar();
        return veiculos;
    }
}

const listarVeiculosService = new ListarVeiculosService();

export {listarVeiculosService};