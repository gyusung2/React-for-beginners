import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';


let YellowBtn = styled.button`
background : yellow;
color : black;
padding : 10px;`


function Detail(props) {
  // 랜더링 후에 동작 합니다
  //여기적은 코드는 컴포넌트 로드 & 업데이트 마다 실행됨
  useEffect(() => {
    setTimeout(() => { setAlert(false) }, 5000);
  })

  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  let [num, setNum] = useState('');


  let { id } = useParams();
  console.log(id);
  let 찾은상품 = props.shoes.find(function (x) {
    return x.id == id
  })

  return (


    <div className="container">

      {
        alert == true ? <div className="alert alert-warning">5초 이내 구매시 할인</div> : null
      }
      {count}
      <button onClick={() => { setCount(count + 1) }}>버튼</button>
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  )
}

export default Detail;