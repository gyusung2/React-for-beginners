import logo from './logo.svg';
import './App.css';
import Box from './component/Box.js'
import { useState } from 'react';

function App() {
  const [cnt ,setCnt] = useState(0);
  return (
    <div className="App">
      <p>손님</p>{cnt}
      <button onClick={()=>{
        setCnt(cnt+1)
      }}>클릭✔</button>
    </div>
  );
}





export default App;
