import * as actionTypes from './ActionTypes';
const INITIAL_STATE = {
    books: [],
    cart: [],
    orders: [],
    isAuth: false
}

export const Reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case actionTypes.LOAD_BOOKS:
            return {
                ...state,
                books: action.payload
            }
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                cart: state.cart.concat(action.payload)

            }
        case actionTypes.ITEM_INC:
            for (let item of state.cart) {
                if (item.id == action.payload) {
                    item.amount++;
                    break

                }
            }

            return {

                ...state,
                cart: state.cart,

            }

        case actionTypes.ITEM_DEC:
            for (let item of state.cart) {
                if (item.id == action.payload) {
                    if (item.amount <= 1) return state;
                    item.amount--;

                }
            }

            return {

                ...state,
                cart: state.cart,

            }
        case actionTypes.REMOVE_FROM_CART:
            for (let i in state.cart) {
                if (state.cart[i].id == action.payload) {
                    state.cart[i].amount = 0;
                    state.cart.splice(i, 1);

                    break

                }
            }
            return {

                ...state,
                cart: state.cart,

            }
        case actionTypes.LOAD_ORDERS:
            let orders = [];
            for (let key in action.payload) {
                orders.push({
                    ...action.payload[key],
                    id: key,
                })
            }
            return {
                ...state,
                orders: orders,
                orderLoading: false,
            }
        case actionTypes.AUTHENTICATE_USER:
            return {
                ...state,
                isAuth: true
            }

        default:
            return state;
    }
}

