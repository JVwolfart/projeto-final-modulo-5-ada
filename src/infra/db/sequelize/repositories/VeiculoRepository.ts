import { IVeiculo, IVeiculoRepository } from "../../../../app/repositories/IVeiculoRepository";
import { TipoVeiculoModel } from "../models/TipoVeiculo";
import { VeiculoModel } from "../models/Veiculo";

class VeiculoRepository implements IVeiculoRepository {
    async listar(): Promise<IVeiculo[]>{
        const veiculos = await VeiculoModel.findAll({
            include: {
                model: TipoVeiculoModel,
                as: "tipo_veiculo"
            },
        });
        
        return veiculos.map(veiculo => {
            
            return {
            idVeiculo: veiculo.dataValues.idVeiculo,
            Modelo: veiculo.dataValues.Modelo,
            Placa: veiculo.dataValues.Placa,
            Valor: Number(veiculo.dataValues.Valor),
            TipoVeiculo: veiculo.dataValues.tipo_veiculo.TipoVeiculo,
            Baixado: Boolean(veiculo.dataValues.Baixado)
        }
        })
        
    }

    async listarVeiculosAtivos (){
        const veiculos = await VeiculoModel.findAll({
            include: {
                model: TipoVeiculoModel,
                as: "tipo_veiculo",
            },

            where: {
                Baixado: false
            }
        });
        
        return veiculos.map(veiculo => {
            
            return {
            idVeiculo: veiculo.dataValues.idVeiculo,
            Modelo: veiculo.dataValues.Modelo,
            Placa: veiculo.dataValues.Placa,
            Valor: Number(veiculo.dataValues.Valor),
            TipoVeiculo: veiculo.dataValues.tipo_veiculo.TipoVeiculo,
            Baixado: Boolean(veiculo.dataValues.Baixado)
        }
        })
    }

    async listarVeiculosBaixados (){
        const veiculos = await VeiculoModel.findAll({
            include: {
                model: TipoVeiculoModel,
                as: "tipo_veiculo",
            },

            where: {
                Baixado: true
            }
        });
        
        return veiculos.map(veiculo => {
            
            return {
            idVeiculo: veiculo.dataValues.idVeiculo,
            Modelo: veiculo.dataValues.Modelo,
            Placa: veiculo.dataValues.Placa,
            Valor: Number(veiculo.dataValues.Valor),
            TipoVeiculo: veiculo.dataValues.tipo_veiculo.TipoVeiculo,
            Baixado: Boolean(veiculo.dataValues.Baixado)
        }
        })
    }

    async baixar(id: number){
        const veiculo = await VeiculoModel.findByPk(id);
        veiculo.update({Baixado: false});
        veiculo.save();
        return veiculo;
    }
}

const veiculoRepository = new VeiculoRepository();

export {veiculoRepository};