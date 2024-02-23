import { DataTypes } from "sequelize";
import { sequelize } from "..";
import { ClienteModel } from "./Cliente";
import { VeiculoModel } from "./Veiculo";

const LocacaoModel = sequelize.define("Locacao", {
    idLocacao: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    IdCliente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Cliente",
            key: "idCliente"
        }
    },
    
    IdVeiculo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Veiculo",
            key: "idVeiculo"
        }
    },

    DataLocacao: {
        type: DataTypes.DATE,
        allowNull: false
    },

    DataPrevisaoDevolucao: {
        type: DataTypes.DATE,
        allowNull: false
    },

    DataDevolucao: {
        type: DataTypes.DATE,
        allowNull: true
    },

    Valor: {
        type: DataTypes.DECIMAL(8, 2),
        allowNull: true
    },

    Acrescimo: {
        type: DataTypes.DECIMAL(8, 2),
        allowNull: true
    }

},

{
    timestamps: false,
    freezeTableName: true,
}
)

LocacaoModel.hasOne(ClienteModel, {foreignKey: "idCliente", sourceKey: "IdCliente"});
LocacaoModel.hasOne(VeiculoModel, {foreignKey: "idVeiculo", sourceKey: "IdVeiculo"});

export {LocacaoModel}