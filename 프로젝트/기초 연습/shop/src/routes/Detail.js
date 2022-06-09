import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import {Nav} from 'react-bootstrap';

// let YellowBtn = styled.button`
// background: ${props => props.bg};
// color : black;
// padding : 10px;
// `
// let Box = styled.div `
// background : grey;
// padding : 20px;
// `

function Detail(props){
  let [num, setNum] = useState('')
  let [count , setCount] = useState(0)
  let [alert , setAlert] = useState(true)
  let [탭 , 탭변경] = useState(0)
    useEffect(()=>{
      setTimeout(()=>{ setAlert(false) }, 5000)
    }, []); 

    useEffect(()=>{
      if (isNaN(num) == true){
        alert('그러지마세요')
      }
    }, [num]);
    
    

    let {id} = useParams();
    let 찾은상품 = props.shoes.find(function(x){
      return x.id == id
    });
    
  return(
    // <input onChange((e)=>{ setNum(e.target.value) })  해결못함/> 
    <div className="container">
         {
           alert == true ?
           <div className="alert alert-warning">
             5초 이내 구매하세요
           </div>
           :null

          }
         
          
          
          
         
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
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6">
              <h4 className="pt-5">{props.shoes[id].title}</h4>
              <p>{props.shoes[id].price}</p>
              <p>{props.shoes[id].content}</p>
              {count}
              <button onClick={()=>{setCount(count+1)
              }}>추가</button>
                  <button onClick={()=>{setCount(count-1)

              }}>감소</button>
              <button className="btn btn-danger">주문하기</button>
            </div>

        
        </div> 
                  <Nav variant="tabs"  defaultActiveKey="link0">
            <Nav.Item>
              <Nav.Link onClick={()=>{탭변경(0)}} eventKey="link0">버튼0</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={()=>{탭변경(1)}} eventKey="link1">버튼1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={()=>{탭변경(2)}}  eventKey="link2">버튼2</Nav.Link>
            </Nav.Item>
        </Nav>
        
      
        <Tab 탭={탭}></Tab>
          </div>

  )
}


function Tab(props){
  
if(props.탭 == 0) {
  return <div>내용0</div>
}
else if(props.탭 == 1) {
  return <div>내용1</div>
}
else if(props.탭 == 2) {
  return <div>내용2</div>
}

// 방법2. function TabContent(props){
//   return [ <div>내용0</div>, <div>내용1</div>, <div>내용2</div> ][props.탭]
// }

// 방법3 .function TabContent({탭}){
//   return [ <div>내용0</div>, <div>내용1</div>, <div>내용2</div> ][탭]
// }
}

  export default Detail;