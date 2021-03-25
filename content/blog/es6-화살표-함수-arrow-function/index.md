---
templateKey: blog-post
title: ES6 화살표 함수 (arrow function expression)
date: 2021-03-14T13:00:33.383Z
description: ES6에서는 익명함수를 표현하기 위해 화살표 함수 (Arrow function) 표현식을 지원한다.
tags:
  - 화살표 함수
  - Arrow function
  - ES6
  - ECMA2015
  - 익명함수
  - JS
---

![ES6 화살표 함수 (arrow function expression)](/assets/es6.png 'ES6 화살표 함수 (arrow function expression)')

ES6에서는 **익명함수**를 표현하기 위해 화살표 함수(Arrow function) 표현식을 지원한다.
기존에는 아래와 같이 함수를 선언 하였다.

```javascript
var coffee = function (americano, espresso) {
  var cart = americano * espresso
  return cart
}

var result = coffee(10, 20)
console.log(result) // 200
```

위와 같은 함수를 ES6 화살표 함수(Arrow function) 을 사용하면 아래와 같이 간결하게 선언할 수 있다.

```javascript
let coffee = (americano, espresso) => {
  let cart = americano * espresso
  return cart
}

var result = coffee(10, 20)
console.log(result) // 200
```

즉 function 이 생략되고 `=>` 기호가 그 자리에 추가 된다. 또한 아래와 같이 구문이 하나밖에 없으면 `{}` 기호를 생략할 수 있다.

```javascript
let coffee = (americano, espresso) => americano * espresso
var result = coffee(10, 20)
console.log(result) // 200
```

`return` 을 생략한 것으로서, `return americano * espresso` 와 같다. 만약, 화살표 앞에 줄을 분리하면 SyntaxError 가 발생 한다.

```javascript
let coffee = (americano,espresso) = > americano * espresso; // SyntaxError
```

파라미터가 하나이면 소괄호 `()`를 제외하고 해당 파라미터만 작성이 가능하다.

```javascript
let coffee = (americano) => americano * 20
var result = coffee(10)
console.log(result) // 200
```

파라미터가 없는 경우, 소괄호 `()` 만 작성한다.

```javascript
let coffee = () => 10 * 20
var result = coffee()
console.log(result) // 200
```

Arrow function은 IE환경에서 아직 제공하지 않는다.

![화살표 함수(Arrow function) 브라우저 호환성](/assets/익명함수_브라우저호환성.png '화살표 함수(Arrow function) 브라우저 호환성')

사용할려면 babel 을 사용해야 하는데 babel 은 다음에 자세히 알아 보도록 하겠다.

출처 : [ES6 화살표 함수 (arrow function expression)](https://www.bottlehs.com/javascript/es6-%ED%99%94%EC%82%B4%ED%91%9C-%ED%95%A8%EC%88%98-arrow-function/ 'ES6 화살표 함수 (arrow function expression)')
