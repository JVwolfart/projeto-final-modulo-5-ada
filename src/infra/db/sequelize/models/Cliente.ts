import { DataTypes } from "sequelize";
import { sequelize } from "..";

const ClienteModel = sequelize.define("Cliente", {
    idCliente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    CPF: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    TipoHabilitacao: {
        type: DataTypes.ENUM("A", "B", "C", "D", "E", "AB", "AC", "AD", "AE"),
        allowNull: false
    },
    Ativo: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
},

{
    timestamps: false,
    freezeTableName: true,
}
)

export {ClienteModel};