import { combineReducers } from "redux";
import productReducer from "./products/reducer";
import cartsReducer from "./carts/reducer";
/* export default 는 중괄호 없이 //export는 중괄호  */

const rootReducer = combineReducers({
  carts: cartsReducer,
  product: productReducer,
});

export default rootReducer;
