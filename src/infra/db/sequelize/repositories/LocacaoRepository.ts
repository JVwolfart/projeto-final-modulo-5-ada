import { ILocacao, ILocacaoRepository } from "../../../../app/repositories/ILocacaoRepository";
import { ClienteModel } from "../models/Cliente";
import { LocacaoModel } from "../models/Locacao";
import { VeiculoModel } from "../models/Veiculo";

class LocacaoRepository implements ILocacaoRepository {
    async listar(): Promise<ILocacao[]> {
        const locacoes = await LocacaoModel.findAll({
            include: [
                {model: ClienteModel, as: "Cliente"},
                {model: VeiculoModel, as: "Veiculo"}
            ]
        })
        return locacoes.map(locacao => {
            return {
                idLocacao: locacao.dataValues.idLocacao,
                NomeCliente: locacao.dataValues.Cliente.Nome,
                CPFCliente: locacao.dataValues.Cliente.CPF,
                TipoHabilitacao: locacao.dataValues.Cliente.TipoHabilitacao,
                ModeloVeiculo: locacao.dataValues.Veiculo.Modelo,
                PlacaVeiculo: locacao.dataValues.Veiculo.Placa,
                DataLocacao: locacao.dataValues.DataLocacao,
                DataPrevisaoDevolucao: locacao.dataValues.DataPrevisaoDevolucao,
                DataDevolucao: locacao.dataValues.DataDevolucao,
                Valor: Number(locacao.dataValues.Valor),
                Acrescimo: Number(locacao.dataValues.Acrescimo)
            }
        })
    }

    async buscar(id: number): Promise<ILocacao> {
        const locacao = await LocacaoModel.findByPk(id, {
            include: [
                {model: ClienteModel, as: "Cliente"},
                {model: VeiculoModel, as: "Veiculo"}
            ]
        });
        if(locacao){
            return {
                idLocacao: locacao.dataValues.idLocacao,
                NomeCliente: locacao.dataValues.Cliente.Nome,
                CPFCliente: locacao.dataValues.Cliente.CPF,
                TipoHabilitacao: locacao.dataValues.Cliente.TipoHabilitacao,
                ModeloVeiculo: locacao.dataValues.Veiculo.Modelo,
                PlacaVeiculo: locacao.dataValues.Veiculo.Placa,
                DataLocacao: locacao.dataValues.DataLocacao,
                DataPrevisaoDevolucao: locacao.dataValues.DataPrevisaoDevolucao,
                DataDevolucao: locacao.dataValues.DataDevolucao,
                Valor: Number(locacao.dataValues.Valor),
                Acrescimo: Number(locacao.dataValues.Acrescimo)
            }
        }
        return null;
    }

    async historico(id: number): Promise<ILocacao[]> {
        const locacoes = await LocacaoModel.findAll({
            include: [
                {model: ClienteModel, as: "Cliente"},
                {model: VeiculoModel, as: "Veiculo"}
            ],
            where: {
                IdCliente: id
            }
        })
        return locacoes.map(locacao => {
            return {
                idLocacao: locacao.dataValues.idLocacao,
                NomeCliente: locacao.dataValues.Cliente.Nome,
                CPFCliente: locacao.dataValues.Cliente.CPF,
                TipoHabilitacao: locacao.dataValues.Cliente.TipoHabilitacao,
                ModeloVeiculo: locacao.dataValues.Veiculo.Modelo,
                PlacaVeiculo: locacao.dataValues.Veiculo.Placa,
                DataLocacao: locacao.dataValues.DataLocacao,
                DataPrevisaoDevolucao: locacao.dataValues.DataPrevisaoDevolucao,
                DataDevolucao: locacao.dataValues.DataDevolucao,
                Valor: Number(locacao.dataValues.Valor),
                Acrescimo: Number(locacao.dataValues.Acrescimo)
            }
        })
    }
    
}

const locacaoRepository = new LocacaoRepository();

export {locacaoRepository};