# 이성현 201930122

## 3월 27일 강의 내용

### 챕터 3  

- JSX(JavaScript XML) : JavaScript에 XML을 추가한 확장 문법입니다.  
조립에 필요한 컴포넌트들을 태그화시키기 위해 사용된다.  
    <br>
    
- JSX의 역할
    - JSX는 내부적으로 XML/HTML 코드를 자바스크립트로 변환합니다
    - React가 createElement함수를 사용하여 자동으로 자바스크립트로 변환해 줍니다.
    - 만일 JS작업할 경우 직접 createElement함수를 사용해야 합니다.
    - JSX는 가독성을 높여 주는 역할을 합니다.  
    <br>

- JSX의 장점
    - 코드가 간결해 집니다.
    - 가독성이 향상 됩니다.
    - Injection Attack이라 불리는 해킹 방법을 방어함으로써 보안에 강합니다.  
    <br>    

- JSX 사용법
    - 모든 자바스크립트 문법을 지원합니다
    - 자바스크립트 문법에 XML과 HTML을 섞어서 사용합니다.
    - HTML이나 XML에 자바스크립트 코드를 사용하고 싶으면 {}괄호를 사용합니다.  
    <br>

- 엘리먼트의 정의
    - 엘리먼트는 리액트 앱을 구성하는 요소를 의미합니다.
    - 엘리먼트는 리액트 앱의 가장 작은 빌딩 블록들
    - 웹사이트의 경우 DOM 엘리먼트이며 HTML요소를 의미합니다.  
    <br>

- 엘리먼트와 DOM엘리먼트의 차이
    - 리액트 엘리먼트는 Virtual DOM의 형태를 취하고 있습니다.
    - DOM 엘리먼트는 페이지의 모든 정보를 갖고 있어 무겁습니다.
    - 반면 리액트 엘리먼트는 변화한 부분만 갖고 있어 가볍습니다.  
    <br>

||DOM|Virtual DOM|
|---|---|---|
|**업데이트속도**|느리다|빠르다|
|**Element 업데이트 방식**|DOM 전체를 업데이트|변화한 부분을 가상DOM으로 만든 후<br>DOM과 비교하여 다른 부분만 업데이트|
|**메모리**|낭비가|효율적|  
<br>

- 엘리먼트의 생김세
    - 리액트 엘리먼트는 자바스크립트 객체의 형태로 존재합니다.
    - 컴포넌트(Button 등), 속성(color 등) 및 내부의 모든 Children을 포함하는 일반 JS객체입니다
    - 이 객체는 마음대로 변경할 수 없는 불변성을 갖고 있습니다.
    - 자바스크립트 객체입니다.
    - 내부적으로 자바스크립트 객체를 만드는 역할을 하는 함수가 createElement()입니다.
    - 두 번째 매개변수인 props는 속성을 나타냅니다.
    - 세 번째 매개변수는 Children입니다. 자식 태그라고 이해하면 됩니다.  
    <br>
    ```JavaScript
    React.createElement(
        type,
        [props],
        [...children]
    )
    ```
    <br>
- 엘리먼트의 특징
    - 리액트 엘리먼트의 가장 큰 특징은 불변성입니다.  
    즉 한 번 생성된 엘리먼트의 Children이나 속성(attributes)을 바꿀 수 없습니다.  
    <br>

- 만일 내용이 바뀌면 어떻게 해야 할까요?
    - 이 떄는 컴포넌트를 통해 새로운 엘리먼트를 생성하면 됩니다.
    - 그 다음 이전 엘리먼트와 교체를 하는 방법으로 내용을 바꾸는 것입니다.
    - 이렇게 교체하는 작업을 하기위해 Virtual DOM을 사용합니다.  
    <br>

- root DOM Node
    - 다음 HTML코드는 id값이 root인 div태그로 단순하지만 리액트에 필수로 들어가는 아주 중요한 코드이다. 이 div태그 안에 리액트 엘리먼트가 렌더링 되며, 이것을 root DOM Node라고 한다.
    ```JavaScript
        <div id="root"></div>
    ```
    - 엘리먼트를 렌더링하기 위해서는 다음과 같은 코드가 필요합니다.
    ```JavaScript
        const element = <h1>안녕 리액트</h1>
        ReactDOM.render(element, document.getElementByID('root'))
    ```
    - 이떄 render()함수를 사용하게 됩니다.  
    이 함수의 첫 번째 파라미터 출력할 리액트 엘리먼트이고,  
    두 번째 파라미터는 출력할 타겟을 나타냅니다.  
    즉 리액트 렌더링의 과정은 Virtual DOM에서 실제 DOM으로 이동하는 과정이라고 할 수 있습니다.  
    <br>

- 렌더링된 엘리먼트 업데이트하기
    - 다음 코드는 tick() 함수를 정의하고 있습니다.
    - 이 함수는 현재 시간을 포함한 element를 생성해서 root div에 렌더링해줍니다.
    - setInterval()함수를 이용해서 정의한 tick()를 1초에 한번씩 호출합니다.
    - 1초에 한번씩 element를 새로 만들고 그것을 교체하는 것입니다.
    ```JavaScript
        // Clock.jsx
        export default function tick(){
            const element = (
                <div>
                    <h1>안녕, 리액트</h1>
                    <h2>현재 시간 : {new Date().toLocaleTimeString()}</h2>
                </div>
            );
            ReactDOM.render(element, document.getElemetByID('root'))
        }
    ```
    ```JavaScript
        // index.js
        const root = ReactDOM.createRoot()
        setInterval(() => {
            root.render(
                <React.StrictMode>
                    <Clock />
                </React.StrictMode>
            );
        }, 1000)
    ```

    

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

챕터2 리액트 시작하기

 npx create-react-app test-app
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