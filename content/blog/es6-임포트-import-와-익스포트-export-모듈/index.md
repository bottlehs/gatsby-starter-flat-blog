---
templateKey: blog-post
title: ES6 임포트(import)와 익스포트(export) 모듈
date: 2021-03-14T18:16:37.710Z
description:
  모듈 프로그래밍은 각 프로그램 파일을 모듈 단위로 분리하여, 이를 구조화할 수 있는 장점이 있다. ES5 이전의
  자바스크립트는 모듈을 지원하지 않았기에 다양한 방식을 사용해 이를 구현해왔다. ES6부터 import, export 구문을 활용하면, 한
  모듈이 특정 변수를 익스포트(export)하고 다른 모듈이 이를 임포트(import)하여 계층 관계를 만들 수 있다.
tags:
  - ES6
  - 임포트(import)
  - 익스포트(export)
  - JavaScript
  - ECMAScript6
---

![ES6 임포트(import)와 익스포트(export) 모듈](/assets/es6.png 'ES6 임포트(import)와 익스포트(export) 모듈')

모듈 프로그래밍은 각 프로그램 파일을 모듈 단위로 분리하여, 이를 구조화할 수 있는 장점이 있다.

ES5 이전의 자바스크립트는 모듈을 지원하지 않았기에 다양한 방식을 사용해 이를 구현해왔다. ES6부터 import, export 구문을 활용하면, 한 모듈이 특정 변수를 익스포트(export)하고 다른 모듈이 이를 임포트(import)하여 계층 관계를 만들 수 있다.

ES6 모듈은 개별 .js 파일에 원하는 개수만큼 변수를 익스포트할 수 있다.
모듈 익스포트를 위한 다양한 방법은 아래와 같다.

### Export(익스포트)

```javascript
export {coffee}; // 변수 한개 익스포트
export {coffee1, coffee2, coffee3}; // 변수 여러개 익스포트
export {coffee as developcoffee); // 해당 변수를 alias로 익스포트
export {coffee1, coffee2} from "coffeeModule"; // 하위모듈에서 해당 익스포트된 변수를 익스포트
export * from "coffeeModule"; // 하위 모듈에서 익스포트한 모든 변수를 익스포트
```

모듈을 임포트하는 형식은 아래와 같다.

### Import(임포트)

```javascript
import { coffee1, coffee2 } from 'coffeeModule' // 기본 임포트
import { coffee as developcoffee } from 'coffee' // 임포트 할 변수를 다른 변수로 alias
import * as coffee from 'developcoffee' // 변수 전체를 임포트한 뒤 coffee 변수로 alias
```

출처 : [ES6 임포트(import)와 익스포트(export) 모듈](https://www.bottlehs.com/javascript/es6-%EC%9E%84%ED%8F%AC%ED%8A%B8-import-%EC%99%80-%EC%9D%B5%EC%8A%A4%ED%8F%AC%ED%8A%B8-export-%EB%AA%A8%EB%93%88/ 'ES6 임포트(import)와 익스포트(export) 모듈')
