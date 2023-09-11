
import { IVentas, IVentasMes } from "../models/ventas.interface";

export const ADD_VENTA: string = "ADD_ORDER";
export const ADD_VENTA_MES: string = "ADD_ORDER_MES";

export function addVenta(venta: IVentas): IAddVentaActionType {
    return { type: ADD_VENTA, ventas: venta };
}

export function addVentaMes(ventasMes: IVentasMes): IAddVentaMesActionType {
    return { type: ADD_VENTA_MES, ventasMes: ventasMes };
}

interface IAddVentaActionType { type: string, ventas: IVentas };
interface IAddVentaMesActionType { type: string, ventasMes: IVentasMes};
