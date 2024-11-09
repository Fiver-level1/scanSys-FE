import { getRequest } from "./ApiController";
import { getRequestAuth } from "./AuthControllerWithoutToken";

const PRODUCTS_ENDPOINT = "/api/products/";

export const getProducts = async (cb) => {
  return await getRequestAuth(PRODUCTS_ENDPOINT, cb);
};
