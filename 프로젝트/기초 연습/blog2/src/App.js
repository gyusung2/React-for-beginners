/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = ['나이키'];
  let [title , setTitle] = useState(['스포츠 브랜드 추천', '의류 브랜드 추천', '신발 브랜드 추천'])
  let [like , setLike] = useState(0);
  let [modal ,setModal] = useState(false);
  return (
    
    <div className="App">
     <div className='black-nav'>
       <h4>미니블로그</h4>
     </div>
     <div className="list">
        <h4>{title[0]}<span onClick={()=>{
          setLike(like + 1)
        }}>👍</span>{like}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{
          setModal(!modal)
        }}>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    
  {
  modal == true ? <Modal></Modal> : null

  }
         
    </div>
    
  );
}

function Modal() {
  return (
    <>    
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    </>

  )
}
export default App;
