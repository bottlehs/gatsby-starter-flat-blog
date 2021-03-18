---
templateKey: blog-post
title: ES6 Spread & Rest 연산자
date: 2021-03-14T18:15:44.771Z
description:
  ES6부터 가변 인자를 표현할 '...' 키워드가 추가 되었다. 기존에는 배열 값을 함수 임자로 넘기려면 apply()
  내장 메서드나 argments 를 통해 변수를 받아서, 이를 Array.prorotype.slice() 함수로 잘라내야 했지만 '...'
  키워드를 이용하면 여러 개의 인자를 넘길 수 있다. 이는 Spread 연산자라고 한다.
tags:
  - ES6
  - Spread
  - Rest
  - JavaScript
  - ECMAScript6
---

![ES6 Spread & Rest 연산자](/assets/es6.png "ES6 Spread & Rest 연산자")

ES6부터 가변 인자를 표현할 `...` 키워드가 추가 되었다. 기존에는 배열 값을 함수 임자로 넘기려면 `apply()` 내장 메서드나 `argments` 를 통해 변수를 받아서, 이를 Array.prorotype.slice() 함수로 잘라내야 했지만 `...` 키워드를 이용하면 여러 개의 인자를 넘길 수 있다. 이는 Spread 연산자라고 한다.

```javascript
function coffee(americano, espresso) {
  return americano + espresso
}
const data = [10, 20]
const result = coffee(...data)
console.log(result) // 30
```

위와 같이 배열에 있는 요소를 자동으로 인자로 치환하여 coffee 함수를 호출한다. 또한, 아래와 같이 Spread 연산자를 활용하여 배열을 작성할 수 있다.

```javascript
const coffee1 = [10, 20]
const coffee2 = [30, 40]
const result = [0, ...coffee1, ...coffee2, 50]

console.log(result) // [0,10,20,30,40,50]
console.log(result.length) // 6
```

문자열을 각 문자로 배열을 만들기 위하여 Spread 연산자를 활용할 수 있다.

```javascript
const result = [..."abcde"]
console.log(result) // ["a","b","c","d","e"]
```

나머지(Rest) 연산자는 함수의 마지막 파라미터에 "..." 를 붙이는데, 아래와 같이 사용할 수 있다.

```javascript
function coffee(americano, espresso, ...arr) {
  console.log(arr) // 30,40,50;
}
coffee(10, 20, 30, 40, 50)
```

[ES6 Spread & Rest 연산자](http://www.google.co.kr)
