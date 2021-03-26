---
templateKey: blog-post
title: ES6 vs ES5
date: 2021-03-14T09:06:14.444Z
description: 기존 자바스크립트의 여러 문제점을 해결하고 개선한 ES6 (ECMA6) 에 대해 알아 본다
draft: false
category: 'javascript'
tags:
  - ES6
  - ECMAScript 2016
  - Javascript
  - ES5
  - ECMAScript 5
---

2009년에 발표된 ES(ECMAScript 5)는 웹 어플리케이션 부터 소셜게임 까지 다양한 곳에서 활용이 되었다. 그 이후, 기존에 자바스크립트의 여러 문제점을 해결하고 개선한 ES6(ECMAScript 2015)이 2015년 여름에 발표 되었다. ES6은 ECMAScript 2015라도고 불리고, 기존 여러 기능을 개선한 버전이다.

![ES6](/assets/ecmascript_2015_language_specification_–_ecma-262_6th_edition.png '최신 ECMAScript 스팩')

[](https://www.ecma-international.org/ecma-262/6.0/)그림-1. 최신 ECMAScript 스팩 (<https://www.ecma-international.org/ecma-262/6.0/>)

ES6의 핵심 기능 중 하나는 ES5(ECMAScript 5) 버전을 기반으로 개발된 웹 페이지가 동작가능 하도록 하위 호환성을 지원하는 것이다.

ES6에 추가된 주요 기능은 다음과 같다.

- **let & cont** : 변수 선언용 let, 상수 선언용 const 키워드 추가
  - [ES6 let & cont](https://www.bottlehs.com/javascript/es6-let-cont/ 'ES6 let & cont')
- **화살표 함수** : 함수 정의를 위한 화살표 함수 추가
  - [ES6 화살표 함수 (arrow function expression)](https://www.bottlehs.com/javascript/es6-%ED%99%94%EC%82%B4%ED%91%9C-%ED%95%A8%EC%88%98-arrow-function/ 'ES6 화살표 함수 (arrow function expression)')
- **클래스** : 클래스 키워드 추가
  - [ES6 클래스 (Class)](https://www.bottlehs.com/javascript/es6-%ED%81%B4%EB%9E%98%EC%8A%A4-class/ 'ES6 클래스 (Class)')
- **템플릿 문자열** : 역따옴표를 이용한 문자열 기능 추가
  - [ES6 템플릿 문자열 (template string)](https://www.bottlehs.com/javascript/es6-%ED%85%9C%ED%94%8C%EB%A6%BF-%EB%AC%B8%EC%9E%90%EC%97%B4-template-string/ 'ES6 템플릿 문자열 (template string)')
- **디스럭처링** : 변수를 매핑하여 할당 가능
  - [ES6 디스트럭처링(Destructuring)](https://www.bottlehs.com/javascript/es6-%EB%94%94%EC%8A%A4%ED%8A%B8%EB%9F%AD%EC%B2%98%EB%A7%81-destructuring/ 'ES6 디스트럭처링(Destructuring)')
- **함수 인자 기능** : 인자 기본값 설정, 가변 인자 기능 추가
  - [ES6 Spread & Rest 연산자](https://www.bottlehs.com/javascript/es6-spread-rest-%EC%97%B0%EC%82%B0%EC%9E%90/ 'ES6 Spread & Rest 연산자')
- **Iterator & for-of** : 배결의 Iterator 속성 정의 및 for-of 키워드 추가
  - [ES6 For ... Of 루프](https://www.bottlehs.com/javascript/es6-for-of-%EB%A3%A8%ED%94%84/ 'ES6 For ... Of 루프')
- **Map & Set** : Map, Set 키워드 추가
  - [ES6 Map & Set](https://www.bottlehs.com/javascript/es6-map-set/ 'ES6 Map & Set')
- **모듈 기능** : import, export 키워드 추가
  - [ES6 임포트(import)와 익스포트(export) 모듈](https://www.bottlehs.com/javascript/es6-%EC%9E%84%ED%8F%AC%ED%8A%B8-import-%EC%99%80-%EC%9D%B5%EC%8A%A4%ED%8F%AC%ED%8A%B8-export-%EB%AA%A8%EB%93%88/ 'ES6 임포트(import)와 익스포트(export) 모듈')
- **Promise** : Promise 모듈 추가
  - [ES6 프라미스(Promise)](https://www.bottlehs.com/javascript/es6-%ED%94%84%EB%9D%BC%EB%AF%B8%EC%8A%A4-promise/ 'ES6 프라미스(Promise)')
- **Proxy** : Proxy 패턴의 기능을 기본 표준으로 추가
- **Symbol** : 새로운 Symbole 추가

다음에는 추가된 주요 기능을 상세하게 다뤄볼 것이다.

[ES6 vs ES5](http://www.google.co.kr)
