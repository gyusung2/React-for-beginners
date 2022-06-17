import logo from './logo.svg';
import './App.css';
import Box from './component/Box.js'
import { useState } from 'react';
// 1. 박스 2개 (타이틀 , 사진 ,결과)
// 2.  버튼
// 3. 버튼 클릭 시 값이 보임
// 3번 4번의 아이템을 가지고 누가 이겼는지 승패를 나눈다.
// 박스 테두리가 결과에 따라 색이 변한다. 지면 빨간색, 이기면 초록색, 비기면 검정색이 보인다.


function App() {

  return (
    <div>
    <div className='main'>
     <Box title="You" ></Box>
     <Box title="Computer"></Box>
    </div>
    <div className='main'>
      <button>가위</button>
      <button>바위</button>
      <button>보</button>
    </div>
    </div>
  );
    
}





export default App;
