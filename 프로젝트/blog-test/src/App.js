/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = "05월 31일자";
  let [ 글제목 , 글제목변경 ] = useState(['아디다스' , '나이키' , '뉴발란스']);
  let [따봉, 따봉추가] = useState([0 , 0 , 0]);
  let [modal , setModal] = useState(false);

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>블로그</h4>
      </div>
      {/* <div className='list'>
        <h4 onClick={()=>{setModal(!modal)}}>{글제목[0]}<span onClick={()=>{따봉추가(따봉+1)}}> 👍</span> {따봉} </h4>
        <p>5월 31일 발행</p>
      </div>
      <div className='list'>
      <h4>{글제목[1]}</h4>
        <p>5월 31일 발행</p>
      </div>
      <div className='list'>
      <h4>{글제목[2]}</h4>
        <p>5월 31일 발행</p>
      </div> */
      
      
      글제목.map(function(a , i){
        return (
          <div className='list'>
           <h4 onClick={()=>{setModal(!modal)}}>{글제목[i]}<span onClick={()=>{
             let copy = [...따봉];
             copy[i] = copy[i] + 1;
             따봉추가(copy);
             }}> 👍</span> {따봉[i]} </h4>
            <p>5월 31일</p>
          </div>
        )
      })
      }

    

      {
        modal == true ? <Modal></Modal> : null
      }

      

      <button onClick={()=>{
        let copy = [...글제목];
        copy[0] = '슈퍼스타';
        글제목변경(copy)
      }}>변경</button>
      <button onClick={()=>{
        let copy =[...글제목];
        copy.sort();
        글제목변경(copy);
      }}>정렬</button>
  
    </div>
  );
}





function Modal(){
  return (
      <>    
      <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
      </div>
      </>

  )
}


export default App;
