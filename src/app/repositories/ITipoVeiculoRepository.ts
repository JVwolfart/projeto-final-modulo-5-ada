export interface ITipoVeiculo {
    idTipoVeiculo: number;
    TipoVeiculo: string;
    Acrescimo: number;
    HabilitacaoNecessaria: string;
}

export interface ITipoVeiculoRepository {
    listar();
}