/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = ['나이키'];
  let [글제목 , 글제목변경] = useState(['스포츠 브랜드 추천', '의류 브랜드 추천', '신발 브랜드 추천'])
  let [like , setLike] = useState(0)
  return (
    
    <div className="App">
     <div className='black-nav'>
       <h4>블로그</h4>
     </div>
     <div className="list">
        <h4>{글제목[0]}<span onClick={()=>{
          setLike(like + 1)
        }}>👍</span>{like}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <button onClick={()=>{
          let copy = [...글제목];
          copy[0] = '나이키';
          글제목변경(copy)
        }}>클릭 !!</button>
        
         <button onClick={()=>{
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy)
        }}>정렬 클릭 !!</button>
    </div>
  );
}

export default App;
