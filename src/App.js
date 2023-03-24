//APP.js는 store의 데이터를 Provider 를 통해 컴포넌트에게 전달

import "./App.css";
//store 임포트
import store from "./redux/store";
//Provider 데이터를 공급
import { Provider } from "react-redux";

import Products from "./components/Products";
import Display from "./components/Display";
import Carts from "./components/Carts";

function App() {
  return (
    <Provider store={store}>
      <Products />
      <Display />
      <Carts />
    </Provider>
  );
}

export default App;
