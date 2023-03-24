/* 상품갯수 카운트 => 리덕스모듈 */
import React from "react";
import { connect } from "react-redux";
// import { addProduct, removeProduct, resetProduct } from "../redux/products/actions";
import { addProduct, removeProduct, resetProduct } from "../redux";
/* 
const Products = (props) => {
  return (
    <div className="items">
      <p>상품갯수:{props.count}</p>
      //화살표함수 리턴값 하나일시 중괄호생략가능
      <button onClick={()=> props.addProduct()}>등록하기</button>
      <button onClick={()=>{props.removeProduct()}}>빼기</button>
      <button onClick={()=>{props.resetProduct()}}>reset</button>
    </div>
  );
}; */

//디스트럭처링
const Products = ({ count, addProduct, removeProduct, resetProduct }) => {
  return (
    <div className="items">
      <p>상품갯수:{count}</p>
      <button onClick={() => addProduct()}>등록하기</button>
      <button onClick={() => removeProduct()}>빼기</button>
      <button onClick={() => resetProduct()}>reset</button>
    </div>
  );
};

/* const mapDispatchToProps = (dispatch) => {
  return {
    //addProduct : ()=>{dispatch(addProduct())},
    addProduct: addProduct,
    addProduct: () => dispatch(addProduct()),
    removeProduct: () => dispatch(removeProduct()),
    resetProduct: () => dispatch(resetProduct()),
  };
};
 */

/* 액션과 리듀서를 연결 */
const mapDispatchToProps = {
  /* 
    addProduct: addProduct,
    removeProduct: removeProduct,
    resetProduct: resetProduct,
    키와값이 같으면 아래처럼 줄일 수 있음
     */
  addProduct,
  removeProduct,
  resetProduct,
};

/* map 함수는 키와 값을 연결시켜주는 함수다. */
//connect() 는 리엑트함수로 리덕스와 연결시키는 함수

//const mapStateToProps = (state) => ({ count: state.count });
//컴바인한 후 객체로 들어있기 때문에 아래처럼 작성
const mapStateToProps = (state) => {
  console.log(state.product);
  return { count: state.product.count };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);

/***
 * mapStateToProps?: Function
 * mapDispatchToProps?: Function | Object
 * mergeProps?: Function
 * options?: Object
 * ***/
