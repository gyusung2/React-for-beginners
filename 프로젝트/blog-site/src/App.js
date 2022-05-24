import logo from './logo.svg';
import './App.css';

function App() {
  let post = '대전 맛집'
  return (
    <div className="App">
     <div className='black-nav'>
       <h4 style={{color : 'skyblue'}}>Blog</h4>
     </div>
       <h3>{post}</h3>
    </div>
  );
}

export default App;
