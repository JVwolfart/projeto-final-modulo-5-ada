import { locacaoRepository } from "../../infra/db/sequelize/repositories/LocacaoRepository";
import { AppError } from "../errors/AppError";
import { calculaNDias, calculaNHoras } from "../utils";

class EmitirFaturaService {
    async execute(id: number){
        const locacao = await locacaoRepository.buscar(id);
        if(!locacao){
            throw new AppError("ERRO! Locação não encontrada", 404);
        }
        if(!locacao.DataDevolucao){
            throw new AppError("ERRO! Essa locação ainda não foi devolvida, portanto, não é possível emitir a fatura");
        }
        const nDias = calculaNDias(locacao.DataLocacao, locacao.DataDevolucao);
        const nHoras = calculaNHoras(locacao.DataLocacao, locacao.DataDevolucao);
        const horas = nHoras - (nDias*24);
        const subTotal = locacao.Valor*nHoras;
        const totAcrescimo = subTotal*(locacao.Acrescimo / 100);
        const total = subTotal + totAcrescimo;
        const fatura = {
            id: locacao.idLocacao,
            dataLocacao: locacao.DataLocacao,
            dataDevolucao: locacao.DataDevolucao,
            nDias: nDias,
            nHoras: horas,
            totHoras: nHoras,
            veiculo: locacao.ModeloVeiculo,
            placa: locacao.PlacaVeiculo,
            cliente: locacao.NomeCliente,
            cpf: locacao.CPFCliente,
            tipoHabilitacao: locacao.TipoHabilitacao,
            valorHora: locacao.Valor,
            subTotal: subTotal,
            acrescimo: locacao.Acrescimo,
            totAcrescimo: totAcrescimo,
            totalFatura: total
        }
        return fatura;
    }
}

const emitirFaturaService = new EmitirFaturaService();

export {emitirFaturaService};