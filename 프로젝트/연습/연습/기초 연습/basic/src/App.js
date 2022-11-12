import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Box from './component/Box'

function App() {
  let counter = 0;
  const [counter2 , setcounter2] = useState(0)
  const increase  = () => {
    counter = counter + 1;
    console.log(counter);
    setcounter2(counter2 + 1)
    console.log('counter는', counter , 'counter2는' ,setcounter2);
  };
  return (
    <div>
      {/* <Box name = '손흥민' num ={7}/>
      <Box name = '케인' num ={10}/>
      <Box name = '케빈데브라이너' num ={17}/> */}
      <div>{counter}골</div>
      <div>state : {counter2}</div>
      <button onClick={increase}>클릭!</button>

    </div>
  );
}

export default App;
// state값이 바뀌면 UI도 바뀐다(다시 그려줌)