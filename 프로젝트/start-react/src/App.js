import logo from './logo.svg';
import './App.css'; //경로
import { useState } from 'react';

function App() {
  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '맛집추천', '파이선독학'])
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);



  return (
    <div className="App">
      <div>
        <div className='black-nav'>
          <h4>React </h4>
        </div>
        <div>
          <button onClick={() => {
            let copy = [...글제목];
            copy.sort();
            글제목변경(copy)
          }}>수정</button>

          {/* <div className='list'>
            <h4>
              {글제목[0]} <span onClick={() => { 따봉변경(따봉 + 1) }}>👍</span> {따봉}
            </h4>
            <p>2월 17일 발행</p>
          </div>
          <div className='list'>
            <h4>
              {글제목[1]}
            </h4>
            <p>2월 17일 발행</p>
          </div>
          <div className='list'>
            <h4>
              {글제목[2]}
            </h4>
            <p>2월 17일 발행</p>
          </div> */}


          {

            글제목.map(function (a, i) {
              return <div className='list'>
                <h4>
                  {글제목[i]} <span onClick={()=> { 
                    let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy)}}>👍</span> {따봉[i]}
                </h4>
                <p>2월 17일 발행</p>
              </div>
            })
          }

        <button onClick={() => { setModal(!modal) }}>모달</button>
        {
          modal == true ? <Modal 글제목변경={글제목변경}  글제목={글제목}/> : null
        }

        {/* <Modal></Modal> */}



      </div>
    </div>
    </div >
  );
}
function Modal(props) { //컴포넌트
  return (
    <div className='modal'>
      <h4>{props.글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{{
        let copyModal  = [...props.글제목];
        copyModal[0] = '아동코트추천';
        props.글제목변경(copyModal) }}}
      >글수정</button>
    </div>
  )
}

export default App;
