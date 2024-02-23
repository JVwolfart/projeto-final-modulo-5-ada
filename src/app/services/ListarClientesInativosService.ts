import { clienteRepository } from "../../infra/db/sequelize/repositories/ClienteRepository";

class ListarClientesInativosService {
    async execute(){
        const clientes = await clienteRepository.listarClientesInativos();
        return clientes;
    }
}

const listarClientesInativosService = new ListarClientesInativosService();

export {listarClientesInativosService}