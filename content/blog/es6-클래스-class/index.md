---
templateKey: blog-post
title: ES6 클래스 (Class)
date: 2021-03-14T14:56:31.083Z
description:
  기존에는 객체지향을 구현하려고 할 때 function을 사용하여 구현 했다. ES6에서는 class 키워드를 사용하여
  객체지향을 구현 할수 있다. ES6 클래스는 생성자와 상속을 더욱 간단하고 명확한 구문으로 다룰 수 있게 한다. 클래스 자신도 함수이며,
  생성자를 가지고 함수를 생성하는 새로운 구문이다.
draft: false
category: 'javascript'
tags:
  - ES6
  - Class
  - 객체지향
  - Function
  - JavaScript
---

![ES6 클래스 (Class)](/assets/es6.png 'ES6 클래스 (Class)')

기존에는 객체지향을 구현하려고 할 때 function을 사용하여 구현 했다. ES6에서는 class 키워드를 사용하여 객체지향을 구현 할수 있다.

기존에는 아래와 같이 객체지향을 구현 했다. new 키워드를 붙여 호출하면, 생성자로 동작하여 객체를 생성한 후, 이를 반환 한다.

```javascript
function Coffee(name) {
  this.name = name
}

Coffee.prototype.getName = function () {
  return this.name
}

var americano = new Coffee('americano')
console.log(americano.getName()) // americano
```

ES6 클래스는 생성자와 상속을 더욱 간단하고 명확한 구문으로 다룰 수 있게 한다. 여기서 클래스 자신도 함수이며, 생성자를 가지고 함수를 생성하는 새로운 구문이다. 아래는 클래스를 사용한 예시이다.

```javascript
class Coffee {
  constructor(name) {
    this.name = name
    this.type = 'americano'
  }

  getName() {
    return this.name
  }
}

let coffee = new Coffee('americano')
console.log(coffee.getName()) // americano
console.log(typeof Coffee)
```

class 키워드를 앞에 붙여 선언한다. 생성자 함수는 constructor로 정의하고, 속성과 멤버 변수를 설정할 수 있다.

객체지향의 특징 중의 하나인 상속도 아래와 같이 구현할수 있다.

```javascript
class Americano extends Coffee {
  constuctor(name) {
    super(name)
    this.type = 'americano'
  }
}

let americano = new Americano('been')
console.log(americano instanceof Coffee) // true
console.log(americano.getName()) // been
```

extends 키워드를 활용해 Coffee 클래스로부터 상속을 받는다. 또한, 다른 객체지향 언어와 마찬가지와 부모 클래스 생성자를 호출하려면 super 키워드를 이용해 호출한다. Americano는 Coffee의 서브 클래스이므로 Coffee의 인스턴스로 확인되는 것을 확인할수 있다.

또한, static 키워드를 활용하면, 정적 메서드를 구현할 수 있다. 클래스의 생성자를 만들 필요 없이 바로 정적 메서드 이름으로 함수를 호출할 수 있다.

```javascript
class Coffee {
  static getName() {
    return 'Coffee'
  }
}

console.log(Coffee.getName()) // Coffee
```

출처 : [ES6 클래스 (Class)](https://www.bottlehs.com/javascript/es6-%ED%81%B4%EB%9E%98%EC%8A%A4-class/ 'ES6 클래스 (Class)')
