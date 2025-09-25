import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface CommodityAttributes {
    ID: number;
    FECHA: Date
    PRODUCTO: string;
    PRECIO?: number;
    SECTOR_ID: number;

}

interface CommodityCreationAttributes extends Optional<CommodityAttributes, 'ID'> {}

export class Commodity extends Model<CommodityAttributes, CommodityCreationAttributes> implements CommodityAttributes {
    ID!: number;
    FECHA!: Date;
    PRODUCTO!: string;
    PRECIO!: number;
    SECTOR_ID!: number;
}

export function CommodityFactory (sequelize: Sequelize): typeof Commodity {
    Commodity.init(
        {
            ID: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            FECHA: {
                type: DataTypes.DATE,
                allowNull: false
            },
            PRODUCTO: {
                type: DataTypes.STRING,
                allowNull: false
            },
            PRECIO: {
                type: DataTypes.DECIMAL(10,3),
                allowNull: true
            },
            SECTOR_ID: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
        },
        {
            tableName: 'commodities',
            timestamps: false,
            sequelize
        }
    );

    return Commodity;
}