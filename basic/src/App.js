import logo from './logo.svg';
import './App.css';
import Box from './component/Box'

function App() {
  return (
    <div>
      <Box name = '손흥민' num ={7}/>
      <Box name = '케인' num ={10}/>
      <Box name = '케빈데브라이너' num ={17}/>

    </div>
  );
}

export default App;
//컴포넌트 만드는 단축키 : rafce
//props : 함수의 매개변수와 같은 존재
// props로 부모 -> 자식 state 전송하는 법 