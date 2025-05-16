import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize";

const musica = sequelize.define('musica', {
    num_faixa: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    nome:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    
}
)

musica.sync()