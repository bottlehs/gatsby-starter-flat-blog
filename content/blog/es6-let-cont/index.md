---
templateKey: blog-post
title: ES6 let & cont
date: 2021-03-14T07:11:12.292Z
description: let, const 는 ES6 에 추가 되었다. let,const는 변수(let)와 상수(const)를 구분 하여 정의할때 사용 된다.
draft: false
category: 'javascript'
tags:
  - JavaScript
  - ES6
  - ECAMScript 2015
  - Let
  - Const
  - Var
---

![ES6 let & cont](/assets/es6.png 'ES6 let & cont')

기존에는 var 키워드로 변수와 상수를 모두 정의 하였지만 ES6에서는 변수와 상수를 구분할수 있는 let 과 const 가 추가 되었다.

## let

let 은 변수를 정의할 때 사용된다.
변수는 변하는 값을 의미한다.

```javascript
let coffee = 'americano'
```

기존 var 키워드로 선언한 변수를 함수 스코프(scope) 변수라고 하며, 함수 안에서 변수를 선언하면 함수 외부를 제외하고 함수 내부 어디서든지 접근할수 있다. 이와 달리 let 은 블록 스코프 변수이며, 블록 스코프 안에서 변수를 선언하면 블록 내부에서만 접근을 할수 있고 외부에서는 접근 할 수 없다.

```javascript
function coffee() {
  if (true) {
    var esspresso = 1
    let americano = 2
  }

  console.log(esspresso) // 출력 1
  console.log(americano) // if 문 안에서만 접근 가능하므로 reference 에러 발생
}
```

또한, 같은 스코프에서는 같은 이름의 let 변수를 선언할 수 없다.

```javascript
function coffee() {
  if (true) {
    let esspresso = 1
    let esspresso = 2 // SyntaxError 발생
  }
}
```

여러 개의 변수를 선언하기 위해 콤마(,)로 구분하여 연속해서 선언할 수 있다.

```javascript
let esspresso = 1,
  americano = 2,
  macchiato

console.log(esspresso) // 출력 1
console.log(americano) // 출력 2
console.log(macchiato) // 출력 undefined
```

여기서 값을 할당하지 않을경우 undefined 가 할당 된다.
let 과 var 의 주된 차이점 중 하나는 this 키워드가 참조하는 오브젝트의 차이이다.

```javascript
let esspresso = 1
var americano = 2

console.log(this.esspresso) // 출력 1
console.log(this.americano) // 출력 undefined
```

var 키워드로 선언한 변수는 this 가 window 오브젝트를 참조하므로 접근할 수 있지만 let 은 접근 할수 없다

ES6 하위 호환성을 위해 var 키워드를 여전히 사용 가능하지만, ES6 에서는 let 사용을 권장한다.

## const

const 은 상수를 정의할 때 사용된다.
상수는 변하지 않는 값을 의미한다.

```javascript
const coffee = 'americano'
```

기존에는 상수를 선언 할수있는 키워드가 없었다. 그래서 변수,상수 모두 var 로 정의하여 사용 하였다.
ES6 에서는 상수를 정의할수 있는 키워드가 추가 되었고 상수 선언은 const 로 할수있다.
const 는 블록 스코프 상수 이며, 블록 스코프 안에서 상수를 선언하면 블록 내부에서만 접근 할수 있고 외부에서는 접근 할 수 없다.

```javascript
function coffee() {
  if (true) {
    var esspresso = 1
    const americano = 2
  }

  console.log(esspresso) // 출력 1
  console.log(americano) // if 문 안에서만 접근 가능하므로 reference 에러 발생
}
```

또한, 같은 스코프에서는 같은 이름의 const 상수를 선언할 수 없다.

```javascript
function coffee() {
  if (true) {
    const esspresso = 1
    const esspresso = 2 // SyntaxError 발생
  }
}
```

한번 정의된 상수는 재정의 할수 없다.

```javascript
const esspresso = 1
const esspresso = 2 // SyntaxError 발생
```

여러 개의 상수를 선언하기 위해 콤마(,)로 구분하여 연속해서 선언할 수 있다.

```javascript
const esspresso = 1, americano = 2, macchiato;

console.log(esspresso); // 출력 1
console.log(americano); // 출력 2
console.log(macchiato); // 출력 undefined
```

여기서 값을 할당하지 않을경우 undefined 가 할당 된다.
const 와 var 의 주된 차이점 중 하나는 this 키워드가 참조하는 오브젝트의 차이이다.

```javascript
const esspresso = 1
var americano = 2

console.log(this.esspresso) // 출력 1
console.log(this.americano) // 출력 undefined
```

var 키워드로 선언한 변수는 this 가 window 오브젝트를 참조하므로 접근할 수 있지만 const 은 접근 할수 없다

ES6 하위 호환성을 위해 var 키워드를 여전히 사용 가능하지만, ES6 에서 상수선언은 const 사용을 권장한다.

출처 : [ES6 let & cont](https://www.bottlehs.com/javascript/es6-let-cont/ 'ES6 let & cont')
