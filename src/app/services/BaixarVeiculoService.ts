import { veiculoRepository } from "../../infra/db/sequelize/repositories/VeiculoRepository";
import { AppError } from "../errors/AppError";

class BaixarVeiculoService {
    async execute(id: number){
        const veiculo = await veiculoRepository.baixar(id);
        if(!veiculo){
            throw new AppError("ERRO! Veículo não encontrado!", 404);
        }
        return veiculo;
    }
}

const baixarVeiculoService = new BaixarVeiculoService();
export {baixarVeiculoService}