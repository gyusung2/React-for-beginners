/* eslint-disable */ 

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = '월평 우동 맛집'; 
  let [글제목, 글제목변경] = useState(['월평동 맛집 추천', '탄방동 맛집 추천', '둔산동 맛집 추천']);
  let [따봉 , 좋아요] = useState([0 , 0 , 0]);
  let [modal , setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');
  const [시간 , 시간출력] = useState('00:00:00');

  const time =() => {
    const date = new Date();
    const hours =String(date.getHours()).padStart(2,"0");
    const min =String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    시간출력(`${hours}:${min}:${seconds}`)
  }
  const startTimer = () => {
    setInterval(time , 1000)
  }
  startTimer()
  return (
    <div className="App">
    <div className="black-nav">
      <div>블로그</div>
    </div>
    {/* <div className='list-nav'>
    <div className='list'>

                                stat변경함수(새로운 state)
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
    </div> */}
    
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

    {
      글제목.map(function(a , i){
        return (
          <div className = "list" key={i}>
            <h4 onClick={()=>{setModal(!modal); setTitle(i)}}>{글제목[i]}<span onClick={(e)=>{e.stopPropagation()
              let copy = [...따봉];
              copy[i] = copy[i] + 1;
              좋아요(copy)}
            }>👍</span> {따봉[i]}</h4>
            <p>5월 27일 발행</p>
            <button onClick={(e)=>{
              let copy = [...글제목];
              copy.splice(i , 1);
              글제목변경(copy)
              copy[i] = copy[i] + 1;
              좋아요(copy)
            }}>삭제</button>

            <p>{시간}</p>
          </div>
        )
      })
      
    }
    <div>
    <input onChange={(e)=>{ 입력값변경(e.target.value) }} /><button onClick={(e)=>{
        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy) 
        
      }}>추가</button>
    </div>
    
    {
      // 조건식  ? 참 : 거짓
      modal == true ? <Modal title ={title} 글제목 ={글제목} 글제목변경 = {글제목변경}></Modal> : null

    }
    

    </div>
  );
}


function Modal(props) {
  return (
    <div className="modal">
    <h4>{props.글제목[props.title]}</h4>
    <p>날짜</p>
    <p>상세내용</p>
    </div>
  )
}




export default App;
