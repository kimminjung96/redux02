/* Product의 데이터를 공유받는 컴포넌트 (Product의 사본) => 리덕스생성안함 */
/***
 * state를 바꿀려면 리덕스가 필요하고 얘는 액션할 수 없음 //기능없음
 * 액션을 넣고 싶다면 리덕스 추가해야함
 * ***/
import React from "react";
import { connect } from "react-redux";

const Display = ({ count }) => {
  return (
    <div className="items">
      <p>디스플레이 카테고리 상품갯수={count}</p>
    </div>
  );
};

//mapStateToProps 를 활용해서 count값 공유
const mapStateToProps = (state) => ({ count: state.product.count });
export default connect(mapStateToProps)(Display);
