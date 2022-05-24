import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = '대전 맛집'
  let [logo , setLogo] = useState('음식Blog');
  let [글제목, b] = useState(['탄방동 음식 추천','선화동 음식 추천','월평동 음식 추천']);
  return (
    <div className="App">
     <div className='black-nav'>
       <h4>{logo}</h4>
     </div>
     <div className='list'>
       <h4>{글제목[0]}</h4>
       <p>5월 24일 발행</p>

     </div>
     <div className='list'>
       <h4>{글제목[1]}</h4>
       <p>5월 24일 발행</p>

     </div>
     <div className='list'>
       <h4>{글제목[2]}</h4>
       <p>5월 24일 발행</p>

     </div>
    
    </div>
  );
}

export default App;
