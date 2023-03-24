import { ADD_CART } from "./types";

export const addCart = (number) => {
  console.log(number);
  return {
    type: ADD_CART,
    payload: Number(number),
    //payload 값을 전달하는
  };
};
