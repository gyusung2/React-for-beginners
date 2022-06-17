import logo from './logo.svg';
import './App.css';
import Box from './component/Box.js'
import { useState } from 'react';
// 1. 박스 2개 (타이틀 , 사진 ,결과)
// 2.  버튼
// 3. 버튼 클릭 시 값이 보임
// 3번 4번의 아이템을 가지고 누가 이겼는지 승패를 나눈다.
// 박스 테두리가 결과에 따라 색이 변한다. 지면 빨간색, 이기면 초록색, 비기면 검정색이 보인다.

 const choice = {
  rock:{
    name:"Rock",
    img:"https://img.hankyung.com/photo/202205/BF.30060884.1-1200x.jpg"
  },
  scissors:{
    name:"Scissors",
    img:"http://img.danawa.com/prod_img/500000/111/986/img/12986111_1.jpg?shrink=330:330&_v=20210311153704"
  },
  paper:{
    name:"Paper",
    img:"https://m.media-amazon.com/images/I/61OorFhm6SL._AC_SX466_.jpg"
  },
 }

function App() {
  const [userSelect , setUserSelect] = useState(null)

  const play = (userChoice)=>{
   setUserSelect(choice[userChoice]) 

  }

  return (
    <div>
    <div className='main'>
      {/* const [userSelect , setUserSelect] = useState(null) 값을 넣어줌 */}
     <Box title="You" item={userSelect}></Box>
     {/* <Box title="Computer"></Box> */}
    </div>

    <div className='main'>
      <button onClick={()=> play("scissors")}>가위</button>
      <button onClick={()=> play("rock")}>바위</button>
      <button onClick={()=> play("paper")}>보</button>
    </div>
    </div> 
  );
    
}





export default App;
