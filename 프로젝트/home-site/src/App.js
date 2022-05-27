/* eslint-disable */ 

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = '월평 우동 맛집'; 
  let [글제목, 글제목변경] = useState(['월평동 맛집 추천', '탄방동 맛집 추천', '둔산동 맛집 추천']);
  let [따봉 , 좋아요] = useState(0);
  let [modal , setModal] = useState(false);
  let [title , setTitle] = useState(false);
  
  return (
    <div className="App">
    <div className="black-nav">
      <div onClick={() => {setTitle(!title)}}>블로그</div>
    </div>
    <div className='list'>

      <button onClick={()=>{
        let copy = [...글제목];
        copy[0] = '씨유';
        글제목변경(copy);
      }}> 글 수정</button>

      <button onClick={()=>{
        let copy =[...글제목];
        copy.sort();
        글제목변경(copy);
        }}>가나다라마바사 -박재범(feat.아이유)</button>
                                {/* stat변경함수(새로운 state) */}
      <h4>{글제목[0]} <span onClick={()=>{좋아요(따봉+=1)}}>👍</span> {따봉} </h4>
      <p>2월 17일 발행</p>
    </div>
    <div className='list'>
      <h4>{글제목[1]} <span onClick={()=>{좋아요(따봉+=1)}}>👍</span> {따봉} </h4>
      <p>2월 17일 발행</p>
    </div>
    <div className='list'>
      <h4 onClick={()=>{setModal(!modal)}}>{글제목[2]} <span>👍</span>  {따봉} </h4>
      <p>2월 17일 발행</p>
    </div>

    {
      // 조건식  ? 참 : 거짓
      modal == true ? <Modal></Modal> : null

    }

    {
      title == true ? <Title></Title> : null
    }
    

    </div>
  );
}


function Modal() {
  return (
    <div className="modal">
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p>
    </div>
  )
}
function Title() {
  return(
    <div className='title'>
      <h4>hello</h4>
    </div>
  )
}



export default App;
