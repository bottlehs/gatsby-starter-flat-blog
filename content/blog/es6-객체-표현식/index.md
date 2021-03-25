---
templateKey: blog-post
title: ES6 객체 표현식
date: 2021-03-14T19:15:26.956Z
description:
  ES6에서는 더욱 동적이고 간단하게 객체를 생성하고 할당하는 표현식을 제공한다. 만약, 객체의 속성을 변수명과 같은
  속성명으로 설정하려면 이를 간단하게 표현할 수 있다.
tags:
  - ES6
  - 객체 표현식
  - JavaScript
  - ECMAScript6
---

![ES6 객체 표현식](/assets/es6.png 'ES6 객체 표현식')

ES6에서는 더욱 동적이고 간단하게 객체를 생성하고 할당하는 표현식을 제공한다. 만약, 객체의 속성을 변수명과 같은 속성명으로 설정하려면 이를 간단하게 표현할 수 있다.

예를 들어, 아래 **코드1**과 같은 객체가 있다면, **코드2** 와 같이 간단하게 설정이 가능하다.

```javascript
// 코드1
const coffee1 = 'coffee1'
const coffee2 = 'coffee2'

const obj = {
  coffee1: coffee1,
  coffee2: coffee2,
}
```

```javascript
// 코드2
const obj = {
  coffee1,
  coffee2,
}
```

또한, 함수를 정의할 시에 function 키워드를 생략하고 getter 및 setter를 설정하는 것을 키워드를 통해 간단히 구현할 수 있다. 이는 속성명 앞에 get과 set을 붙여서 이용한다.

```javascript
const coffeeFunc = {
   func() {
      console.log("new function");
   }
   _name: "coffeeFunc",
   get name() {
      return this._name;
   },
   set name(name) {
      this._name = name;
   }
};
```

[ES6 객체 표현식](https://www.bottlehs.com/javascript/es6-%EA%B0%9D%EC%B2%B4-%ED%91%9C%ED%98%84%EC%8B%9D/ 'ES6 객체 표현식')
