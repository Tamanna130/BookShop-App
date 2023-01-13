import axios from "axios";
import { navigate } from "../../App";
import * as ActionTypes from "./ActionTypes";
export const loadBooks = books => {
    return {
        type: ActionTypes.LOAD_BOOKS,
        payload: books
    }
}

export const getBooks = () => dispatch => {
    axios.get("https://mybooks-93063-default-rtdb.firebaseio.com/books.json")
        .then(response => dispatch(loadBooks(response.data)))
        .catch(err => console.error(err))
}

export const addToCart = item => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: item
    }
}

export const itemAmountInc = id => {
    return {
        type: ActionTypes.ITEM_INC,
        payload: id
    }
}
export const itemAmountDec = id => {
    return {
        type: ActionTypes.ITEM_DEC,
        payload: id
    }
}

export const removeItem = id => {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload: id
    }
}

export const loadOrders = orders => {
    return {
        type: ActionTypes.LOAD_ORDERS,
        payload: orders,
    }
}


export const fetchOrders = () => dispatch => {
    axios.get("https://mybooks-93063-default-rtdb.firebaseio.com/orders.json")
        .then(response => {
            dispatch(loadOrders(response.data));
        })
        .catch(err => {
            console.log(err);
        })
}

export const authUser = () => {
    return {
        type: ActionTypes.AUTHENTICATE_USER
    }
}

export const tryAuth = (email, password, mode) => dispatch => {
    let url = "";
    const API_KEY = "AIzaSyBO9wX2KPY22B8iaJNnTc7GQQeR_Tv_Xaw";
    if (mode === "signup") {
        url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY;
    } else if (mode === "login") {
        url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + API_KEY;
    }
    console.log(url);
    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .catch(err => {
            console.log(err);
            alert("Authentication Failed!");
        })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                alert(data.error.message);
            } else {
                navigate("Home");
                dispatch(authUser());
            }
            console.log(data)
        })

}