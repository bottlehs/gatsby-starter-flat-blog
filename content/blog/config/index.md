---
templateKey: blog-post
title: Config
date: 2021-03-27T10:15:26.956Z
description: Config
draft: false
category: 'etc'
tags:
  - Markdown
---

# 제목(Header)

```markdown
# 제목 중요도 1

## 제목 중요도 2

### 제목 중요도 3

#### 제목 중요도 4

##### 제목 중요도 5

###### 제목 중요도 6
```

# 제목 1

## 제목 2

### 제목 3

#### 제목 4

##### 제목 5

###### 제목 6

# 일반 문장

동해물과 백두산이 마르고 닳도록
하느님이 보우하사 우리나라 만세

# 줄바꿈(Line Breaks)

```markdown
동해물과 백두산이 마르고 닳도록
하느님이 보우하사 우리나라 만세 <!--띄어쓰기 2번-->

무궁화 삼천리 화려 강산<br/>
대한 사람 대한으로 길이 보전하세
```

동해물과 백두산이 마르고 닳도록
하느님이 보우하사 우리나라 만세 <!--띄어쓰기 2번-->

무궁화 삼천리 화려 강산<br/>
대한 사람 대한으로 길이 보전하세

# 강조(Emphasis)

```markdown
_이텔릭_
**두껍게**
**_이텔릭 + 두껍게_**
~~취소선~~
<u>밑줄</u>
```

_이텔릭_  
**두껍게**  
**_이텔릭 + 두껍게_**  
~~취소선~~  
<u>밑줄</u>

# 목록(List)

1. 순서가 필요한 목록
1. 순서가 필요한 목록
   1. 순서가 필요한 목록(서브)
   1. 순서가 필요한 목록(서브)
1. 순서가 필요한 목록

- 순서가 필요하지 않은 목록
  - 순서가 필요하지 않은 목록(서브)
  - 순서가 필요하지 않은 목록(서브)
- 순서가 필요하지 않은 목록
- 순서가 필요하지 않은 목록

# 링크(Links)

[GOOGLE](https://google.com)

[NAVER](https://naver.com 'NAVER로 이동!')

[DAUM](https://www.daum.net/ 'DAUM로 이동!')

동해물과 [백두산](https://namu.wiki/w/%EB%B0%B1%EB%91%90%EC%82%B0)이 마르고 닳도록

# 이미지(Images)

![BOTTLEHS](https://raw.githubusercontent.com/bottlehs/gatsby-starter-flat-blog/main/assets/gatsby-starter-flat-blog.png)

[![BOTTLEHS](https://raw.githubusercontent.com/bottlehs/gatsby-starter-flat-blog/main/assets/gatsby-starter-flat-blog.png)](https://bottlehs.com/)

# 코드(Code) 강조

## 인라인(inline) 코드 강조

`background`혹은 `background-image` 속성으로 요소에 배경 이미지를 삽입할 수 있습니다.

## 블록(block) 코드 강조

```html
<a href="https://www.google.co.kr/" target="_blank">GOOGLE</a>
```

```css
.list > li {
  position: absolute;
  top: 40px;
}
```

```javascript
function func() {
  var a = 'AAA'
  return a
}
```

```bash
$ git commit -m 'Study Markdown'
```

```plaintext
동해물과 백두산이 마르고 닳도록
하느님이 보우하사 우리나라 만세
```

# 표(Table)

| 값         |                     의미                     |   기본값 |
| ---------- | :------------------------------------------: | -------: |
| `static`   |        유형(기준) 없음 / 배치 불가능         | `static` |
| `relative` |        요소 **자신**을 기준으로 배치         |
| `absolute` | 위치 상 **_부모_(조상)요소**를 기준으로 배치 |
| `fixed`    |       **브라우저 창**을 기준으로 배치        |

# 인용문(BlockQuote)

인용문(blockQuote)

> 남의 말이나 글에서 직접 또는 간접으로 따온 문장.
> (네이버 국어 사전)

> 인용문을 작성하세요!
>
> > 중첩된 인용문
> >
> > > 중중첩된 인용문 1  
> > > 중중첩된 인용문 2  
> > > 중중첩된 인용문 3

# 원시 HTML(Raw HTML)

<strong>동해물</strong>과 <u>백두산</u>이 마르고 닳도록<br/>
하느님이 보우하사 우리나라 만세

<img width="70" src="https://raw.githubusercontent.com/bottlehs/gatsby-starter-flat-blog/main/assets/gatsby-starter-flat-blog.png" alt="BOTTLEHS" />

# 수평선(Horizontal Rule)

---
