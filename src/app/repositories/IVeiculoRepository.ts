export interface IVeiculo {
    idVeiculo: number;
    Modelo: string;
    Placa: string;
    Valor: number;
    TipoVeiculo: string;
    Baixado: boolean;
}

export interface IVeiculoRepository {
    listar();
    listarVeiculosAtivos();
    listarVeiculosBaixados();
    baixar(id: number);
}