import { DataTypes } from "sequelize";
import { sequelize } from "..";
import { TipoVeiculoModel } from "./TipoVeiculo";

const VeiculoModel = sequelize.define("Veiculo", {
    idVeiculo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    
    Modelo: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },

    Placa: {
        type: DataTypes.STRING(8),
        allowNull: false,
    },

    Valor: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false
    },

    TipoVeiculo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "TipoVeiculo",
            key: "idTipoVeiculo"
        }
    },

    Baixado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
},

{
    timestamps: false,
    freezeTableName: true,
}
)

VeiculoModel.hasOne(TipoVeiculoModel, {foreignKey: "idTipoVeiculo", sourceKey: "TipoVeiculo", as: "tipo_veiculo"})

export {VeiculoModel};