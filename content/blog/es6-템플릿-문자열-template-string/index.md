---
templateKey: blog-post
title: ES6 템플릿 문자열 (template string)
date: 2021-03-14T18:07:36.947Z
description:
  템플릿 문자열(Template String)은 문자열을 생성하는 새롭게 도입된 리터럴이다. 문자열을 설정하기 위해
  따옴표(`)를 이용한다. 기존에는 변수를 문자열 안에 삽입하기 위해 따옴표 사이에 그 변수를 넣어 합치는 작업이 필요했는데, 템플릿문자열을
  이용하면 이를 간단하게 만들 수 있다.
draft: false
category: 'javascript'
tags:
  - ES6
  - ECMAScript
  - 템플릿 문자열
  - JavaScript
---

![ES6 템플릿 문자열 (template string)](/assets/es6.png 'ES6 템플릿 문자열 (template string)')

템플릿 문자열(Template String)은 문자열을 생성하는 새롭게 도입된 리터럴이다. 문자열을 설정하기 위해 따옴표(`)를 사용한다. 기존에는 변수를 문자열 안에 삽입하기 위해 따옴표 사이에 그 변수를 넣어 합치는 작업이 필요했는데, 템플릿 문자열을 이용하면 이를 간단하게 만들 수 있다.

**기존**

```javascript
var a = 10
var b = 20
var str = a + ' 더하기' + b + '은' + (a + b) + '이다'
console.log(str) // 10 더하기 20은 30이다
```

변수를 `$[표현식]` 형태로 역따옴표 안에 넣을 수 있고, 이는 함수로 전달되어 일반 문자열로 치환된다.

**템플릿 문자열**

```javascript
let a = 10
let b = 20
let str = `${a} 더하기 ${b}은 ${a + b} 이다`
console.log(str) // 10 더하기 20은 30이다
```

그리고 여러 줄에 걸친 텍스트를 표현하는데도 템플릿 문자열을 활용한다. ES5에서는 개행문자인 `\n`으로 줄바꿈을 했었다면, 템플릿 문자열은 이를 직관적으로 바꿔준다.

```javascript
console.log(`a
b
c`)

// 출력
a
b
c
```

출처 : [ES6 템플릿 문자열 (template string)](https://www.bottlehs.com/javascript/es6-%ED%85%9C%ED%94%8C%EB%A6%BF-%EB%AC%B8%EC%9E%90%EC%97%B4-template-string/ 'ES6 템플릿 문자열 (template string)')
