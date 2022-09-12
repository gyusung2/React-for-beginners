JSX 문법 1. html에 class 넣을 땐 className
```
 class=" " 넣고 싶으면 className이라고 써야합니다.

```

JSX 문법 2. 변수를 html에 꽂아넣을 때는 {중괄호}
```javascript
function App(){

  let post = '강남 우동 맛집';
  return (
    <div className="App">
      <div className="black-nav">
        <div>블로그임</div>
        <div>{ post }</div>
      </div>
    </div>
  )
}
```
JSX 문법 3. html에 style속성 넣고싶으면 
```javascript
<div style={ {color : 'blue', fontSize : '30px'} }> 글씨 </div>
```

```javascript
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

```