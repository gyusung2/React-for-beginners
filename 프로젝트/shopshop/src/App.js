import logo from './logo.svg';
import './App.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import {Routes ,Route, Link} from "react-router-dom";

// https://www.fwantastic.com/2020/03/react-reactstrap.html



function App() {
  

  let [shoes] = useState(data)
  

  return (

    
    <div className='App'>

  

    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
      <Link to ="/">홈</Link>
      <Link to ="/detail">상세페이지</Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      </Container>
    </Navbar>

    

      <Routes>
      <Route path="/" element={ 
  <>
   <div className="main-bg"></div>
   <div className="container">
     <div className="row">
       { shoes.map((a, i)=>{
         return <Card shoes={shoes[i]} i={i} ></Card>
        })}
      </div>
    </div> 
  </>
} /> 
      <Route path="/detail" element={ <Detail/> } />
      <Route path="/about" element={ <div>어바웃페이지임</div> } />
    </Routes>

   
  </div>
  );

  function Detail(props) {
    return(
      <div className="row">
    <div className="col-md-6">
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
    </div>
    <div className="col-md-6">
      <h4 className="pt-5">상품명</h4>
      <p>상품설명</p>
      <p>120000원</p>
      <button className="btn btn-danger">주문하기</button> 
    </div>
  </div>
    )
  }

  function Card(props) {
    return(
      <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.i+1) + ".jpg"} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
    )
  
  }

}


export default App;
