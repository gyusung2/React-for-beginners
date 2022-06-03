import { useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props){

    let {id} = useParams();
    console.log(id);
    let 찾은상품 = props.shoes.find(function(x){
      return x.id == id
    });
  
    return(
      <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
      )
  }


  export default Detail;