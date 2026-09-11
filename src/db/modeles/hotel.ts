import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "./sequelize.js";

export class Hotel extends Model<
InferAttributes<Model>, InferCreationAttributes<Model>
> {

    declare id: CreationOptional<number>;
    declare name: string;
    declare address: string;
    declare location: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
    declare rating: number;
    declare ratingCount: number;

}

Hotel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: new Date()
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: new Date()
        },
        rating: {
            type: DataTypes.FLOAT,
            allowNull: null
        },
        ratingCount: {
            type: DataTypes.INTEGER,
            allowNull: null
        }
    },
    {
        tableName: 'hotels',
        sequelize: sequelize,
        underscored: true,
        timestamps:  true,
    }
);
