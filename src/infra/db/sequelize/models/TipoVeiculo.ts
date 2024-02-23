import { DataTypes } from "sequelize";
import { sequelize } from "..";

const TipoVeiculoModel = sequelize.define("TipoVeiculo", {
    idTipoVeiculo: {
        field: "idTipoVeiculo",
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    TipoVeiculo: {
        field: "TipoVeiculo",
        type: DataTypes.STRING,
        allowNull: false
    },
    Acrescimo: {
        field: "Acrescimo",
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false
    },
    HabilitacaoNecessaria: {
        field: "HabilitacaoNecessaria",
        type: DataTypes.ENUM("A", "B", "C", "D", "E"),
        allowNull: false
    }
},

{
    timestamps: false,
    freezeTableName: true,
}
);

export {TipoVeiculoModel};