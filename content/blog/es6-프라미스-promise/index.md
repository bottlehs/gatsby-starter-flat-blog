---
templateKey: blog-post
title: ES6 프라미스(Promise)
date: 2021-03-14T16:46:26.518Z
description:
  프라미스(Promise)는 비동기 호출이 일어났을 때 또는 해당 테스크가 완료했을 때, 이를 처리할 함수나 에러를 처리할
  함수를 설정하는 모듈이다. 특히, 비동기 처리가 많이 일어나는 XMLHttpRequest 처리에 주로 사용되며, 반환값이 연계적으로 처리가
  가능하기에 순차적인 호출을 보장한다.
tags:
  - 프라미스(Promise)
  - ES6
  - ECMA2015
  - JS
---

![ES6 프라미스(Promise)](/assets/es6.png "ES6 프라미스(Promise)")

프라미스(Promise)는 비동기 호출이 일어났을 때 또는 해당 테스크가 완료했을 때, 이를 처리할 함수나 에러를 처리할 함수를 설정하는 모듈이다. 특히, 비동기 처리가 많이 일어나는 XMLHttpRequest 처리에 주로 사용되며, 반환값이 연계적으로 처리가 가능하기에 순차적인 호출을 보장한다.

프라미스는 Callback hell을 해결하고, then() 메서드를 활용하여 비동기 코드를 절차적으로 동작하는 코드로 바꿀 수 있다.

```javascript
function get(url) {
  return new Promise(function (resolve, reject) {
    var req = new XMLHttpRequest()
    req.open("GET", url)

    req.onload = function () {
      if (req.status == 200) {
        resolve(req.response)
      } else {
        reject(Error(req.statusText))
      }
    }

    req.onerror = function () {
      reject(Error("Network Error"))
    }

    req.send()
  })
}
```

프라미스 생성자는 프라미스 인스턴스를 만든다. 그리고 executor 콜백을 넘기는데 이는 resolve, reject 두 개의 파라미터를 가지며, 성공하면 resolve 콜백에 결과값을, 실패하면 reject 콜백에 에러 메시지를 전달한다.

```javascript
get("coffee.json").then(
  function (response) {
    console.log("Success!", response)
  },
  function (error) {
    console.error("Failed", error)
  }
)
```

get 메서드를 호출하여 이것이 성공하거나 실패할 경우, 이를 핸들링 할 수 있따. 그리고 여러개의 프라미스를 실행할 경우, 이에 대한 완료 테스크를 정의 하기 위해, Promise.all API 를 사용한다.

```javascript
Promise.all([promise1, promise2]).then(function (value) {
  console.log("완료", value)
})
```

여기서, promise1 과 promise2는 프라미스 객체이고, 만약 위의 코드와 같이 프라미스를 함수로서 반환한다면 아래와 같이 실행해야 오류 없이 호출이 가능하다.

```javascript
Promise.all([promise1(), promise2()]).then(function (value) {
  console.log("완료", value)
})
```

[ES6 프라미스(Promise)](http://www.google.co.kr)
