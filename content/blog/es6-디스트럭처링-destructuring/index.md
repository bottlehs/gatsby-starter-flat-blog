---
templateKey: blog-post
title: ES6 디스트럭처링(Destructuring)
date: 2021-03-14T18:51:30.185Z
description: 디스트럭처링(Destructuring)은 Object 객체를 개별 변수에 할당하는 것을 말한다. 이를 이용하면, JSON 형태의 객체를 쉽게 매핑하여 변수에 할당할 수 있고, 반환값도 여러 개를 설정할 수 있다.
tags:
  - ES6
  - 디스트럭처링
  - Destructuring
  - JavaScript
  - ECMAScript6
---

![ES6 디스트럭처링(Destructuring)](/assets/es6.png 'ES6 디스트럭처링(Destructuring)')

디스트럭처링(Destructuring)은 Object 객체를 개별 변수에 할당하는 것을 말한다. 이를 이용하면, JSON 형태의 객체를 쉽게 매핑하여 변수에 할당할 수 있고, 반환값도 여러 개를 설정할 수 있다.

```javascript
let arr = [10, 20, 30, 40, 50]
let [a, b, c, d, e] = arr
```

위와 같은 형태로 변수를 차례로 할당된다. 만약, 할달한 값이 없으면, undefined가 설정된다.

```javascript
let arr = [10, 20, 30]
let [a, b, c, d, e] = arr // 10,20,30 undefined
```

아래와 같이 값을 건너 뛸 수도 있다.

```javascript
let [a, , c] = [10, 20, 30]
console.log(a, c) // 1 3
```

object의 경우, 아래와 같은 형태로 대입할 수 있다. 오른쪽이 오브젝트이면, 왼쪽도 오브젝트여야 한다. name, job 은 각각의 값을 할당하게 된다. 해당하는 키가 없으면, 초기값인 undefined가 유지된다.

```javascript
const obj = {
   name: "bottlehs"
   job: "Software Engineer"
}
let {name, job} = obj;
console.log(name, job); // "bottlehs","Software Engineer"
```

또한, 다음과 같이 기본값을 설정할 수 있다.

```javascript
let arr = [10, 20, 30]
let [a = 40, c = 50, b] = arr // a = 40, c = 50, b = 30
```

끝.

출처 : [ES6 디스트럭처링(Destructuring)](https://www.bottlehs.com/javascript/es6-%EB%94%94%EC%8A%A4%ED%8A%B8%EB%9F%AD%EC%B2%98%EB%A7%81-destructuring/ 'ES6 디스트럭처링(Destructuring)')
