import { BASE_URL } from "../utils/constants";
import { createOrderFail, fetchOrdersFail, fetchOrdersStart, fetchOrdersSuccess } from '../redux/orders/ordersSlice'
import axios from "axios";

export const getOrders = async (dispatch, currentUser) => {

    dispatch(fetchOrdersStart());
    
    try {
        
        const orders = await axios.get(`${BASE_URL}orders`, {headers: {'x-token': currentUser.token}});

        if (orders) {
            dispatch(fetchOrdersSuccess(orders.data.data));
        };

    } catch (error) {
        console.log(error);
        dispatch(fetchOrdersFail('Something went wrong.'))
    }

}

export const createOrder = async(order, dispatch, currentUser) => {
    try {
        const response = await axios.post(`${BASE_URL}orders`, order, {headers: {'x-token': currentUser.token}});

        if (response) {
            getOrders(dispatch, currentUser)
        };

    } catch (error) {
        console.log(error);
        dispatch(createOrderFail())
    }
}