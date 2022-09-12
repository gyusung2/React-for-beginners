import logo from './logo.svg';
import './App.css'; //경로
import {useState} from 'react';

function App() {
  let post = '강남 우동 맛집';
  let [글제목 , 글제목변경] = useState(['남자 코트 추천', '맛집추천', '파이선독학'])
  let [따봉, 따봉변경] = useState(0);


  return (
    <div className="App">
      <div>
        <div className ='black-nav'>
        <h4>React </h4>
        </div>
        <div>
          <button onClick={()=>{
            let copy = [...글제목];
            copy.sort();
            글제목변경(copy)}}>수정</button>
          <div className = 'list'>
            <h4>
              {글제목[0]} <span onClick={()=>{따봉변경(따봉+1)}}>👍</span> {따봉}
            </h4>
            <p>2월 17일 발행</p>
          </div>
          <div className = 'list'>
            <h4>
              {글제목[1]}
            </h4>
            <p>2월 17일 발행</p>
          </div>
          <div className = 'list'>
            <h4>
              {글제목[2]}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
