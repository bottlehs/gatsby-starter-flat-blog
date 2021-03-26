---
templateKey: blog-post
title: ES6 Map & Set
date: 2021-03-14T19:29:19.802Z
description:
  Map과 Set은 Java와 같은 다른 프로그래밍 언어에서도 자주 사용하는 데이터 구조이다. Map은 키와 값으로
  이루어진 데이터 구조이고, Set은 중복 없는 키-값으로 이루어진다. 기존 자바스크립트에서는 배열과 객체로 해당 기능을 구현할 수 있었지만,
  입력값의 목록이나 특정값 찾기를 수행하기 위해서는 별도의 과정이 필요하다.
draft: false
category: 'javascript'
tags:
  - ES6
  - Map & Set
  - JavaScript
  - ECMAScript6
---

![ES6 Map & Set](/assets/es6.png 'ES6 Map & Set')

Map과 Set은 Java와 같은 다른 프로그래밍 언어에서도 자주 사용하는 데이터 구조이다. Map은 키와 값으로 이루어진 데이터 구조이고, Set은 중복 없는 키-값으로 이루어진다. 기존 자바스크립트에서는 배열과 객체로 해당 기능을 구현할 수 있었지만, 입력값의 목록이나 특정값 찾기를 수행하기 위해서는 별도의 과정이 필요하다.

Map과 Set을 이용하면, 이 과정을 단순화할 수 있다.

```javascript
let map = new Map()

for (let [key, val] of map.entries()) {
  console.log(key + ' : ' + val)
}

let set = new Set()
set.add('a').add('b').add('c')

if (set.has('a')) {
  for (let key of set.values()) {
    console.log(key)
  }
}
```

이 밖에도 WeakMap 과 WeakSet이 있는데, 이는 Map과 Set이 비슷하게 작동하지만, 다른곳에서 해당 변수에 대한 참조가 없어진다면, 자동으로 Map과 Set에 있는 데이터를 삭제하는 것에 차이점이 있다.

메모리에 있는 객체 참조 퍼런스가 없어지면, 자바스크립트의 가비지 컬렉터가 해당 객체를 해제하게 된다. WeakMap과 WeakSet은 이러한 레퍼런스에 추가하지 않아 메모리가 해제되는 경우, 데이터 구조에서도 같이 삭제하게 된다. 즉, 메모리 누수에 영향을 받지 않고 이용할 수 있다.

출처 : [ES6 Map & Set](https://www.bottlehs.com/javascript/es6-map-set/ 'ES6 Map & Set')
