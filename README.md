# 이성현 201930122

## 4월 3일 강의 내용

### 챕터 5 - 컴포넌트와 Props

- 컴포넌트의 역할
    - 리액트는 컴포넌트 기반의 구조를 가진다.
    - 컴포넌트 구조라는 것은 작은 컴포넌트가 모여 큰 컴포넌트를 구성하고, 다시 이런 컴포넌트들이 모여서 전체 페이지를 구성한다는 것을 의미합니다.
    - 컴포넌트는 재사용이 가능하기 때문에 전체 코드의 양을 줄일 수 있어 개발 기간과 유지 보수 비용도 줄일 수 있습니다.
    - 컴포넌트는 자바스크립트 함수처럼 입력과 출력이 있다는 면에서 유사합니다.
    - 다만 입력은 Props가 담당하고, 출력은 리액트 엘리먼트의 형태로 출력됩니다.
    - 엘리먼트를 필요한 만큼 만들어 사용한다는 면에서는 객체 지향의 개념과 비슷합니다.  
    <br>

- Props의 개념
    - Props는 property(속성, 특성)의 준말입니다.
    - 이 Props가 바로 컴포넌트의 속성입니다.
    - 컴포넌트에 어떤 속성, props를 넣느냐에 따라서 속성이 다른 엘리먼트가 출력됩니다.
    - props는 컴포넌트에 전달 할 다양한 정보를 담고 있는 자바스크립트 객체입니다.  
    <br>

- Props의 특징
    - 읽기 전용입니다. 변경할 수 없다는 의미입니다.
    - 속성이 다른 엘리먼트를 생성하려면 새로운 props를 컴포넌트에 전달하면 됩니다.  
    <br>

- Pure 함수 vs Impure함수
    - Pure함수는 인수로 받은 정보가 함수 내부에서도 변하지 안흔 함수입니다. ( =Props)
    - Impure함수는 인수로 받은 정보가 함수 내부에서 변하는 함수 입니다.  
    <br>

- Props 사용법
    - JSX에서는 key-value쌍으로 props를 구성합니다
    ``` JavaScript 
        function App(props) {
            return {
                <Profile
                    name="소풀"
                    introduction="안녕하세요 소풀입니다"
                    viewCount={1500}
                />
            }
        }
    ```
    ``` JavaScript
            function App(props) {
            return {
                <Layout
                    Width={2500}
                    height={1440}
                    header={
                        <Header title="소풀의 블로그입니다." />
                    }
                    Footer={
                        <Footer />
                    }
                />
            }
        }
    ```
    - JSX를 사용하지 않는 경우 props의 전달 방법은 createElement()함수를 사용하는 것
    ``` JavaScript
        React.createElement(
            type,
            [props],
            [...children]
        )
    ```
    <br>

- 컴포넌트의 종류
    - 리액트 초기 버전을 사용할 때는 클래스형 컴포넌트를 주로 사용했습니다.
    - 이후 Hook이라는 개념이 나오면서 최근에는 함수형 컴포넌트를 주로 사용합니다.
    - 예전에 작성된 코드나 문서들이 클래스형 컴포넌트를 사용하고 있기 때문에
    - 클래스형 컴포넌트와 컴포넌트의 생명주기에 관해서도 공부해 두어야 합니다.
    - 함수형 컴포넌트
    ``` JavaScript
        function Welcome(props){
            return <h1>안녕, {props.name}</h1>
        }
    ```
    - 클래스형 컴포넌트
    ``` JavaScript
        class Welcome extends React.Component {
            render(){
                return <h1>안녕, {props.name}</h1>
            }
        }
    ```
    <br>
- 컴포넌트 이름 짓기
    - 이름은 항상 대문자로 시작합니다.
    - 왜냐하면 리액트는 소문자로 시작하는 컴포넌트를 DOM 태그로 인식하기 때문입니다.
    - 컴포넌트 파일 이름과 컴포넌트 이름은 같게 합니다.  
    <br>

- 컴포넌트의 렌더링
    - 렌더링의 과정은 다음 코드와 같습니다
    ``` JavaScript
        function Welcome(props){
                return <h1>안녕, {props.name}</h1>
            }

        const element = <Welcome name="인제" />
        ReactDOM.render{
            element,
            document.getElementById('root')
        };
    ```

- 컴포넌트 합성
    - 컴포넌트 합성은 여러 개의 컴포넌트를 합쳐서 하나의 컴포넌트를 만드는 것입니다.
    - 리액트에서는 컴포넌트 안에 또 다른 컴포넌트를 사용할 수 있기 떄문에 복잡한 화면을 여러 개의 컴포넌트로 나누어 구현할 수 있습니다.
    ``` JavaScript
        function Welcome(props){
                return <h1>Hello, {props.name}</h1>
            }
        function App(props){
            return {
                <div>
                    <Welcome name="mike" />
                    <Welcome name="mike" />
                    <Welcome name="mike" />
                </div>
            }
        }
        ReactDOM.render(
            <App />
            const root = ReactDOM.createRoot(document.getElementById('root'));
        )
    ```

- 컴포넌트 추출
    - 복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 나눌 수도 있습니다.
    - 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는 것입니다.
    - 실무에서는 처음부터 1개의 컴포넌트에 하나의 기능만 사용하도록 설계하는 것이 좋습니다.
    ``` JavaScript
        function Avatar(props){
            return {
                <img ClassName = "avatar"
                    src={props.user-avatarurl}
                    alt={props.user-name}
                />
            }
        }
        function Comment(props){
            return {
                <div className="commnet">
                    <userInfo user={props.author} />
                    <div className="comment-text">
                        {props.text}
                    </div>
                    <div className="comment-date">
                        {formatDate(props.date)}
                    </div>
                </div>
            }       
        }
        function userInfo(props){
            return {
                <div className="user-info">
                    <Avatar user={props.name} />
                    <div className="user-info-name">
                        {props.user.name}
                    </div>
                </div>
            }
        }
    ```

### Chapter 6 - state와 생명주기

- State란?
    - state는 리액트 컴포넌트의 상태를 의미합니다
    - 상태의 의미는 정상인지 비정상인지가 아닌 컴포넌트의 데이터를 의미합니다.
    - 정확히는 컴포넌트의 변경가능한 데이터를 의미합니다.
    - State가 변하면 다시 렌더링이 되기 때문에 렌더링과 관련된 값만 state에 포함시켜야 합니다.

- State의 특징
    - 리액트 만의 특별한 형태가 아닌 단지 자바스크립트 객체일 뿐입니다.
    - 예의 LikeButton은 class컴포넌트입니다.
    - constructor는 생성자이고 그 안에 있는 this.state가 한 컴포넌트의 state입니다.
    - 함수형 에서는 userState()라는 함수를 사용합니다
    ``` JavaScript
        class LikeButton extends React Component {
            constructor(props){
                super(props)

                this.state = {
                    liked : false;
                }
            }
        }
    ```
    - state는 변경은 가능하다고 했지만 직접 수정해서는 안됩니다.
    - 불가능 하다고 생각 하는 것이 좋습니다.
    - state를 변경하고자 할 때는 setState()함수를 사용합니다.
    ``` JavaScript
        this.state = { 
            name = "Inje" // X
        }
        
        this.setState({
            name: "Inje" // O
        })
    ```

- 생명주기에 대해 알아보기
    - 생명주기는 컴포넌트의 생성 시점, 사용 시점, 종료 시점을 나타내는 것입니다.
    - constructor가 실행 되면서 컴포넌트가 생성됩니다
    - 생성 직후 componentDidMount()함수가 호출됩니다.
    - 컴포넌트가 소멸하기 전까지 여러 번 렌더링 합니다.
    - 렌더링은 props, setState(), forceUpdate()에 의해 상태가 변경되면 이루어집니다.
    - 그리고 렌더링이 끝나면 componentDinUpdate()함수가 호출됩니다.
    - 마지막으로 컴포넌트가 언마운트되면 componentWillUnmount()함수가 호출됩니다.

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
- 리액트 시작하기  
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
