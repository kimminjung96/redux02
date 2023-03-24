/* Carts: 장바구니 카운트 => 리덕스모듈 */
import React from "react";
import { connect } from "react-redux";
// import { addCart } from "../redux/carts/actions";
import { addCart } from "../redux";

const Carts = ({ count, addCart }) => {
  const [number, setNumber] = React.useState(1);
  return (
    <div className="items">
      <p>장바구니수:{count}</p>
      <input
        type="text"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <button onClick={() => addCart(number)}>장구니추가하기</button>
    </div>
  );
};

const mapDispatchToProps = {
  addCart: (number) => {return addCart(number)},
  // addCart: (number) => addCart(number),
};

//const mapStateToProps = (state) => ({ count: state.carts.count });
// const mapStateToProps = (carts) => ({ count: carts.carts.count });
const mapStateToProps = ({ carts }) => ({ count: carts.count });
export default connect(mapStateToProps, mapDispatchToProps)(Carts);
