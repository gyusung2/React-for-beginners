
 🚩 동적인 UI 만드는 step

```
1. html css로 미리 UI 디자인을 다 해놓고

2. UI의 현재 상태를 state로 저장해두고

3. state에 따라서 UI가 어떻게 보일지 조건문 등으로 작성

이렇게 코드짜면 완성입니다. 
```


🚩 step 2. UI의 현재 상태를 state로 저장
```javascript
let [modal, setModal] = useState(false);

```



🚩 step 3. state에 따라서 UI가 어떻게 보일지 작성
```javascript
function App (){

  let [modal, setModal] = useState(false);
  return (
    저 state가 true면 <Modal></Modal>
    false면 아무것도 보여주지마세요
  )
}
```

🚩 toggle 문제
```javascript

function App (){

  let [modal, setModal] = useState(false);

  .
  .
  .
  
  return (
    <div>
      (생략)
      <button onClick={ ()=>{ setModal(!modal) } }> {글제목[0]} </button>
      { 
         modal == true ? <Modal></Modal> : null
      }
    </div>
  )
}
```