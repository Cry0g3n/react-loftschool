import {MOVE_ORDER_TO_CUSTOMER} from "../actions/farmTypes";
import {MOVE_ORDER_TO_FARM} from "../actions/marketTypes";

const initialState = {
    orders: [],
    profit: 0,
    productionPrice: 0
};

const farm = (state = initialState, action) => {
    switch (action.type) {
        case MOVE_ORDER_TO_FARM:
            return Object.assign({}, state, {
                orders: state.orders ? [...state.orders, action.payload] : [action.payload]
            });
        case MOVE_ORDER_TO_CUSTOMER:
            return Object.assign({}, state, {
                orders: state.orders.filter(order => (order.id !== action.payload.id))
            });
        default:
            return state;
    }
};

export default farm;