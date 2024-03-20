# 이성현 201930122

## 3월 20일 강의 내용

챕터 1

- 리액트 정의  
    - 사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리  
    - 웹 및 앱 유저 인터페이스를 위한 라이브러리(크로스플랫폼 리액트네이티브)  
    - 복잡한 사이트를 쉽고 빠르게 만들고, 관리하기   
    <br>

- 리액트 장점
    - 빠른 업데이트와 렌더링 속도
        1. 이 것을 가능하게 하는 것이 바로 Virtual DOM
        2. DOM(Document object Model)이란 XML, HTML 문서의 각 항목을 계층으로 표현하여 생성, 변형, 삭제할 수 있도록 돕는 인터페이스
        3. Virtual DOM은 DOM 조작이 비효율적인 이유로 속도가 느리기 때문에 고안된 방법.
        DOM은 동기식, Virtual DOM은 비동기식 방법으로 렌더링
            - Virtual DOM : 실제 돔에 접근하여 조작하는 대신, 이것을 추상화시킨 자바스크립트 객체를 이용해 사용한다.
            - 동기식 : 렌더링될 때 마다 정보를 계속해서 보내줌
            - 비동기식 : 기존 렌더링된 정보를 저장하며 변화를 추적하여 변경된 상태를 바꿔준다  
        ![DOM구조](https://github.com/devshylee/react1-1/assets/69080831/be9b3562-450a-4721-89ff-a4ce3894c696)
 
        
    - 컴포넌트 기반 구조
        1. 리액트의 모든 페이지는 컴포넌트로 구성됩니다.
        2. 하나의 컴포넌트는 다른 여러 개의 컴포넌트의 조합으로 구성할 수 있습니다.
        3. 그래서 리액트로 개발을 하다 보면 레고 블럭을 조립하는 것처럼 컴포넌트를 조합해서 웹사이트를 개발합니다.
        4. 재사용성이 뛰어납니다.
        5. Component File.js
    - 재사용성
        1. 반복적인 작업을 줄여주기 때문에 생산성을 높여줍니다.
        2. 또한 유지보수가 용이합니다.
        3. 재사용이 가능 하려면 해당 모듈의 의존성이 없어야 합니다.
    - 든든한 지원군
        - 메타에서 오픈소스 프로젝트로 관리하고 있어 계속 발전하고 있습니다.
    - 활발한 지식공유 & 커뮤니티
    - 모바일 앱 개발기능
        - 리액트 네이티브라는 모바일 환경 UI프레임워크를 사용하면 크로스플랫폼 모바일 앱을 개발할 수 있습니다.  
    ![브라우저 동작원리](https://github.com/devshylee/react1-1/assets/69080831/d710cf7b-fe54-4698-9f61-0c992092d8bb)

    <br>

- 리액트 단점
    - 방대한 학습량
        1. 자바스크립트를 공부한 경우 빠르게 학습할 수 있습니다.
    - 높은 상태관리 복잡도
        1. state, component file cycle등의 개념이 있지만 그리 어렵지 않습니다.

    <!-- 브라우저 동작 원리
    DOM구조 -->
    <br>
    
- JSX  
    - JSX(Javascript Syntax eXtension)는 Javascript 확장한 문법이다.
    - 브라우저에서 실행하기 전에 바벨을 사용하여 일반 자바스크립트 형태의 코드로 변환된다.  
    <br>

[Stack Overflow Trands]([https://insights.stackoverflow.com/trends?tags=r%2Cstatistics)  

챕터2  
리액트 시작하기  
 npx create-react-app test-app
 <br>
 
## 3월 13일 강의 내용
# H1
## H2
### H3
#### H4
##### H5
###### H6

개행 Space x 2 or \<br>  
Text

Ordered List  
1. 첫 번째
2. 두 번째
3. 세 번째

Un-Ordered List
- 첫 번째
* 두 번째

Code-Block   
```
<HTML>
    <head>
    ~~~
    </head>
    <body>
    ~~~
    </body>
</HTML>
```

Horizental Line
---

*Italic Font*  
**Bold**

[구글](https://google.co.kr)  
[문서 내 링크](#h1)  
![리트리버](./image.png)

### GitHub 사용법
