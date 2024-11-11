import { deleteRequest, getRequest, postRequest, putRequest } from "./ApiController"

const CART_ENDPOINT = "/api/cart/";

export const getCartItems = async (cb) => {
    return await getRequest(CART_ENDPOINT, cb);
}

export const addCartItems = async (cb, data) => {

    let m = {};
    m.product_id = data.id;
    m.quantity = data.quantity;
    return await postRequest(CART_ENDPOINT, cb, { "items": [m] });
}

export const deleteCartItem = async (cb, data) => {
    return await deleteRequest(CART_ENDPOINT, cb, { "items": [{ "product_id": data.id }] });
}

export const changeCartItemQuantity = async (cb, data) => {
    return await putRequest(CART_ENDPOINT, cb, { "product_id": data.id, "quantity": data.quantity ? data.quantity : 0 });
}



