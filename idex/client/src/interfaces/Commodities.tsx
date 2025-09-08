export interface BienesData {
    name: string
    precio: number[];
    meses: string[];
}

export interface Productos {
    PRODUCTO: string
}

export interface Fechas {
    FECHA: string
}

export interface Producto {
    ID: number
    FECHA: string
    PRODUCTO: string
    PRECIO: number
    SECTOR_ID: number
}

export interface Sector {
    ID: number
    SECTOR: string
}

export interface SectorInterface {
  name: string
  commodity: string[]
}
