import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface SectorAttributes {
    ID: number;
    SECTOR: string
}

interface SectorCreationAttributes extends Optional<SectorAttributes, 'ID'> {}

export class Sector extends Model<SectorAttributes, SectorCreationAttributes> implements SectorAttributes {
    ID!: number;
    SECTOR!: string
}

export function SectorFactory (sequelize: Sequelize): typeof Sector {
    Sector.init(
        {
            ID: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            SECTOR: {
                type: DataTypes.STRING,
                allowNull: false
            },
        },
        {
            tableName: 'sectors',
            timestamps: false,
            sequelize
        }
    );

    return Sector;
}