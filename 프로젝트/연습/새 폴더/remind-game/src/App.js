import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Box from "./component/Box";

// 1 유저는 박스 두개를 볼 수 있다.(타이틀, 사진, 결과).
// 2 유저는 박스 하단에 가위바위보 버튼을 볼 수 있다.
// 3 버튼을 클릭하면 클릭한 아이템이 유저 박스에 보인다.
// 4 버튼을 클릭하면 컴퓨터 아이템은 랜덤하게 선택이 된다.
// 5 3번 4번의 아이템을 가지고 누가 이겼는지 승패를 나눈다.
// 6 박스 테두리가 결과에 따라 색이 변한다. 지면 빨간색, 이기면 초록색, 비기면 검정색이 보인다.

const choice = {
  rock: {
    name: "Rock",
    img: "https://img.bntnews.co.kr/data/bnt/image/2022/06/29/bnt202206290121.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "https://w.namu.la/s/13142cc3185e8aab50bc52e53ed9c38d201e9a1b7f5ce073b4d5df348695ca4141f88267baddde34ebd30b789aafa3cf84e8e96b9382bc55678a0e3aa62e2b5fab5f89b3ee3b4f32a7a1e65e36eade8fc3e2578021e868bd498a7072a8d07e25",
  },
  papper: {
    name: "Papper",
    img: "https://mblogthumb-phinf.pstatic.net/MjAxODA0MjBfMjUg/MDAxNTI0MjIyOTAxNDM5.g2k4RsH90WOUoVE2IDnrb3O1YLnBI4pp86Uj4UkWKDIg.iz168ub-EqHmDo8Q5G4hJy4_vVzBI7kP1vOtg68-ei8g.JPEG.watergus99/IMG_6695.jpg?type=w800",
  },
};
function App() {
  const [userSelect, setUserselect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {// 버튼 실행 함수
    setUserselect(choice[userChoice]); //choice값에서 userChoice 값을 들고 오는 것
    let computerChoice = randomChoice(); //랜덤숫자 돌아가는 (실행) 함수
    setComputerSelect(computerChoice);
  };
  const randomChoice = () => {// 랜덤숫자 돌아가는 (실행) 함수
    let itemArray = Object.keys(choice); // 배열값으로 실행 하게 되는 함수[객체 키값 뽑아 어레이 만들어 주는 함수]
    // console.log(itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];// itemArray에 어레이에 randomItem값을 넣어준다
    return choice[final]; //리턴
  };

  return (
    <>
      <div className="main">
        <Box title="YOU" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
        <h2>{props.result}</h2>
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("papper")}>보</button>
      </div>
    </>
  );
}

export default App;
