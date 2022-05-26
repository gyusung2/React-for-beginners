/* eslint-disable */ 

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = '월평 우동 맛집'; 
  let [글제목, 맛집] = useState(['월평동 맛집 추천', '탄방동 맛집 추천', '둔산동 맛집 추천']);
  let [따봉 , 좋아요] = useState(0);
  
  return (
    <div className="App">
    <div className="black-nav">
      <div>블로그</div>
    </div>
    <div className='list'>
                                {/* stat변경함수(새로운 state) */}
      <h4 onClick={()=>{맛집(['씨유', '탄방동 맛집 추천', '둔산동 맛집 추천'])}}>{글제목[0]} <span onClick={()=>{좋아요(따봉+=1)}}>👍</span> {따봉} </h4>
      <p>2월 17일 발행</p>
    </div>
    <div className='list'>
      <h4>{글제목[1]} <span>👍</span> {따봉} </h4>
      <p>2월 17일 발행</p>
    </div>
    <div className='list'>
      <h4>{글제목[2]} <span>👍</span>  {따봉} </h4>
      <p>2월 17일 발행</p>
    </div>
    </div>
  );
}

export default App;
