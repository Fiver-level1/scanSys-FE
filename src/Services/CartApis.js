import { deleteRequest, getRequest, postRequest, putRequest } from "./ApiController"

const CART_ENDPOINT = "/api/cart/";

export const getCartItems = async (cb) => {
    // console.log(cb)
    return await getRequest(CART_ENDPOINT, cb);
}

export const addCartItems = async (cb, data) => {
    let m = {};
    // console.log({"data": data});
    m.product_id = data.id;
    m.quantity = data.qty;
    // console.log({"items": [m]})
    return await postRequest(CART_ENDPOINT, cb, { "items": [m] });
}

export const deleteCartItem = async (cb, data) => {
    // console.log(data);
    return await deleteRequest(CART_ENDPOINT, cb, { "items": [{ "product_id": data.id }] });
}

export const changeCartItemQuantity = async (cb, data) => {
    console.log(data)
    console.log({ "product_id": data.id, "quantity": data.qty });

    return await putRequest(CART_ENDPOINT, cb, { "product_id": data.id, "quantity": data.qty ? data.qty : 0 });
}



