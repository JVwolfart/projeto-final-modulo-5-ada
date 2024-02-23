import { ICliente, IClienteRepository } from "../../../../app/repositories/IClienteRepository";
import { ClienteModel } from "../models/Cliente";

class ClienteRepository implements IClienteRepository {
    async listar(): Promise<ICliente[]> {
        const clientes = await ClienteModel.findAll();
        return clientes.map(cliente => {
            return {
                idCliente: cliente.dataValues.idCliente,
                Nome: cliente.dataValues.Nome,
                CPF: cliente.dataValues.CPF,
                TipoHabilitacao: cliente.dataValues.TipoHabilitacao,
                Ativo: Boolean(cliente.dataValues.Ativo)
            }
        })
    }

    async buscar(id: number){
        const cliente = await ClienteModel.findByPk(id);
        if(cliente){
            return {
                idCliente: cliente.dataValues.idCliente,
                Nome: cliente.dataValues.Nome,
                CPF: cliente.dataValues.CPF,
                TipoHabilitacao: cliente.dataValues.TipoHabilitacao,
                Ativo: Boolean(cliente.dataValues.Ativo)
            }
        }
        return null;
    }

    async listarClientesAtivos(): Promise<ICliente[]> {
        const clientes = await ClienteModel.findAll({
            where: {
                Ativo: true
            }
        });
        return clientes.map(cliente => {
            return {
                idCliente: cliente.dataValues.idCliente,
                Nome: cliente.dataValues.Nome,
                CPF: cliente.dataValues.CPF,
                TipoHabilitacao: cliente.dataValues.TipoHabilitacao,
                Ativo: Boolean(cliente.dataValues.Ativo)
            }
        })
    }

    async listarClientesInativos(): Promise<ICliente[]> {
        const clientes = await ClienteModel.findAll({
            where: {
                Ativo: false
            }
        });
        return clientes.map(cliente => {
            return {
                idCliente: cliente.dataValues.idCliente,
                Nome: cliente.dataValues.Nome,
                CPF: cliente.dataValues.CPF,
                TipoHabilitacao: cliente.dataValues.TipoHabilitacao,
                Ativo: Boolean(cliente.dataValues.Ativo)
            }
        })
    }
}

const clienteRepository = new ClienteRepository()

export {clienteRepository}