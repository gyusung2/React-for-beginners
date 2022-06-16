import React from 'react';
// rafce 컴포넌트 단축키
const Box = (props) => {
  console.log("props", props);
  return (
    <div className='box'>
      <h1>{props.title}</h1>
      <img className='item-img' src={props.item && props.item.img}></img>
      <h2>{props.result}</h2>
    
    </div>
  )
}

export default Box;