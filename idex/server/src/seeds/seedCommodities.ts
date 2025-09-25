import { Commodity } from "../models/index.js";

export const seedCommodities = async () => {
    await Commodity.bulkCreate([
    {
        ID: 225,
        FECHA: new Date("2024-05-28"),
        PRODUCTO: "Energia Electrica MEX - ($MXN/kwh) - TARIFA DAC",
        PRECIO: 5.048,
        SECTOR_ID: 1
    },
    {
        ID: 226,
        FECHA: new Date("2024-06-28"),
        PRODUCTO: "Energia Electrica MEX - ($MXN/kwh) - TARIFA DAC",
        PRECIO: 5.074,
        SECTOR_ID: 1
    },
    {
        ID: 227,
        FECHA: new Date("2024-07-28"),
        PRODUCTO: "Energia Electrica MEX - ($MXN/kwh) - TARIFA DAC",
        PRECIO: 5.310,
        SECTOR_ID: 1
    },
    {
        ID: 228,
        FECHA: new Date("2024-08-28"),
        PRODUCTO: "Energia Electrica MEX - ($MXN/kwh) - TARIFA DAC",
        PRECIO: 5.547,
        SECTOR_ID: 1
    },
    {
        ID: 229,
        FECHA: new Date("2024-09-28"),
        PRODUCTO: "Energia Electrica MEX - ($MXN/kwh) - TARIFA DAC",
        PRECIO: 5.355,
        SECTOR_ID: 1
    },
    {
        ID: 230,
        FECHA: new Date("2024-10-28"),
        PRODUCTO: "Energia Electrica MEX - ($MXN/kwh) - TARIFA DAC",
        PRECIO: 5.369,
        SECTOR_ID: 1
    },
    {
        ID: 231,
        FECHA: new Date("2024-11-28"),
        PRODUCTO: "Energia Electrica MEX - ($MXN/kwh) - TARIFA DAC",
        PRECIO: 5.739,
        SECTOR_ID: 1
    },
    {
        ID: 232,
        FECHA: new Date("2024-12-28"),
        PRODUCTO: "Energia Electrica MEX - ($MXN/kwh) - TARIFA DAC",
        PRECIO: 5.647,
        SECTOR_ID: 1
    },
    {
        ID: 233,
        FECHA: new Date("2025-01-28"),
        PRODUCTO: "Energia Electrica MEX - ($MXN/kwh) - TARIFA DAC",
        PRECIO: 6.052,
        SECTOR_ID: 1
    },
    {
        ID: 234,
        FECHA: new Date("2025-02-28"),
        PRODUCTO: "Energia Electrica MEX - ($MXN/kwh) - TARIFA DAC",
        PRECIO: 6.206,
        SECTOR_ID: 1
    },
    {
        ID: 235,
        FECHA: new Date("2025-03-28"),
        PRODUCTO: "Energia Electrica MEX - ($MXN/kwh) - TARIFA DAC",
        PRECIO: 6.182,
        SECTOR_ID: 1
    },
    {
        ID: 236,
        FECHA: new Date("2025-04-28"),
        PRODUCTO: "Energia Electrica MEX - ($MXN/kwh) - TARIFA DAC",
        PRECIO: 6.127,
        SECTOR_ID: 1
    },
    {
        ID: 237,
        FECHA: new Date("2025-05-28"),
        PRODUCTO: "Energia Electrica MEX - ($MXN/kwh) - TARIFA DAC",
        PRECIO: 6.152,
        SECTOR_ID: 1
    },
    {
        ID: 238,
        FECHA: new Date("2025-06-28"),
        PRODUCTO: "Energia Electrica MEX - ($MXN/kwh) - TARIFA DAC",
        PRECIO: 5.928,
        SECTOR_ID: 1
    },
    {
        ID: 239,
        FECHA: new Date("2024-05-28"),
        PRODUCTO: "Gas Natural MEX",
        PRECIO: 1.350,
        SECTOR_ID: 1
    },
    {
        ID: 240,
        FECHA: new Date("2024-06-28"),
        PRODUCTO: "Gas Natural MEX",
        PRECIO: 2.210,
        SECTOR_ID: 1
    },
    {
        ID: 241,
        FECHA: new Date("2024-07-28"),
        PRODUCTO: "Gas Natural MEX",
        PRECIO: 2.330,
        SECTOR_ID: 1
    },
    {
        ID: 242,
        FECHA: new Date("2024-08-28"),
        PRODUCTO: "Gas Natural MEX",
        PRECIO: 1.570,
        SECTOR_ID: 1
    },
    {
        ID: 243,
        FECHA: new Date("2024-09-28"),
        PRODUCTO: "Gas Natural MEX",
        PRECIO: 1.640,
        SECTOR_ID: 1
    },
    {
        ID: 244,
        FECHA: new Date("2024-10-28"),
        PRODUCTO: "Gas Natural MEX",
        PRECIO: 2.270,
        SECTOR_ID: 1
    },
    {
        ID: 245,
        FECHA: new Date("2024-11-28"),
        PRODUCTO: "Gas Natural MEX",
        PRECIO: 1.910,
        SECTOR_ID: 1
    },
    {
        ID: 246,
        FECHA: new Date("2024-12-28"),
        PRODUCTO: "Gas Natural MEX",
        PRECIO: 3.270,
        SECTOR_ID: 1
    },
    {
        ID: 247,
        FECHA: new Date("2025-01-28"),
        PRODUCTO: "Gas Natural MEX",
        PRECIO: 3.550,
        SECTOR_ID: 1
    },
    {
        ID: 248,
        FECHA: new Date("2025-02-28"),
        PRODUCTO: "Gas Natural MEX",
        PRECIO: 3.280,
        SECTOR_ID: 1
    },
    {
        ID: 249,
        FECHA: new Date("2025-03-28"),
        PRODUCTO: "Gas Natural MEX",
        PRECIO: 3.150,
        SECTOR_ID: 1
    },
    {
        ID: 250,
        FECHA: new Date("2025-04-28"),
        PRODUCTO: "Gas Natural MEX",
        PRECIO: 3.400,
        SECTOR_ID: 1
    },
    {
        ID: 251,
        FECHA: new Date("2025-05-28"),
        PRODUCTO: "Gas Natural MEX",
        PRECIO: 2.740,
        SECTOR_ID: 1
    },
    {
        ID: 252,
        FECHA: new Date("2025-06-28"),
        PRODUCTO: "Gas Natural MEX",
        PRECIO: 2.880,
        SECTOR_ID: 1
    },
    {
        ID: 253,
        FECHA: new Date("2024-05-28"),
        PRODUCTO: "Petroleo (Brent) - ($USD/bbl)",
        PRECIO: 81.995,
        SECTOR_ID: 1
    },
    {
        ID: 254,
        FECHA: new Date("2024-06-28"),
        PRODUCTO: "Petroleo (Brent) - ($USD/bbl)",
        PRECIO: 82.555,
        SECTOR_ID: 1
    },
    {
        ID: 255,
        FECHA: new Date("2024-07-28"),
        PRODUCTO: "Petroleo (Brent) - ($USD/bbl)",
        PRECIO: 85.296,
        SECTOR_ID: 1
    },
    {
        ID: 256,
        FECHA: new Date("2024-08-28"),
        PRODUCTO: "Petroleo (Brent) - ($USD/bbl)",
        PRECIO: 80.863,
        SECTOR_ID: 1
    },
    {
        ID: 257,
        FECHA: new Date("2024-09-28"),
        PRODUCTO: "Petroleo (Brent) - ($USD/bbl)",
        PRECIO: 74.293,
        SECTOR_ID: 1
    },
    {
        ID: 258,
        FECHA: new Date("2024-10-28"),
        PRODUCTO: "Petroleo (Brent) - ($USD/bbl)",
        PRECIO: 75.662,
        SECTOR_ID: 1
    },
    {
        ID: 259,
        FECHA: new Date("2024-11-28"),
        PRODUCTO: "Petroleo (Brent) - ($USD/bbl)",
        PRECIO: 74.395,
        SECTOR_ID: 1
    },
    {
        ID: 260,
        FECHA: new Date("2024-12-28"),
        PRODUCTO: "Petroleo (Brent) - ($USD/bbl)",
        PRECIO: 73.833,
        SECTOR_ID: 1
    },
    {
        ID: 261,
        FECHA: new Date("2025-01-28"),
        PRODUCTO: "Petroleo (Brent) - ($USD/bbl)",
        PRECIO: 79.206,
        SECTOR_ID: 1
    },
    {
        ID: 262,
        FECHA: new Date("2025-02-28"),
        PRODUCTO: "Petroleo (Brent) - ($USD/bbl)",
        PRECIO: 75.157,
        SECTOR_ID: 1
    },
    {
        ID: 263,
        FECHA: new Date("2025-03-28"),
        PRODUCTO: "Petroleo (Brent) - ($USD/bbl)",
        PRECIO: 72.574,
        SECTOR_ID: 1
    },
    {
        ID: 264,
        FECHA: new Date("2025-04-28"),
        PRODUCTO: "Petroleo (Brent) - ($USD/bbl)",
        PRECIO: 67.745,
        SECTOR_ID: 1
    },
    {
        ID: 265,
        FECHA: new Date("2025-05-28"),
        PRODUCTO: "Petroleo (Brent) - ($USD/bbl)",
        PRECIO: 62.780,
        SECTOR_ID: 1
    },
    {
        ID: 266,
        FECHA: new Date("2025-06-28"),
        PRODUCTO: "Petroleo (Brent) - ($USD/bbl)",
        PRECIO: 66.740,
        SECTOR_ID: 1
    },
    {
        ID: 267,
        FECHA: new Date("2024-05-28"),
        PRODUCTO: "Diesel US - USD per Gallon",
        PRECIO: 3.822,
        SECTOR_ID: 2
    },
    {
        ID: 268,
        FECHA: new Date("2024-06-28"),
        PRODUCTO: "Diesel US - USD per Gallon",
        PRECIO: 3.722,
        SECTOR_ID: 2
    },
    {
        ID: 269,
        FECHA: new Date("2024-07-28"),
        PRODUCTO: "Diesel US - USD per Gallon",
        PRECIO: 3.810,
        SECTOR_ID: 2
    },
    {
        ID: 270,
        FECHA: new Date("2024-08-28"),
        PRODUCTO: "Diesel US - USD per Gallon",
        PRECIO: 3.700,
        SECTOR_ID: 2
    },
    {
        ID: 271,
        FECHA: new Date("2024-09-28"),
        PRODUCTO: "Diesel US - USD per Gallon",
        PRECIO: 3.558,
        SECTOR_ID: 2
    },
    {
        ID: 272,
        FECHA: new Date("2024-10-28"),
        PRODUCTO: "Diesel US - USD per Gallon",
        PRECIO: 3.585,
        SECTOR_ID: 2
    },
    {
        ID: 273,
        FECHA: new Date("2024-11-28"),
        PRODUCTO: "Diesel US - USD per Gallon",
        PRECIO: 3.522,
        SECTOR_ID: 2
    },
    {
        ID: 274,
        FECHA: new Date("2024-12-28"),
        PRODUCTO: "Diesel US - USD per Gallon",
        PRECIO: 3.494,
        SECTOR_ID: 2
    },
    {
        ID: 275,
        FECHA: new Date("2025-01-28"),
        PRODUCTO: "Diesel US - USD per Gallon",
        PRECIO: 3.634,
        SECTOR_ID: 2
    },
    {
        ID: 276,
        FECHA: new Date("2025-02-28"),
        PRODUCTO: "Diesel US - USD per Gallon",
        PRECIO: 3.675,
        SECTOR_ID: 2
    },
    {
        ID: 277,
        FECHA: new Date("2025-03-28"),
        PRODUCTO: "Diesel US - USD per Gallon",
        PRECIO: 3.585,
        SECTOR_ID: 2
    },
    {
        ID: 278,
        FECHA: new Date("2025-04-28"),
        PRODUCTO: "Diesel US - USD per Gallon",
        PRECIO: 3.567,
        SECTOR_ID: 2
    },
    {
        ID: 279,
        FECHA: new Date("2025-05-28"),
        PRODUCTO: "Diesel US - USD per Gallon",
        PRECIO: 3.499,
        SECTOR_ID: 2
    },
    {
        ID: 280,
        FECHA: new Date("2025-06-28"),
        PRODUCTO: "Diesel US - USD per Gallon",
        PRECIO: 3.599,
        SECTOR_ID: 2
    },
    {
        ID: 281,
        FECHA: new Date("2024-05-28"),
        PRODUCTO: "Pulp and Paper (Index) Unbleached Kraft",
        PRECIO: 205.470,
        SECTOR_ID: 4
    },
    {
        ID: 282,
        FECHA: new Date("2024-06-28"),
        PRODUCTO: "Pulp and Paper (Index) Unbleached Kraft",
        PRECIO: 207.067,
        SECTOR_ID: 4
    },
    {
        ID: 283,
        FECHA: new Date("2024-07-28"),
        PRODUCTO: "Pulp and Paper (Index) Unbleached Kraft",
        PRECIO: 208.859,
        SECTOR_ID: 4
    },
    {
        ID: 284,
        FECHA: new Date("2024-08-28"),
        PRODUCTO: "Pulp and Paper (Index) Unbleached Kraft",
        PRECIO: 213.389,
        SECTOR_ID: 4
    },
    {
        ID: 285,
        FECHA: new Date("2024-09-28"),
        PRODUCTO: "Pulp and Paper (Index) Unbleached Kraft",
        PRECIO: 213.740,
        SECTOR_ID: 4
    },
    {
        ID: 286,
        FECHA: new Date("2024-10-28"),
        PRODUCTO: "Pulp and Paper (Index) Unbleached Kraft",
        PRECIO: 216.603,
        SECTOR_ID: 4
    },
    {
        ID: 287,
        FECHA: new Date("2024-11-28"),
        PRODUCTO: "Pulp and Paper (Index) Unbleached Kraft",
        PRECIO: 217.400,
        SECTOR_ID: 4
    },
    {
        ID: 288,
        FECHA: new Date("2024-12-28"),
        PRODUCTO: "Pulp and Paper (Index) Unbleached Kraft",
        PRECIO: 215.220,
        SECTOR_ID: 4
    },
    {
        ID: 289,
        FECHA: new Date("2025-01-28"),
        PRODUCTO: "Pulp and Paper (Index) Unbleached Kraft",
        PRECIO: 217.236,
        SECTOR_ID: 4
    },
    {
        ID: 290,
        FECHA: new Date("2025-02-28"),
        PRODUCTO: "Pulp and Paper (Index) Unbleached Kraft",
        PRECIO: 217.432,
        SECTOR_ID: 4
    },
    {
        ID: 291,
        FECHA: new Date("2025-03-28"),
        PRODUCTO: "Pulp and Paper (Index) Unbleached Kraft",
        PRECIO: 219.987,
        SECTOR_ID: 4
    },
    {
        ID: 292,
        FECHA: new Date("2025-04-28"),
        PRODUCTO: "Pulp and Paper (Index) Unbleached Kraft",
        PRECIO: 222.062,
        SECTOR_ID: 4
    },
    {
        ID: 293,
        FECHA: new Date("2025-05-28"),
        PRODUCTO: "Pulp and Paper (Index) Unbleached Kraft",
        PRECIO: 221.978,
        SECTOR_ID: 4
    },
    {
        ID: 294,
        FECHA: new Date("2025-06-28"),
        PRODUCTO: "Pulp and Paper (Index) Unbleached Kraft",
        PRECIO: 224.371,
        SECTOR_ID: 4
    },
    {
        ID: 295,
        FECHA: new Date("2024-05-28"),
        PRODUCTO: "Polietileno (HDPE) - ($USD/KG) - USA",
        PRECIO: 1.080,
        SECTOR_ID: 4
    },
    {
        ID: 296,
        FECHA: new Date("2024-06-28"),
        PRODUCTO: "Polietileno (HDPE) - ($USD/KG) - USA",
        PRECIO: 1.070,
        SECTOR_ID: 4
    },
    {
        ID: 297,
        FECHA: new Date("2024-07-28"),
        PRODUCTO: "Polietileno (HDPE) - ($USD/KG) - USA",
        PRECIO: 1.070,
        SECTOR_ID: 4
    },
    {
        ID: 298,
        FECHA: new Date("2024-08-28"),
        PRODUCTO: "Polietileno (HDPE) - ($USD/KG) - USA",
        PRECIO: 1.080,
        SECTOR_ID: 4
    },
    {
        ID: 299,
        FECHA: new Date("2024-09-28"),
        PRODUCTO: "Polietileno (HDPE) - ($USD/KG) - USA",
        PRECIO: 1.090,
        SECTOR_ID: 4
    },
    {
        ID: 300,
        FECHA: new Date("2024-10-28"),
        PRODUCTO: "Polietileno (HDPE) - ($USD/KG) - USA",
        PRECIO: 1.080,
        SECTOR_ID: 4
    },
    {
        ID: 301,
        FECHA: new Date("2024-11-28"),
        PRODUCTO: "Polietileno (HDPE) - ($USD/KG) - USA",
        PRECIO: 1.020,
        SECTOR_ID: 4
    },
    {
        ID: 302,
        FECHA: new Date("2024-12-28"),
        PRODUCTO: "Polietileno (HDPE) - ($USD/KG) - USA",
        PRECIO: 0.990,
        SECTOR_ID: 4
    },
    {
        ID: 303,
        FECHA: new Date("2025-01-28"),
        PRODUCTO: "Polietileno (HDPE) - ($USD/KG) - USA",
        PRECIO: 0.990,
        SECTOR_ID: 4
    },
    {
        ID: 304,
        FECHA: new Date("2025-02-28"),
        PRODUCTO: "Polietileno (HDPE) - ($USD/KG) - USA",
        PRECIO: 1.020,
        SECTOR_ID: 4
    },
    {
        ID: 305,
        FECHA: new Date("2025-03-28"),
        PRODUCTO: "Polietileno (HDPE) - ($USD/KG) - USA",
        PRECIO: 1.020,
        SECTOR_ID: 4
    },
    {
        ID: 306,
        FECHA: new Date("2025-04-28"),
        PRODUCTO: "Polietileno (HDPE) - ($USD/KG) - USA",
        PRECIO: 1.020,
        SECTOR_ID: 4
    },
    {
        ID: 307,
        FECHA: new Date("2025-05-28"),
        PRODUCTO: "Polietileno (HDPE) - ($USD/KG) - USA",
        PRECIO: 1.020,
        SECTOR_ID: 4
    },
    {
        ID: 308,
        FECHA: new Date("2025-06-28"),
        PRODUCTO: "Polietileno (HDPE) - ($USD/KG) - USA",
        PRECIO: 1.010,
        SECTOR_ID: 4
    },
    {
        ID: 309,
        FECHA: new Date("2024-05-28"),
        PRODUCTO: "Polipropileno (LDPE) - ($USD/KG)",
        PRECIO: 1.290,
        SECTOR_ID: 4
    },
    {
        ID: 310,
        FECHA: new Date("2024-06-28"),
        PRODUCTO: "Polipropileno (LDPE) - ($USD/KG)",
        PRECIO: 1.280,
        SECTOR_ID: 4
    },
    {
        ID: 311,
        FECHA: new Date("2024-07-28"),
        PRODUCTO: "Polipropileno (LDPE) - ($USD/KG)",
        PRECIO: 1.260,
        SECTOR_ID: 4
    },
    {
        ID: 312,
        FECHA: new Date("2024-08-28"),
        PRODUCTO: "Polipropileno (LDPE) - ($USD/KG)",
        PRECIO: 1.290,
        SECTOR_ID: 4
    },
    {
        ID: 313,
        FECHA: new Date("2024-09-28"),
        PRODUCTO: "Polipropileno (LDPE) - ($USD/KG)",
        PRECIO: 1.320,
        SECTOR_ID: 4
    },
    {
        ID: 314,
        FECHA: new Date("2024-10-28"),
        PRODUCTO: "Polipropileno (LDPE) - ($USD/KG)",
        PRECIO: 1.330,
        SECTOR_ID: 4
    },
    {
        ID: 315,
        FECHA: new Date("2024-11-28"),
        PRODUCTO: "Polipropileno (LDPE) - ($USD/KG)",
        PRECIO: 1.300,
        SECTOR_ID: 4
    },
    {
        ID: 316,
        FECHA: new Date("2024-12-28"),
        PRODUCTO: "Polipropileno (LDPE) - ($USD/KG)",
        PRECIO: 1.240,
        SECTOR_ID: 4
    },
    {
        ID: 317,
        FECHA: new Date("2025-01-28"),
        PRODUCTO: "Polipropileno (LDPE) - ($USD/KG)",
        PRECIO: 1.220,
        SECTOR_ID: 4
    },
    {
        ID: 318,
        FECHA: new Date("2025-02-28"),
        PRODUCTO: "Polipropileno (LDPE) - ($USD/KG)",
        PRECIO: 1.250,
        SECTOR_ID: 4
    },
    {
        ID: 319,
        FECHA: new Date("2025-03-28"),
        PRODUCTO: "Polipropileno (LDPE) - ($USD/KG)",
        PRECIO: 1.270,
        SECTOR_ID: 4
    },
    {
        ID: 320,
        FECHA: new Date("2025-04-28"),
        PRODUCTO: "Polipropileno (LDPE) - ($USD/KG)",
        PRECIO: 1.290,
        SECTOR_ID: 4
    },
    {
        ID: 321,
        FECHA: new Date("2025-05-28"),
        PRODUCTO: "Polipropileno (LDPE) - ($USD/KG)",
        PRECIO: 1.240,
        SECTOR_ID: 4
    },
    {
        ID: 322,
        FECHA: new Date("2025-06-28"),
        PRODUCTO: "Polipropileno (LDPE) - ($USD/KG)",
        PRECIO: 1.220,
        SECTOR_ID: 4
    },
    {
        ID: 323,
        FECHA: new Date("2024-05-28"),
        PRODUCTO: "Flete Trans - Atlantic ($USD/CONTENEDOR 40 PIES)",
        PRECIO: 1917.000,
        SECTOR_ID: 2
    },
    {
        ID: 324,
        FECHA: new Date("2024-06-28"),
        PRODUCTO: "Flete Trans - Atlantic ($USD/CONTENEDOR 40 PIES)",
        PRECIO: 1893.000,
        SECTOR_ID: 2
    },
    {
        ID: 325,
        FECHA: new Date("2024-07-28"),
        PRODUCTO: "Flete Trans - Atlantic ($USD/CONTENEDOR 40 PIES)",
        PRECIO: 1825.000,
        SECTOR_ID: 2
    },
    {
        ID: 326,
        FECHA: new Date("2024-08-28"),
        PRODUCTO: "Flete Trans - Atlantic ($USD/CONTENEDOR 40 PIES)",
        PRECIO: 1788.000,
        SECTOR_ID: 2
    },
    {
        ID: 327,
        FECHA: new Date("2024-09-28"),
        PRODUCTO: "Flete Trans - Atlantic ($USD/CONTENEDOR 40 PIES)",
        PRECIO: 2354.000,
        SECTOR_ID: 2
    },
    {
        ID: 328,
        FECHA: new Date("2024-10-28"),
        PRODUCTO: "Flete Trans - Atlantic ($USD/CONTENEDOR 40 PIES)",
        PRECIO: 2894.000,
        SECTOR_ID: 2
    },
    {
        ID: 329,
        FECHA: new Date("2024-11-28"),
        PRODUCTO: "Flete Trans - Atlantic ($USD/CONTENEDOR 40 PIES)",
        PRECIO: 2801.000,
        SECTOR_ID: 2
    },
    {
        ID: 330,
        FECHA: new Date("2024-12-28"),
        PRODUCTO: "Flete Trans - Atlantic ($USD/CONTENEDOR 40 PIES)",
        PRECIO: 2819.000,
        SECTOR_ID: 2
    },
    {
        ID: 331,
        FECHA: new Date("2025-01-28"),
        PRODUCTO: "Flete Trans - Atlantic ($USD/CONTENEDOR 40 PIES)",
        PRECIO: 2574.000,
        SECTOR_ID: 2
    },
    {
        ID: 332,
        FECHA: new Date("2025-02-28"),
        PRODUCTO: "Flete Trans - Atlantic ($USD/CONTENEDOR 40 PIES)",
        PRECIO: 2182.000,
        SECTOR_ID: 2
    },
    {
        ID: 333,
        FECHA: new Date("2025-03-28"),
        PRODUCTO: "Flete Trans - Atlantic ($USD/CONTENEDOR 40 PIES)",
        PRECIO: 2135.000,
        SECTOR_ID: 2
    },
    {
        ID: 334,
        FECHA: new Date("2025-04-28"),
        PRODUCTO: "Flete Trans - Atlantic ($USD/CONTENEDOR 40 PIES)",
        PRECIO: 2122.000,
        SECTOR_ID: 2
    },
    {
        ID: 335,
        FECHA: new Date("2025-05-28"),
        PRODUCTO: "Flete Trans - Atlantic ($USD/CONTENEDOR 40 PIES)",
        PRECIO: 2047.000,
        SECTOR_ID: 2
    },
    {
        ID: 336,
        FECHA: new Date("2025-06-28"),
        PRODUCTO: "Flete Trans - Atlantic ($USD/CONTENEDOR 40 PIES)",
        PRECIO: 2099.000,
        SECTOR_ID: 2
    },
    {
        ID: 337,
        FECHA: new Date("2024-05-28"),
        PRODUCTO: "Flete PACIFIC ($USD/CONTENEDOR 40 PIES)",
        PRECIO: 4960.000,
        SECTOR_ID: 2
    },
    {
        ID: 338,
        FECHA: new Date("2024-06-28"),
        PRODUCTO: "Flete PACIFIC ($USD/CONTENEDOR 40 PIES)",
        PRECIO: 7038.000,
        SECTOR_ID: 2
    },
    {
        ID: 339,
        FECHA: new Date("2024-07-28"),
        PRODUCTO: "Flete PACIFIC ($USD/CONTENEDOR 40 PIES)",
        PRECIO: 6877.000,
        SECTOR_ID: 2
    },
    {
        ID: 340,
        FECHA: new Date("2024-08-28"),
        PRODUCTO: "Flete PACIFIC ($USD/CONTENEDOR 40 PIES)",
        PRECIO: 6586.000,
        SECTOR_ID: 2
    },
    {
        ID: 341,
        FECHA: new Date("2024-09-28"),
        PRODUCTO: "Flete PACIFIC ($USD/CONTENEDOR 40 PIES)",
        PRECIO: 5810.000,
        SECTOR_ID: 2
    },
    {
        ID: 342,
        FECHA: new Date("2024-10-28"),
        PRODUCTO: "Flete PACIFIC ($USD/CONTENEDOR 40 PIES)",
        PRECIO: 5188.000,
        SECTOR_ID: 2
    },
    {
        ID: 343,
        FECHA: new Date("2024-11-28"),
        PRODUCTO: "Flete PACIFIC ($USD/CONTENEDOR 40 PIES)",
        PRECIO: 4525.000,
        SECTOR_ID: 2
    },
    {
        ID: 344,
        FECHA: new Date("2024-12-28"),
        PRODUCTO: "Flete PACIFIC ($USD/CONTENEDOR 40 PIES)",
        PRECIO: 4595.000,
        SECTOR_ID: 2
    },
    {
        ID: 345,
        FECHA: new Date("2025-01-28"),
        PRODUCTO: "Flete PACIFIC ($USD/CONTENEDOR 40 PIES)",
        PRECIO: 5017.000,
        SECTOR_ID: 2
    },
    {
        ID: 346,
        FECHA: new Date("2025-02-28"),
        PRODUCTO: "Flete PACIFIC ($USD/CONTENEDOR 40 PIES)",
        PRECIO: 3484.000,
        SECTOR_ID: 2
    },
    {
        ID: 347,
        FECHA: new Date("2025-03-28"),
        PRODUCTO: "Flete PACIFIC ($USD/CONTENEDOR 40 PIES)",
        PRECIO: 2502.000,
        SECTOR_ID: 2
    },
    {
        ID: 348,
        FECHA: new Date("2025-04-28"),
        PRODUCTO: "Flete PACIFIC ($USD/CONTENEDOR 40 PIES)",
        PRECIO: 2749.000,
        SECTOR_ID: 2
    },
    {
        ID: 349,
        FECHA: new Date("2025-05-28"),
        PRODUCTO: "Flete PACIFIC ($USD/CONTENEDOR 40 PIES)",
        PRECIO: 2981.000,
        SECTOR_ID: 2
    },
    {
        ID: 350,
        FECHA: new Date("2025-06-28"),
        PRODUCTO: "Flete PACIFIC ($USD/CONTENEDOR 40 PIES)",
        PRECIO: 3130.000,
        SECTOR_ID: 2
    },
    {
        ID: 351,
        FECHA: new Date("2024-05-28"),
        PRODUCTO: "Mano de Obra MEX",
        PRECIO: 107.016,
        SECTOR_ID: 5
    },
    {
        ID: 352,
        FECHA: new Date("2024-06-28"),
        PRODUCTO: "Mano de Obra MEX",
        PRECIO: 107.016,
        SECTOR_ID: 5
    },
    {
        ID: 353,
        FECHA: new Date("2024-07-28"),
        PRODUCTO: "Mano de Obra MEX",
        PRECIO: 105.437,
        SECTOR_ID: 5
    },
    {
        ID: 354,
        FECHA: new Date("2024-08-28"),
        PRODUCTO: "Mano de Obra MEX",
        PRECIO: 105.437,
        SECTOR_ID: 5
    },
    {
        ID: 355,
        FECHA: new Date("2024-09-28"),
        PRODUCTO: "Mano de Obra MEX",
        PRECIO: 105.437,
        SECTOR_ID: 5
    },
    {
        ID: 356,
        FECHA: new Date("2024-10-28"),
        PRODUCTO: "Mano de Obra MEX",
        PRECIO: 108.204,
        SECTOR_ID: 5
    },
    {
        ID: 357,
        FECHA: new Date("2024-11-28"),
        PRODUCTO: "Mano de Obra MEX",
        PRECIO: 108.204,
        SECTOR_ID: 5
    },
    {
        ID: 358,
        FECHA: new Date("2024-12-28"),
        PRODUCTO: "Mano de Obra MEX",
        PRECIO: 108.204,
        SECTOR_ID: 5
    },
    {
        ID: 359,
        FECHA: new Date("2025-01-28"),
        PRODUCTO: "Mano de Obra MEX",
        PRECIO: 103.200,
        SECTOR_ID: 5
    },
    {
        ID: 360,
        FECHA: new Date("2025-02-28"),
        PRODUCTO: "Mano de Obra MEX",
        PRECIO: 103.200,
        SECTOR_ID: 5
    },
    {
        ID: 361,
        FECHA: new Date("2025-03-28"),
        PRODUCTO: "Mano de Obra MEX",
        PRECIO: 103.200,
        SECTOR_ID: 5
    },
    {
        ID: 362,
        FECHA: new Date("2025-04-28"),
        PRODUCTO: "Mano de Obra MEX",
        SECTOR_ID: 5
    },
    {
        ID: 363,
        FECHA: new Date("2025-05-28"),
        PRODUCTO: "Mano de Obra MEX",
        SECTOR_ID: 5
    },
    {
        ID: 364,
        FECHA: new Date("2025-06-28"),
        PRODUCTO: "Mano de Obra MEX",
        SECTOR_ID: 5
    },
    {
        ID: 365,
        FECHA: new Date("2024-05-28"),
        PRODUCTO: "Inflación (%) MEX",
        PRECIO: 4.690,
        SECTOR_ID: 5
    },
    {
        ID: 366,
        FECHA: new Date("2024-06-28"),
        PRODUCTO: "Inflación (%) MEX",
        PRECIO: 4.980,
        SECTOR_ID: 5
    },
    {
        ID: 367,
        FECHA: new Date("2024-07-28"),
        PRODUCTO: "Inflación (%) MEX",
        PRECIO: 5.570,
        SECTOR_ID: 5
    },
    {
        ID: 368,
        FECHA: new Date("2024-08-28"),
        PRODUCTO: "Inflación (%) MEX",
        PRECIO: 4.990,
        SECTOR_ID: 5
    },
    {
        ID: 369,
        FECHA: new Date("2024-09-28"),
        PRODUCTO: "Inflación (%) MEX",
        PRECIO: 4.580,
        SECTOR_ID: 5
    },
    {
        ID: 370,
        FECHA: new Date("2024-10-28"),
        PRODUCTO: "Inflación (%) MEX",
        PRECIO: 4.760,
        SECTOR_ID: 5
    },
    {
        ID: 371,
        FECHA: new Date("2024-11-28"),
        PRODUCTO: "Inflación (%) MEX",
        PRECIO: 4.550,
        SECTOR_ID: 5
    },
    {
        ID: 372,
        FECHA: new Date("2024-12-28"),
        PRODUCTO: "Inflación (%) MEX",
        PRECIO: 4.210,
        SECTOR_ID: 5
    },
    {
        ID: 373,
        FECHA: new Date("2025-01-28"),
        PRODUCTO: "Inflación (%) MEX",
        PRECIO: 3.590,
        SECTOR_ID: 5
    },
    {
        ID: 374,
        FECHA: new Date("2025-02-28"),
        PRODUCTO: "Inflación (%) MEX",
        PRECIO: 3.770,
        SECTOR_ID: 5
    },
    {
        ID: 375,
        FECHA: new Date("2025-03-28"),
        PRODUCTO: "Inflación (%) MEX",
        PRECIO: 3.800,
        SECTOR_ID: 5
    },
    {
        ID: 376,
        FECHA: new Date("2025-04-28"),
        PRODUCTO: "Inflación (%) MEX",
        PRECIO: 3.930,
        SECTOR_ID: 5
    },
    {
        ID: 377,
        FECHA: new Date("2025-05-28"),
        PRODUCTO: "Inflación (%) MEX",
        PRECIO: 4.420,
        SECTOR_ID: 5
    },
    {
        ID: 378,
        FECHA: new Date("2025-06-28"),
        PRODUCTO: "Inflación (%) MEX",
        PRECIO: 4.320,
        SECTOR_ID: 5
    },
    {
        ID: 379,
        FECHA: new Date("2024-05-28"),
        PRODUCTO: "Tipo de Cambio USD - Promedio Mensual",
        PRECIO: 16.790,
        SECTOR_ID: 6
    },
    {
        ID: 380,
        FECHA: new Date("2024-06-28"),
        PRODUCTO: "Tipo de Cambio USD - Promedio Mensual",
        PRECIO: 18.156,
        SECTOR_ID: 6
    },
    {
        ID: 381,
        FECHA: new Date("2024-07-28"),
        PRODUCTO: "Tipo de Cambio USD - Promedio Mensual",
        PRECIO: 18.097,
        SECTOR_ID: 6
    },
    {
        ID: 382,
        FECHA: new Date("2024-08-28"),
        PRODUCTO: "Tipo de Cambio USD - Promedio Mensual",
        PRECIO: 19.103,
        SECTOR_ID: 6
    },
    {
        ID: 383,
        FECHA: new Date("2024-09-28"),
        PRODUCTO: "Tipo de Cambio USD - Promedio Mensual",
        PRECIO: 19.632,
        SECTOR_ID: 6
    },
    {
        ID: 384,
        FECHA: new Date("2024-10-28"),
        PRODUCTO: "Tipo de Cambio USD - Promedio Mensual",
        PRECIO: 19.688,
        SECTOR_ID: 6
    },
    {
        ID: 385,
        FECHA: new Date("2024-11-28"),
        PRODUCTO: "Tipo de Cambio USD - Promedio Mensual",
        PRECIO: 20.331,
        SECTOR_ID: 6
    },
    {
        ID: 386,
        FECHA: new Date("2024-12-28"),
        PRODUCTO: "Tipo de Cambio USD - Promedio Mensual",
        PRECIO: 20.243,
        SECTOR_ID: 6
    },
    {
        ID: 387,
        FECHA: new Date("2025-01-28"),
        PRODUCTO: "Tipo de Cambio USD - Promedio Mensual",
        PRECIO: 20.557,
        SECTOR_ID: 6
    },
    {
        ID: 388,
        FECHA: new Date("2025-02-28"),
        PRODUCTO: "Tipo de Cambio USD - Promedio Mensual",
        PRECIO: 20.462,
        SECTOR_ID: 6
    },
    {
        ID: 389,
        FECHA: new Date("2025-03-28"),
        PRODUCTO: "Tipo de Cambio USD - Promedio Mensual",
        PRECIO: 20.245,
        SECTOR_ID: 6
    },
    {
        ID: 390,
        FECHA: new Date("2025-04-28"),
        PRODUCTO: "Tipo de Cambio USD - Promedio Mensual",
        PRECIO: 20.098,
        SECTOR_ID: 6
    },
    {
        ID: 391,
        FECHA: new Date("2025-05-28"),
        PRODUCTO: "Tipo de Cambio USD - Promedio Mensual",
        PRECIO: 19.450,
        SECTOR_ID: 6
    },
    {
        ID: 392,
        FECHA: new Date("2025-06-28"),
        PRODUCTO: "Tipo de Cambio USD - Promedio Mensual",
        PRECIO: 19.060,
        SECTOR_ID: 6
    },
    {
        ID: 393,
        FECHA: new Date("2024-05-28"),
        PRODUCTO: "Aceite de Palma - ($USD/mt)",
        PRECIO: 859.150,
        SECTOR_ID: 3
    },
    {
        ID: 394,
        FECHA: new Date("2024-06-28"),
        PRODUCTO: "Aceite de Palma - ($USD/mt)",
        PRECIO: 873.670,
        SECTOR_ID: 3
    },
    {
        ID: 395,
        FECHA: new Date("2024-07-28"),
        PRODUCTO: "Aceite de Palma - ($USD/mt)",
        PRECIO: 896.090,
        SECTOR_ID: 3
    },
    {
        ID: 396,
        FECHA: new Date("2024-08-28"),
        PRODUCTO: "Aceite de Palma - ($USD/mt)",
        PRECIO: 932.630,
        SECTOR_ID: 3
    },
    {
        ID: 397,
        FECHA: new Date("2024-09-28"),
        PRODUCTO: "Aceite de Palma - ($USD/mt)",
        PRECIO: 982.830,
        SECTOR_ID: 3
    },
    {
        ID: 398,
        FECHA: new Date("2024-10-28"),
        PRODUCTO: "Aceite de Palma - ($USD/mt)",
        PRECIO: 1077.250,
        SECTOR_ID: 3
    },
    {
        ID: 399,
        FECHA: new Date("2024-11-28"),
        PRODUCTO: "Aceite de Palma - ($USD/mt)",
        PRECIO: 1168.588,
        SECTOR_ID: 3
    },
    {
        ID: 400,
        FECHA: new Date("2024-12-28"),
        PRODUCTO: "Aceite de Palma - ($USD/mt)",
        PRECIO: 1189.730,
        SECTOR_ID: 3
    },
    {
        ID: 401,
        FECHA: new Date("2025-01-28"),
        PRODUCTO: "Aceite de Palma - ($USD/mt)",
        PRECIO: 1070.310,
        SECTOR_ID: 3
    },
    {
        ID: 402,
        FECHA: new Date("2025-02-28"),
        PRODUCTO: "Aceite de Palma - ($USD/mt)",
        PRECIO: 1067.270,
        SECTOR_ID: 3
    },
    {
        ID: 403,
        FECHA: new Date("2025-03-28"),
        PRODUCTO: "Aceite de Palma - ($USD/mt)",
        PRECIO: 1067.600,
        SECTOR_ID: 3
    },
    {
        ID: 404,
        FECHA: new Date("2025-04-28"),
        PRODUCTO: "Aceite de Palma - ($USD/mt)",
        PRECIO: 994.370,
        SECTOR_ID: 3
    },
    {
        ID: 405,
        FECHA: new Date("2025-05-28"),
        PRODUCTO: "Aceite de Palma - ($USD/mt)",
        PRECIO: 907.580,
        SECTOR_ID: 3
    },
    {
        ID: 406,
        FECHA: new Date("2025-06-28"),
        PRODUCTO: "Aceite de Palma - ($USD/mt)",
        PRECIO: 935.390,
        SECTOR_ID: 3
    },
    {
        ID: 407,
        FECHA: new Date("2024-05-28"),
        PRODUCTO: "Aceite de Soya - ($USD/mt)",
        PRECIO: 988.000,
        SECTOR_ID: 3
    },
    {
        ID: 408,
        FECHA: new Date("2024-06-28"),
        PRODUCTO: "Aceite de Soya - ($USD/mt)",
        PRECIO: 1010.680,
        SECTOR_ID: 3
    },
    {
        ID: 409,
        FECHA: new Date("2024-07-28"),
        PRODUCTO: "Aceite de Soya - ($USD/mt)",
        PRECIO: 1079.020,
        SECTOR_ID: 3
    },
    {
        ID: 410,
        FECHA: new Date("2024-08-28"),
        PRODUCTO: "Aceite de Soya - ($USD/mt)",
        PRECIO: 1031.380,
        SECTOR_ID: 3
    },
    {
        ID: 411,
        FECHA: new Date("2024-09-28"),
        PRODUCTO: "Aceite de Soya - ($USD/mt)",
        PRECIO: 1043.810,
        SECTOR_ID: 3
    },
    {
        ID: 412,
        FECHA: new Date("2024-10-28"),
        PRODUCTO: "Aceite de Soya - ($USD/mt)",
        PRECIO: 1094.890,
        SECTOR_ID: 3
    },
    {
        ID: 413,
        FECHA: new Date("2024-11-28"),
        PRODUCTO: "Aceite de Soya - ($USD/mt)",
        PRECIO: 1145.171,
        SECTOR_ID: 3
    },
    {
        ID: 414,
        FECHA: new Date("2024-12-28"),
        PRODUCTO: "Aceite de Soya - ($USD/mt)",
        PRECIO: 1063.631,
        SECTOR_ID: 3
    },
    {
        ID: 415,
        FECHA: new Date("2025-01-28"),
        PRODUCTO: "Aceite de Soya - ($USD/mt)",
        PRECIO: 1047.620,
        SECTOR_ID: 3
    },
    {
        ID: 416,
        FECHA: new Date("2025-02-28"),
        PRODUCTO: "Aceite de Soya - ($USD/mt)",
        PRECIO: 1068.510,
        SECTOR_ID: 3
    },
    {
        ID: 417,
        FECHA: new Date("2025-03-28"),
        PRODUCTO: "Aceite de Soya - ($USD/mt)",
        PRECIO: 1011.430,
        SECTOR_ID: 3
    },
    {
        ID: 418,
        FECHA: new Date("2025-04-28"),
        PRODUCTO: "Aceite de Soya - ($USD/mt)",
        PRECIO: 1119.530,
        SECTOR_ID: 3
    },
    {
        ID: 419,
        FECHA: new Date("2025-05-28"),
        PRODUCTO: "Aceite de Soya - ($USD/mt)",
        PRECIO: 1163.050,
        SECTOR_ID: 3
    },
    {
        ID: 420,
        FECHA: new Date("2025-06-28"),
        PRODUCTO: "Aceite de Soya - ($USD/mt)",
        PRECIO: 1166.720,
        SECTOR_ID: 3
    },
    {
        ID: 421,
        FECHA: new Date("2024-05-28"),
        PRODUCTO: "Aceite de Girasol - ($USD/mt)",
        PRECIO: 1005.730,
        SECTOR_ID: 3
    },
    {
        ID: 422,
        FECHA: new Date("2024-06-28"),
        PRODUCTO: "Aceite de Girasol - ($USD/mt)",
        PRECIO: 1043.050,
        SECTOR_ID: 3
    },
    {
        ID: 423,
        FECHA: new Date("2024-07-28"),
        PRODUCTO: "Aceite de Girasol - ($USD/mt)",
        PRECIO: 1068.510,
        SECTOR_ID: 3
    },
    {
        ID: 424,
        FECHA: new Date("2024-08-28"),
        PRODUCTO: "Aceite de Girasol - ($USD/mt)",
        PRECIO: 1048.560,
        SECTOR_ID: 3
    },
    {
        ID: 425,
        FECHA: new Date("2024-09-28"),
        PRODUCTO: "Aceite de Girasol - ($USD/mt)",
        PRECIO: 1068.000,
        SECTOR_ID: 3
    },
    {
        ID: 426,
        FECHA: new Date("2024-10-28"),
        PRODUCTO: "Aceite de Girasol - ($USD/mt)",
        PRECIO: 1205.710,
        SECTOR_ID: 3
    },
    {
        ID: 427,
        FECHA: new Date("2024-11-28"),
        PRODUCTO: "Aceite de Girasol - ($USD/mt)",
        PRECIO: 1267.000,
        SECTOR_ID: 3
    },
    {
        ID: 428,
        FECHA: new Date("2024-12-28"),
        PRODUCTO: "Aceite de Girasol - ($USD/mt)",
        PRECIO: 1222.500,
        SECTOR_ID: 3
    },
    {
        ID: 429,
        FECHA: new Date("2025-01-28"),
        PRODUCTO: "Aceite de Girasol - ($USD/mt)",
        PRECIO: 1207.000,
        SECTOR_ID: 3
    },
    {
        ID: 430,
        FECHA: new Date("2025-02-28"),
        PRODUCTO: "Aceite de Girasol - ($USD/mt)",
        PRECIO: 1220.000,
        SECTOR_ID: 3
    },
    {
        ID: 431,
        FECHA: new Date("2025-03-28"),
        PRODUCTO: "Aceite de Girasol - ($USD/mt)",
        PRECIO: 1232.500,
        SECTOR_ID: 3
    },
    {
        ID: 432,
        FECHA: new Date("2025-04-28"),
        PRODUCTO: "Aceite de Girasol - ($USD/mt)",
        PRECIO: 1225.000,
        SECTOR_ID: 3
    },
    {
        ID: 433,
        FECHA: new Date("2025-05-28"),
        PRODUCTO: "Aceite de Girasol - ($USD/mt)",
        PRECIO: 1208.000,
        SECTOR_ID: 3
    },
    {
        ID: 434,
        FECHA: new Date("2025-06-28"),
        PRODUCTO: "Aceite de Girasol - ($USD/mt)",
        PRECIO: 1182.500,
        SECTOR_ID: 3
    },
    {
        ID: 435,
        FECHA: new Date("2024-05-28"),
        PRODUCTO: "Alcohol (Etanol)",
        PRECIO: 1.810,
        SECTOR_ID: 4
    },
    {
        ID: 436,
        FECHA: new Date("2024-06-28"),
        PRODUCTO: "Alcohol (Etanol)",
        PRECIO: 2.045,
        SECTOR_ID: 4
    },
    {
        ID: 437,
        FECHA: new Date("2024-07-28"),
        PRODUCTO: "Alcohol (Etanol)",
        PRECIO: 1.758,
        SECTOR_ID: 4
    },
    {
        ID: 438,
        FECHA: new Date("2024-08-28"),
        PRODUCTO: "Alcohol (Etanol)",
        PRECIO: 1.875,
        SECTOR_ID: 4
    },
    {
        ID: 439,
        FECHA: new Date("2024-09-28"),
        PRODUCTO: "Alcohol (Etanol)",
        PRECIO: 1.580,
        SECTOR_ID: 4
    },
    {
        ID: 440,
        FECHA: new Date("2024-10-28"),
        PRODUCTO: "Alcohol (Etanol)",
        PRECIO: 1.558,
        SECTOR_ID: 4
    },
    {
        ID: 441,
        FECHA: new Date("2024-11-28"),
        PRODUCTO: "Alcohol (Etanol)",
        PRECIO: 1.555,
        SECTOR_ID: 4
    },
    {
        ID: 442,
        FECHA: new Date("2024-12-28"),
        PRODUCTO: "Alcohol (Etanol)",
        PRECIO: 1.690,
        SECTOR_ID: 4
    },
    {
        ID: 443,
        FECHA: new Date("2025-01-28"),
        PRODUCTO: "Alcohol (Etanol)",
        PRECIO: 1.768,
        SECTOR_ID: 4
    },
    {
        ID: 444,
        FECHA: new Date("2025-02-28"),
        PRODUCTO: "Alcohol (Etanol)",
        PRECIO: 1.715,
        SECTOR_ID: 4
    },
    {
        ID: 445,
        FECHA: new Date("2025-03-28"),
        PRODUCTO: "Alcohol (Etanol)",
        PRECIO: 1.770,
        SECTOR_ID: 4
    },
    {
        ID: 446,
        FECHA: new Date("2025-04-28"),
        PRODUCTO: "Alcohol (Etanol)",
        PRECIO: 1.775,
        SECTOR_ID: 4
    },
    {
        ID: 447,
        FECHA: new Date("2025-05-28"),
        PRODUCTO: "Alcohol (Etanol)",
        PRECIO: 1.775,
        SECTOR_ID: 4
    },
    {
        ID: 448,
        FECHA: new Date("2025-06-28"),
        PRODUCTO: "Alcohol (Etanol)",
        PRECIO: 1.523,
        SECTOR_ID: 4
    }
], { individualHooks: true })
}