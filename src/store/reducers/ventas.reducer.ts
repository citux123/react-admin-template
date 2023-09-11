import { IVentasDiaState, IActionBase } from "../models/root.interface";
import { ADD_VENTA, ADD_VENTA_MES } from "../actions/ventas.actions";


const initialState: IVentasDiaState = {
    ventas: [
        {
            id: 1,
            "venta diaria": "Bodega",
            efectivo: 100,
            visa: 300,
            credomatic: 500,
            credito: 600,
            otro: 700,
            total: 1200
        },
        {
            id: 2,
            "venta diaria": "Bodega 5",
            efectivo: 100,
            visa: 300,
            credomatic: 500,
            credito: 600,
            otro: 700,
            total: 1200
        },
        {
            id: 3,
            "venta diaria": "cayala",
            efectivo: 200,
            visa: 400,
            credomatic: 600,
            credito: 800,
            otro: 900,
            total: 1500
        }
    ],
    ventasMes: [
        {
            id: 1,
            "acumulado": 10,
            meta: 20,
            "alcance": 30,
            margen: 5,
        }
    ]
};

function ventasReducer(state: IVentasDiaState = initialState, action: IActionBase): IVentasDiaState {
    switch (action.type) {
        case ADD_VENTA: {
            let maxId: number = Math.max.apply(Math, state.ventas.map((o) => { return o.id; }));
            if(maxId === -Infinity) { maxId = 0; }
            return {...state, ventas: [...state.ventas, {...action.ventas, id: maxId + 1}]};
        }
        case ADD_VENTA_MES: {
            let maxId: number = Math.max.apply(Math, state.ventasMes.map((o) => { return o.id; }));
            if(maxId === -Infinity) { maxId = 0; }
            return {...state, ventasMes: [...state.ventasMes, {...action.ventasMes, id: maxId + 1}]};
        }
        default:
            return state;
    }
}


export default ventasReducer;