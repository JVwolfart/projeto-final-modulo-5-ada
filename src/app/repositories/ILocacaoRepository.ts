export interface ILocacao {
    idLocacao: number;
    NomeCliente: string;
    CPFCliente: string;
    TipoHabilitacao: string;
    ModeloVeiculo: string;
    PlacaVeiculo: string;
    DataLocacao: string;
    DataPrevisaoDevolucao: string;
    DataDevolucao: string | null;
    Valor: number | null;
    Acrescimo: number | null;
}

export interface ILocacaoRepository {
    listar();
    buscar(id: number);
    historico(id: number);
}