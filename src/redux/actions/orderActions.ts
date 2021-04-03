import {ORDER} from "../../dataSets/ACTION";
import { ProductItem } from "../../types/product";
import { AddToCartAction } from "../../types/redux/actions/orderActions";

export const addToCartAction = (code: string ): AddToCartAction =>{
    return {
        type: ORDER.ADD_TO_CART,
        payload: code
    }
}