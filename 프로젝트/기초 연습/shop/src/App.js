import logo from './logo.svg';

import './App.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import bg from './img/bg.png';
import { useState } from 'react';
import data from './data.js';
import{Routes, Route, Link , useNavigate , Outlet} from 'react-router-dom'
import Detail from './routes/Detail.js';



function App(){
  let [shoes , buy] = useState(data);
  let navigate = useNavigate();
  return (
    <div className='App'>
        <Navbar bg="white" variant="black">
          <Container >
          <Navbar.Brand href="#home" className='navbar'>ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}} className="link" to = '/'>home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}} className="link" to = '/'>Best</Nav.Link>
            <Link className="link" to = '/'>New</Link>
          </Nav>
          </Container>
        </Navbar>
        


      <Routes>
        <Route path="/" element= {
          <>
      <div className="main-bg" style={{ backgroundImage : 'url(' + bg + ')' }}></div>
      <div className="container">
        <div className="row">
          {/* <Card shoes = {shoes[0]} i ={1}></Card>
          <Card shoes = {shoes[1]} i ={2}></Card>
          <Card shoes = {shoes[2]} i ={3}></Card> */}
          {
            shoes.map((a , i) => {
              return (
                <Card shoes={shoes[i]} i={i}></Card>
              )
            })
          }
        </div>
        </div>
        </>
        }></Route>

        <Route path="/detail/:id" element= {<Detail shoes={shoes} ></Detail>}></Route>
       
        
        <Route path='*' element={<div>없는 페이지 입니다.</div>}></Route>

        <Route path="/about" element={ <About/> }>  
        <Route path="member" element={ <div>멤버들</div> } />
        <Route path="location" element={ <div>회사위치</div> } />
        </Route>
        
        
        <Route path="/event" element={ <Event/> }>  
        <Route path="one" element={ <div>양배추</div> } />
        <Route path="two" element={ <div>생일</div> } />
        </Route>






      </Routes>



      <div>
      </div>
    </div>
      
    
  )
}

function Card(props) {
  return (
    <div className="col-md-4">
          <img src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'} width="80%" />
          <h4>{props.shoes.title}</h4>
          <p>{props.shoes.price}</p>
        </div>
  )
}
function About() {
  return(
    <div>
      <h4>회사 정보</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event() {
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}
    



export default App;
