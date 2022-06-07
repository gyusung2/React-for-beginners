/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = ['나이키'];
  let [title, setTitle] = useState(['스포츠 브랜드 추천', '의류 브랜드 추천', '신발 브랜드 추천'])
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [입력값, 입력값변경] = useState('');
  let [sidetitle , setSideTitle] = useState(0);
  return (

    <div className="App">
      <div className='black-nav'>
        <h4>미니블로그</h4>
      </div>


      {
        title.map(function (a, i) {
          return (
            <div className="list">
              <h4 onClick={() => {
                setModal(!modal); setSideTitle(i)
              }}>{title[i]}
                <span onClick={() => {
                  let copy = [...like];
                  copy[i] = copy[i] + 1;
                  setLike(copy)
                }}>👍</span>{like[i]}</h4>
              <p>2월 17일 발행</p>
              <button onClick={()=>{ 
              let copy = [...title];
              copy.splice(i, 1);
              setTitle(copy);
           }}>삭제</button>
            </div>
          )
        })
      }

<div>
      <input onChange={ (e)=>{ 입력값변경(e.target.value) } } />
      <button onClick={()=>{ 
        let copy = [...title];
        copy.unshift(입력값);
        setTitle(copy)
      }}>글발행</button>
    </div>

      {/* <div className="list">
        <h4 onClick={()=>{
           setModal(!modal)
        }}>{title[0]}<span onClick={()=>{
          setLike(like + 1)
        }}>👍</span>{like}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}


      {
        modal == true ? <Modal title ={title} sidetitle={sidetitle} ></Modal> : null

      }

    </div>

  );
}

function Modal(props) {
  return (
    <>
      <div className='modal'>
        <h4>{ props.title[props.sidetitle] }</h4>
        <p>날짜</p>
        <p>상세내용</p>
      <button onClick={()=>{ //해결 못함
      props.setTitle(); 
       let copy =[...title];
       copy.props
       copy[0] = '슈퍼스타';
       setTitle(copy)}}>글 수정</button>
      </div>
      
    </>

  )
}
export default App;
