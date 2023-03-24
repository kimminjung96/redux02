import { createStore } from "redux";
import rootReducer from "./rootReducer";

/* 스토어는 리듀서와 연결 */
const store = createStore(rootReducer);
export default store;
