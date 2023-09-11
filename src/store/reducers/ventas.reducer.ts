import { IVentasDiaState, IActionBase } from "../models/root.interface";
import { ADD_ORDER } from "../actions/orders.actions";


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
        
    ]
};

function ventasReducer(state: IVentasDiaState = initialState, action: IActionBase): IVentasDiaState {
    switch (action.type) {
        case ADD_ORDER: {
            let maxId: number = Math.max.apply(Math, state.ventas.map((o) => { return o.id; }));
            if(maxId === -Infinity) { maxId = 0; }
            return {...state, ventas: [...state.ventas, {...action.ventas, id: maxId + 1}]};
        }
        default:
            return state;
    }
}


export default ventasReducer;