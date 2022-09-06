import React from 'react'

const Box = (props) => {
  console.log('props' , props);
  return (
    <div className="Box">
    <p>등번호{props.num}</p>
    <p>{props.name}</p>
  </div>
  )
}

export default Box