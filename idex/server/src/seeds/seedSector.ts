import { Sector } from "../models/index.js";

export const seedSector = async () => {
    await Sector.bulkCreate([
    {SECTOR: "Energía"},
    {SECTOR: "Transporte"},
    {SECTOR: "Ingredientes"},
    {SECTOR: "Materia Prima"},
    {SECTOR: "Macroeconómicos"},
    {SECTOR: "Divisas"}
], { individualHooks: true })
}