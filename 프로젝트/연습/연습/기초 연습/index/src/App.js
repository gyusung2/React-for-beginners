import logo from './logo.svg';
// css 경로
import './App.css';

function App() {

    let post = '대전 선화동 맛집';

  return (
    <div className="App">
      {/* // className으로 작성 할 것  */}
    <div className="black-nav">
    <h4 style={{color : 'royalblue' , fontSize :'30px'}}>블로그</h4>
    </div>
    <h4>{post}</h4>
    </div>
  );
}

export default App;
