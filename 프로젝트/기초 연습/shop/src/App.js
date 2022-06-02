import logo from './logo.svg';

import './App.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import bg from './img/bg.png';
import { useState } from 'react';
import data from './data.js';



function App(){
  let [shoes , buy] = useState(data);
  return (
    <div>
      <Navbar bg="white" variant="black">
        <Container >
        <Navbar.Brand href="#home" className='navbar'>ShoeShop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#features">New</Nav.Link>
          <Nav.Link href="#home">Best</Nav.Link>
          <Nav.Link href="#pricing">Cart</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <div>
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

      

     
  


export default App;
