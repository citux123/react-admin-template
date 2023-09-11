
export interface IVentas {
    id: number,
    "venta diaria": string,
    efectivo: number,
    visa: number,
    credomatic: number,
    credito: number,
    otro: number,
    total: number
}

export interface IVentasMes {
    id: number,
    "acumulado": number,
    meta: number,
    "alcance": number,
    margen: number,
}

