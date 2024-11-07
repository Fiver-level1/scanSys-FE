import { getRequest } from "./ApiController";

const PRODUCTS_ENDPOINT = "/api/products"; 

export const getProducts = async (cb) => {
  return await getRequest(PRODUCTS_ENDPOINT, cb);
};
