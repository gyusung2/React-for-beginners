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
     

  <Navbar bg="white" variant="black">
      <Container>
      <Navbar.Brand href="#home" className='navbar'>ShoeShop</Navbar.Brand>
      <Nav className="me-auto">
            <Nav.Link  className="link" to = '/'>home</Nav.Link>
            <Nav.Link className="link" to = '/detail'>Best</Nav.Link>
            <Nav.Link className="link" to = '/'>New</Nav.Link>
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
    
     
    </Routes>
  


   
  </div>
  );

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