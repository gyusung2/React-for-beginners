import logo from './logo.svg';
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import bg from './img/bg.png';
import data from './data.js';
import { useState } from 'react';
import { Route, Link, Routes, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail.js'


function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();
  return (
    <div className="App">

      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home" className='navbar' onClick={() => { navigate('/') }}>ShoeShop</Navbar.Brand>

            <Nav className="me-auto">
              <Nav.Link onClick={() => { navigate('/') }} className="link" to='/'>Home</Nav.Link>
              <Nav.Link onClick={() => { navigate('/detail/1') }} className="link" to='/'>Best</Nav.Link>
              <Link className="link" to='/'>New</Link>
              <Link className="link" to='/cart'>Cart</Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<div>
            <div>
              <div className="main-bg" style={{ backgroundImage: 'url(' + bg + ')' }}></div>
            </div>
            <div className="container">
              <div className="row">
                {
                  shoes.map((a, i) => {
                    return (
                     
                      <Card shoes={shoes[i]}   key={i} i={i}></Card>
                    )
                  })
                }
              </div>
            </div>
          </div>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/detail/:id" element={<Detail shoes={shoes}></Detail>} />
        </Routes>

        <Routes>
          <Route path="/event" element={<EventPage />}>
            <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
            <Route path="two" element={<p>생일기념 쿠폰받기</p>}></Route>
          </Route>
        </Routes>

      </div>


    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}
function About() {
  return (
    <div>
      <h4>회사 정보</h4>
    </div>
  )
}

function EventPage() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}



export default App;
