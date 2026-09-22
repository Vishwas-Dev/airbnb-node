import { CreationOptional, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "./sequelize.js";

export class Hotel extends Model<
    InferAttributes<Hotel>, InferCreationAttributes<Hotel>
> {

    declare id: CreationOptional<number>;
    declare name: string;
    declare address: string;
    declare location: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
    declare deletedAt: CreationOptional<Date | null>;
    declare rating?: number;
    declare ratingCount?: number;

}

Hotel.init(
    {
        id: {
            type: "INTEGER",
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: "STRING",
            allowNull: false
        },
        address: {
            type: "STRING",
            allowNull: false
        },
        location: {
            type: "STRING",
            allowNull: false
        },

         deletedAt: {
            type: "DATE",
            defaultValue: null
        },
        
        createdAt: {
            type: "DATE",
            defaultValue: new Date()
        },
        updatedAt: {
            type: "DATE",
            defaultValue: new Date()
        },
        rating: {
            type: "FLOAT",
            defaultValue: null
        },
        ratingCount: {
            type: "INTEGER",
            defaultValue: null
        },

       
    },
    {
        tableName: 'hotels',
        sequelize: sequelize,
        underscored: true,
        timestamps: true,
    }
);
