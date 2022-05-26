 🚩 자바스크립트 map 함수 쓰는 법 

```javascript

    var 어레이 = [2,3,4];
    어레이.map(function(){
    console.log(1)
    });

    기능 1. array에 들어있는 자료갯수만큼 그 안에 있는 코드를 반복실행해줍니다.

    저러면 진짜로 console.log(1) 3번 실행됨 

```
```javascript
var 어레이 = [2,3,4];
어레이.map(function(a){
  console.log(a)
});

기능 2. 콜백함수에 파라미터 아무렇게나 작명하면

그 파라미터는 어레이 안에 있던 모든 자료를 하나씩 출력해줍니다.

(그냥 소괄호안에 있는 함수를 콜백함수라고 합니다)

저러면 진짜로 2, 3, 4가 콘솔창에 출력됨 
```

```javascript
var 어레이 = [2,3,4];
var newArray = 어레이.map(function(a){
  return a * 10
});
console.log(newArray)

기능3. return 오른쪽에 뭐 적으면 array로 담아줍니다.

그리고 map() 쓴 자리에 남겨줍니다.

그래서 변수에 담아서 출력해봤더니 진짜로 array에 담아주긴 하는군요 

newArray는 [20, 30, 40] 이 출력됩니다. 
```