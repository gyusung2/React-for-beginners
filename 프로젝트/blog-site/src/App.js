/*eslint-disable*/ /*Lint 끄는*/
//  강의 :중요한 데이터는 변수말고 state에 담습니다
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = '대전 맛집'
  let [logo , setLogo] = useState('음식Blog');
  let [글제목, 글제목변경] = useState(['탄방동 음식 추천','선화동 음식 추천','월평동 음식 추천']);
  let [따봉 , 따봉변경] = useState([0 , 0 , 0]);
  //          state 변경 함수
  let [modal, setmodal] = useState(false);


  return (
    <div className="App">
     <div className='black-nav'>
       <h4>{logo}</h4>
     </div>
     {/* <div className='list'>
       <h4>{글제목[0]}<span onClick={()=>{ 따봉변경(따봉+1)}}>👍</span>{따봉}</h4>
       <p>5월 24일 발행</p>

     </div>
     <div className='list'>
       <h4>{글제목[1]}<span>👍</span></h4>
       <p>5월 24일 발행</p>

     </div>
     <div className='list'>
       <h4 onClick={()=>{setmodal(!modal)}} >{글제목[2]}<span>👍</span></h4>
       <p>5월 24일 발행</p>

     </div> */}
  {/* a : array 안에 있던 데이터 */}
  {/* i : 반복문이 돌 때 마다 0부터 1씩 증가하는 함수*/}

     {
          글제목.map(function(a ,i){
            return  ( <div className='list'>
          <h4 onClick={()=>{setmodal(!modal)}}>{글제목[i]} <span onClick={()=>{ 
          let copy = [...따봉];
          copy[i] = copy[i] + 1;
          따봉변경(copy)  
          }}>👍</span> {따봉[i]} 
          </h4> 
       <p>5월 24일 발행</p>

     </div>
  
         )
       })
     }
     
     {/* 삼항 연산자 */}
        {
          modal == true ? <Modal/> : null
        }
      

      <button onClick={()=>{
        let copy =[...글제목];
        copy.sort();
        글제목변경(copy)
      }}>가나다라순정렬</button>


      <button onClick={ ()=>{ 
        let copy = [...글제목];  /*[...글제목]*/
        copy[0] = '미세노 센세';
        글제목변경(copy)
      } }> 수정버튼 </button>
      {/* <button onClick={()=>{ b(['미세노 센세','선화동 음식 추천','월평동 음식 추천'])}}>Click !</button> */}
    </div>
  );
}

function Modal(props) {
  return(
   
        <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
     
  )
}


export default App;
