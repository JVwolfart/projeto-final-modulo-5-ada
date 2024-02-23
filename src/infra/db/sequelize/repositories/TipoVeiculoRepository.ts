import { ITipoVeiculo, ITipoVeiculoRepository } from "../../../../app/repositories/ITipoVeiculoRepository";
import { TipoVeiculoModel } from "../models/TipoVeiculo";

class TipoVeiculoRepository implements ITipoVeiculoRepository {
    async listar(): Promise<ITipoVeiculo[]>{
        const tiposVeiculo = await TipoVeiculoModel.findAll();
        return tiposVeiculo.map(tipoVeiculo => {
            return {
                idTipoVeiculo: tipoVeiculo.dataValues.idTipoVeiculo,
                TipoVeiculo: tipoVeiculo.dataValues.TipoVeiculo,
                Acrescimo: tipoVeiculo.dataValues.Acrescimo,
                HabilitacaoNecessaria: tipoVeiculo.dataValues.HabilitacaoNecessaria
            }
        })
    }
}

const tipoVeiculoRepository = new TipoVeiculoRepository();

export {tipoVeiculoRepository};