/*eslint-disable*/ 
import logo from './logo.svg';
// css 경로
import './App.css';
import { useState } from 'react';

function App() {

  // state 문법 사용법
  let [logo , setLogo] = useState('오늘 메뉴');
  let[글제목, 글제목변경] = useState(['선화동 메뉴 추천' , '탄방동 메뉴 추천', '월평동 메뉴 추천']);
  let post = '🍚';
    
   
    //          state 변경 함수
    let [따봉, 따봉변경] = useState(0);
  return (
    <div className="App">
      {/* // className으로 작성 할 것  */}
    <div className="black-nav">
      <h4 style={{color : 'royalblue' , fontSize :'30px'}}>{logo}</h4>

    </div>
    <div className='list'>
    <h4>{글제목변경[0]} <span onClick={()=>따봉변경(따봉+1)}>👍</span> {따봉} </h4>
    <p>5월 23일 발행</p>
    </div>


    <div className='list'>
    <h4>{contentbox[1]}</h4>
    <p>5월 24일 발행</p>
    </div>
    <div className='list'>
    <h4>{contentbox[2]}</h4>
    <p>5월 25일 발행</p>
    </div>
    <h4>{post}</h4>
      <button onClick={ ()=>{
        let copy = [...menu];
      contentbox[0] = "쿠켄";
      menu(contentbox);
      }}>✔</button>
    </div>
  );
}

export default App;
