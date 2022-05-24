import logo from './logo.svg';
// css 경로
import './App.css';
import { useState } from 'react';

function App() {

    let post = '대전 선화동 맛집';
    // state 문법 사용법
    let [logo , setLogo] = useState('배달의 민족');
    let [글제목 , b] = useState('오늘의 메뉴 추천');
    let[contentbox, box] = useState(['선화동 메뉴 추천' , '탄방동 메뉴 추천', '월평동 메뉴 추천']);

  return (
    <div className="App">
      {/* // className으로 작성 할 것  */}
    <div className="black-nav">
      <h4 style={{color : 'royalblue' , fontSize :'30px'}}>{logo}</h4>
    </div>
    <div className='list'>
    <h4>{contentbox[0]}</h4>
    <p>5월 24일 발행</p>
    </div>
    <div className='list'>
    <h4>{contentbox[1]}</h4>
    <p>5월 24일 발행</p>
    </div>
    <div className='list'>
    <h4>{contentbox[2]}</h4>
    <p>5월 24일 발행</p>
    </div>
    <h4>{post}</h4>
    </div>
  );
}

export default App;
