
1. function을 이용해서 함수를 하나 만들어주고 작명합니다. 

2. 그 함수 안에 return () 안에 축약을 원하는 HTML을 담으면 됩니다.

3. 그럼 원하는 곳에서 <함수명></함수명> 사용하면 아까 축약한 HTML이 등장합니다.

 

```javascript

function App (){
  return (
    <div>
      (생략)
      <Modal></Modal>
    </div>
  )
}

function Modal(){
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
```
 🚩 html 코드짤 때 유의점
    return ( ) 안에 두개의 html 태그 나란히 적기 이런거 안됩니다. 
    return ( ) 내부는 하나의 태그로 시작해서 하나의 태그로 끝나야합니다. 
```javascript
return(
  <div></div>
  <div></div>
)
```


```javascript
방법 1.
return(
  <div>
    <div></div>
    <div></div>
  </div>
)



<div> 두개를 나란히 적고 싶으면 저렇게 하나의 div로 또 감싸거나 해야합니다.
의미없는 div 쓰기 싫으면 <> </> 이걸로 감싸도 됩니다. s
fragment 문법이라고 합니다. 
```


 🚩 Component 만들 때 주의점 
```
1. component 작명할 땐 영어대문자로 보통 작명합니다.

2. return () 안엔 html 태그들이 평행하게 여러개 들어갈 수 없습니다.

3. function App(){} 내부에서 만들면 안됩니다. 

왜냐면 function App(){} 이것도 다시보니 컴포넌트 생성문법이죠?

component 안에 component 를 만들진 않습니다. 

4. <컴포넌트></컴포넌트> 이렇게 써도 되고 <컴포넌트/> 이렇게 써도 됩니다. 
```

 🚩 arrow function 써도 됩니다
```javascript

function Modal(){
  return ( <div></div> )
}

let Modal = () => {
  return ( <div></div>) 
}
```

 🚩 어떤 HTML들을 Component 만드는게 좋을까
```
기준은 없습니다만 관습적으로 어떤 부분을 주로 Component화 하냐면

- 사이트에 반복해서 출현하는 HTML 덩어리들은 Component로 만들면 좋습니다.

- 내용이 매우 자주 변경될 것 같은 HTML 부분을 잘라서 Component로 만들면 좋습니다.

- 다른 페이지를 만들고 싶다면 그 페이지의 HTML 내용을 하나의 Component로 만드는게 좋습니다.

- 또는 다른 팀원과 협업할 때 웹페이지를 Component 단위로 나눠서 작업을 분배하기도 합니다. 

 

님들 함수문법 언제씁니까

1. 긴 코드 축약할 때 2. 다른 곳에서 코드 재사용할 때 3. 복잡한 코드를 작은 기능으로 나눌 때 쓰지 않습니까 

컴포넌트는 그냥 함수 문법이랑 똑같아서 용도도 똑같습니다. 
```

 🚩 Component의 단점
```
일단 HTML 깔끔하게 쓰려고 Component를 수백개 만들면 그것 만으로도 관리가 힘듭니다.

예를 들어서 function Modal 안에서 글제목 state를 쓰고싶어서 {글제목} 이렇게 쓰면 잘 안되는데 

왜냐면 당연히 자바스크립트에선

한 function 안에 있는 변수를 다른 function에서 맘대로 쓸 수 없어서 그렇습니다. 

props라는 문법을 이용해 state를 <Modal>까지 전해줘야 비로소 사용가능합니다.

 

props를 배우진 않았지만 듣기만 해도 귀찮죠?

그러니까 리액트 갓 배운 초보처럼 막 온갖 잡다한걸 Component로 쪼개지 말고 꼭 필요한 곳만 Component로 쪼개시길 바랍니다.

```
