import React from 'react';
// rafce 컴포넌트 단축키

const Box = (props) => {
  return(
    <div className='box'>
      <h1>{props.title}</h1>
      <img className='item-img' src="https://m.media-amazon.com/images/I/61OorFhm6SL._AC_SX466_.jpg"></img>
      <h2>Win</h2>
    </div>
    
  )
}
export default Box;