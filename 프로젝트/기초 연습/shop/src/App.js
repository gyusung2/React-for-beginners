import logo from './logo.svg';

import './App.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import bg from './img/bg.png';
import { useState } from 'react';
import data from './data.js';
import{Routes, Route, Link , useNavigate , Outlet} from 'react-router-dom'
import Detail from './routes/Detail.js';
import axios  from 'axios';
import Cart from './routes/Cart.js'





function App(){
  let [shoes , setShoes] = useState(data);
  let navigate = useNavigate();
  let [cnt , setCnt] = useState(0);
  return (
    <div className='App'>
        <Navbar bg="white" variant="black">
          <Container >
         
          <Navbar.Brand href="#home" className='navbar' onClick={()=>{navigate('/')}}>ShoeShop</Navbar.Brand>
         
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}} className="link" to = '/'>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail/1')}} className="link" to = '/'>Best</Nav.Link>
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
                <Card shoes={shoes[i]} i ={i} key ={i}></Card>
              )
            })
          }
        </div>
        </div>
        
        <button onClick={()=>{ 
         
          axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((결과)=>{
            let copy = [...shoes, ...결과.data]
            setShoes(copy)
            setCnt(cnt+1);
            })
            .catch(()=>{
              console.log('실패');
            })
            
            if(cnt == 1){
              setCnt(cnt+1);
              axios.get('https://codingapple1.github.io/shop/data3.json')
              .then((결과)=>{
                let copy = [...shoes, ...결과.data]
                setShoes(copy)
                })
                .catch(()=>{
                  console.log('실패');
                })
            }
            if (cnt == 2) {
              alert('없어요')
            }
        }}>더 보기</button>
        </>
        }></Route>

        
        <Route path="/detail/:id" element= {<Detail shoes={shoes} ></Detail>}></Route>
        <Route path='*' element={<div>없는 페이지 입니다.</div>}></Route>





        <Route path="/about" element= {<About></About>}>
        <Route path="member" element= {<div>멤버</div>}></Route>
        <Route path="location" element= {<div>대전</div>}></Route>
        </Route>

        <Route path="/event" element= {<Event></Event>}>
        <Route path="event1" element= {<div>첫 주문시 양배추 서비스</div>}></Route>
        <Route path="event2" element= {<div>생일 쿠폰 서비스</div>}></Route>
        </Route>

        <Route path='/cart' element={<Cart></Cart>}></Route>

    
        



      </Routes>


      <div>
      </div>
    </div>
      
    
  )
}

function Card(props) {
  return (
    <div className="col-md-4">
      <Link to='/detail/1'>
          <img src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'} width="80%" />
        </Link>
          <h4>{props.shoes.title}</h4>
          <p>{props.shoes.price}</p>
        </div>
  )
}


function About(){
  return (
    <div>
      <h4>about페이지임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
    )
}





export default App;
