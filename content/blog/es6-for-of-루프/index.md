---
templateKey: blog-post
title: ES6 For ... Of 루프
date: 2021-03-14T19:22:59.726Z
description:
  기존 자바스크립트에서는 for, for..in 루프만 사용할 수 있었는데, for..of는 iterator 형태로 순환할
  수 있는 기능을 제공한다. iterator는 어떤 데이터 집합을 순서대로 접근할 때 사용된다. for..of 는
  Symbol.iterator를 호출 하는데 배열과 문자열은 이 속성을 제공하고 있다. 즉, 배열을 순서대로 순회하며, 문자열은 문자를 하나씩
  접근하게 된다. 또한, 사용자 정의 iterator을 커스텀 객체에 만들 수도 있다.
tags:
  - For ... Of 루프
  - ES6
  - ECMA2015
  - JS
---

![ES6 For ... Of 루프](/assets/es6.png "ES6 For ... Of 루프")

기존 자바스크립트에서는 for, for..in 루프만 사용할 수 있었는데, for..of는 iterator 형태로 순환할 수 있는 기능을 제공한다.

iterator는 어떤 데이터 집합을 순서대로 접근할 때 사용된다. for..of 는 Symbol.iterator를 호출 하는데 배열과 문자열은 이 속성을 제공하고 있다. 즉, 배열을 순서대로 순회하며, 문자열은 문자를 하나씩 접근하게 된다. 또한, 사용자 정의 iterator을 커스텀 객체에 만들 수도 있다.

```javascript
let coffee = [10, 20, 30, 40, 50]

for (let value of coffee) {
  console.log(value)
}

// 출력 결과
10
20
30
40
50
```

```javascript
for (let char of "coffee") {
  console.log(char)
}

// 출력 결과
"c"("o")("f")("f")("e")("e")
```

DOM에 접근하여 반복된 리스트를 가져오는데 유용할 수 있다.

```javascript
;<ul>
  <li>americano</li>
  <li>espresso</li>
</ul>

let nodes = document.querySelectorAll("li")
for (let node of codes) {
  console.log(node.textContent)
}

// 출력 결과
americano
espresso
```

`document.querySelectorAll("li")`는 `li` 엘리먼트를 모두 찾아 노드에 설정하는 것이고, 이러한 노드 리스트는 iterator 형태로 순환이 가능하기에 for..of 루프를 활용할 수 있다.

한편, 오브젝트의 경우, iterator 형태로 순환할 수 없지만, Object keys 메서드를 활용해 이를 구현한다.

```javascript
const coffee = {
   americano: "아메리카노",
   espresso: "에스프레소"
}

const keys = Object.keys(coffee)
for (let key of keys) {
   console.log(key, coffee[key])
}

// 출력 결과
americano 아메리카노
espresso 에스프레소
```

Object.keys를 활용하면 오브젝트에서 프로퍼티 키를 배열로 반환하게 된다. 이 배열은 iterator 형태로 순환이 가능하기 for..of 루프를 통해 해당 프로퍼티 값을 구한다.

[ES6 For ... Of 루프](http://www.google.co.kr)
