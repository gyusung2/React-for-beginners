import React from "react";

const Box = (props) => {
  // console.log('props', props);
  return (
    <div className="box">
      <div>{props.title}</div>
      <img className="item-img" src={props.item && props.item.img} />
      {/*       <img className="item-img" src ={props.item && props.item.img}/> : 비교하여 NULL이면 NULL 리턴 */}
      <h2>Win</h2>
    </div>
  );
};

export default Box;
