import React, { } from "react";
import { useSelector } from "react-redux";
import { IStateType } from "../../store/models/root.interface";
import { IVentas } from "../../store/models/ventas.interface";

const ReporteVenta: React.FC = (head, list) => {
    const ventas: IVentas[] = useSelector((state: IStateType) => state.ventas.ventas);

    const orderList: JSX.Element[] = ventas.map(venta => {
        return (
            <tr className={`table-row`}
                key={`order_${venta.id}`}>
                <th scope="row">{venta.id}</th>
                <td>{venta["venta diaria"]}</td>
                <td>{venta.efectivo}</td>
                <td>{venta.visa}</td>
                <td>{venta.credomatic}</td>
                <td>{venta.credito}</td>
                <td>{venta.otro}</td>
                <td>{venta.total}</td>
            </tr>);
    })

    return (
        <div className="table-responsive portlet">
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Ubicacion</th>
                        <th scope="col">Efectivo</th>
                        <th scope="col">Visa</th>
                        <th scope="col">Credomatic</th>
                        <th scope="col">Credito</th>
                        <th scope="col">otro</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {orderList}
                </tbody>
            </table>
        </div>
    )
}

export default ReporteVenta;