import { useContext, useEffect, useState } from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import "../App.css";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
import { addItem } from "./../Store.js";
import { useDispatch } from "react-redux";

import axios from "axios";

// let YellowBtn = styled.button`
// background: ${props => props.bg};
// color : black;
// padding : 10px;
// `
// let Box = styled.div `
// background : grey;
// padding : 20px;
// `

function Detail(props) {
  let { id } = useParams();
  let 찾은상품 = props.shoes.find(function (x) {
    return x.id == id;
  });
  let [num, setNum] = useState("");
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  let [탭, 탭변경] = useState(0);
  let dispatch = useDispatch();

  useEffect(() => {
    // 2. localStorage의 데이터를 꺼낸다.
    var myArr = localStorage.getItem("watched");

    // 최초 접속시 localStorage에 데이터가 없을 경우 새로운 배열을 생성한다.
    // ( 혹은 사용자 모두에게 watched 자료형를 localStorage에 넣는 방법도 있다.)
    if (myArr == null) {
      myArr = [];
    } else {
      // myArr에서 자료를 꺼내 따옴표를 제거하고 다시 myArr에 저장한다.
      myArr = JSON.parse(myArr);
    }

    // 3.현재 상품 id를 myArr에 저장한다.
    myArr.push(id);

    // 4.중복된 데이터를 넣지 않는 set 자료형에 myArr를 담아 중복을 제거한다.
    myArr = new Set(myArr);

    // 중복 제거된 set 자료형의 myArr를 일반 배열로 변경한다.
    myArr = [...myArr];

    // 5.localStorage에 데이터를 JSON 자료형으로 저장한다.
    localStorage.setItem("watched", JSON.stringify(myArr));
  }, []);

  let [fade2, setFade2] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 5000);
  }, []);

  useEffect(() => {
    if (isNaN(num) == true) {
      alert("그러지마세요");
    }
  }, [num]);

  useEffect(() => {
    setTimeout(() => {
      setFade2("end");
    }, 100);
    return () => {
      setFade2("");
    };
  }, []);

  useEffect(() => {
    console.log(찾은상품.id);
  }, []);

  return (
    <div className={"container  start " + fade2}>
      {alert == true ? (
        <div className="alert alert-warning">5초 이내 구매하세요</div>
      ) : null}

      {/* {
            alert == true ?
          <div className="alert alert-warning">
            5초이내 구매하세요 !
          </div>
          :null

          } */}

      {/* <Box>
          <YellowBtn bg="blue">버튼</YellowBtn>
          <YellowBtn bg="royalblue">버튼</YellowBtn>
        </Box> */}
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].price}</p>
          <p>{props.shoes[id].content}</p>
          {count}
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            추가
          </button>
          <button
            onClick={() => {
              setCount(count - 1);
            }}
          >
            감소
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(addItem({ id: 1, name: "Red Knit", count: 1 }));
            }}
          >
            주문하기
          </button>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Tab 탭={탭}></Tab>
    </div>
  );
}

//방법1 function Tab(props){

// if(props.탭 == 0) {
//   return <div>내용0</div>
// }
// else if(props.탭 == 1) {
//   return <div>내용1</div>
// }
// else if(props.탭 == 2) {
//   return <div>내용2</div>
// }
// }

// 방법2. function TabContent(props){
//   return [ <div>내용0</div>, <div>내용1</div>, <div>내용2</div> ][props.탭]
// }

function Lasted(props) {
  let history = useHistory();
  var myArr = localStorage.getItem("watched");
  myArr = JSON.parse(myArr);

  return (
    <div className="lasted">
      <h3>최근본상품 목록</h3>
      {myArr.map((a, i) => {
        return (
          <div
            className="row"
            shoes={props.shoes[i]}
            i={i}
            key={i}
            onClick={() => {
              history.push("/detail/" + props.shoes[a].id);
            }}
          >
            <img
              src={
                "https://codingapple1.github.io/shop/shoes" +
                (props.shoes[a].id + 1) +
                ".jpg"
              }
              width="100%"
              alt="이미지"
            />
            <h5>{props.shoes[a].title}</h5>
            <p>{props.shoes[a].price}</p>
          </div>
        );
      })}
    </div>
  );
}

function Tab({ 탭 }) {
  let [fade, setFade] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      setFade("");
    };
  }, [탭]);

  return (
    <div className={"start " + fade}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]}
    </div>
  );
}

export default Detail;
