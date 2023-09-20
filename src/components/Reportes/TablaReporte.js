import React, { } from "react";
import { useSelector } from "react-redux";
import { IStateType } from "../../store/models/root.interface";
import { IVentas } from "../../store/models/ventas.interface";

const ReporteVenta = (head, list) => {
    const ventas= useSelector((state) => state.ventas.ventas);

    let tableHead = [
        {
            key: "id",
            title: "#"
        },
        {
            key: "ubicacion",
            title: "Ubicación"
        },
        {
            key: "efectivo",
            title: "Efectivo"
        },
        {
            key: "visa",
            title: "Visa"
        },
        {
            key: "credomatic",
            title: "Credomatic"
        },
        {
            key: "credito",
            title: "Credito"
        },
        {
            key: "otro",
            title: "Otro"
        },
        {
            key: "total",
            title: "Total"
        },
    ]

    let tableH = []
    tableHead.forEach(t => {
        tableH.push(
            <th scope="col"key={t.key}>{t.title}</th>
        )
    })

  const orderList = ventas.map(venta => {
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
                        {tableH}
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