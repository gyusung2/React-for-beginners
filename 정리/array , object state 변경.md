```javascript

array, object state 변경하는 법
문제 답  :
function App(){
  let [글제목, 글제목변경] = useState( ['남자코트 추천', '강남 우동맛집', '파이썬 독학'] );
  return (
    <button onClick={ ()=>{
      let copy = [...글제목];
      copy[0] = '여자코트 추천';
      글제목변경(copy)
    } }> 수정버튼 </button>
  )
}

```

array/object 동작원리

1. 자바스크립트는 array/object 자료를 하나 만들면
   예를 들어서 let arr = [1,2,3] 이렇게 만들면
   [1,2,3] 자료는 램이라는 가상공간에 몰래 저장이 되고
   let arr 변수엔 그 자료가 어디있는지 가리키는 화살표만 담겨있습니다.

2. 그래서 array/object 자료를 복사하면 이상한 일이 일어나는데 예를 들면

```javascript
let data1 = [1, 2, 3];
let data2 = data1; //복사문법임
```

이런 식으로 사용하면 복사가 됩니다.
data1에 있던 자료를 data2에 복사한다는 뜻임
그럼 data2 출력해보면 [1,2,3] 이게 잘 나옵니다.
근데 data1과 data2는 각각 [1,2,3]을 별개로 저장하는게 아니라
data1과 data2는 똑같은 값을 공유합니다.
data1을 변경하면 data2도 자동으로 변경되고 그렇습니다.

왜냐면 변수에는 화살표만 저장된다니까요
그래서 방금 님들 화살표를 복사한 것임
그래서 data1, data2는 똑같은 화살표를 가지게 됩니다. 같은 자료를 가리킴

3. 그래서 같은 화살표를 가지고 있는 변수끼리는
   등호로 비교해도 똑같다고 나옵니다.

```javascript
let data1 = [1, 2, 3];
let data2 = data1; //복사
data2[0] = 1000; //data2 내부 변경
console.log(data2 === data1); //true 나올듯
```

리액트에서 array/object state를 수정하고 싶으면
독립적인 카피본을 만들어서 수정하는게 좋습니다.
[...기존state]
{...기존state}
이렇게 하면 독립적인 카피가 하나 생성됩니다.

응용문제 : 가나다순 정렬버튼과 기능 만들기

```javascript
function App() {
  let [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);
  return (
    <button
      onClick={() => {
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}
    >
      {" "}
      정렬버튼{" "}
    </button>
  );
}
```
