import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, b] = useState(['남자 코트 추천', '강남', '부산']);
  return (
    <div className="App">
      <div style={{ color: 'blue' }} className='black-nav'>
        <h4>블로그</h4>
      </div>
      <div className='list'>
        <h4>{글제목[0]}</h4>
        <p> 11월 12일</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p> 11월 12일</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p> 11월 12일</p>
      </div>
    </div>
  );
}

export default App;
