export interface ICliente {
    idCliente: number;
    Nome: string;
    CPF: string;
    TipoHabilitacao: string;
    Ativo: boolean;
}

export interface IClienteRepository {
    listar();
    buscar(id: number);
    listarClientesAtivos();
    listarClientesInativos();
}