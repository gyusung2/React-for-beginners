import logo from './logo.svg';
import './App.css';

function App() {

  let post = '강남 우동 맛집'
  return (
    <div className="App">
      <div style={{color: 'blue'}} className='black-nav'>
        <h4>블로그</h4>
      </div>
        {post}
    </div>
  );
}

export default App;
