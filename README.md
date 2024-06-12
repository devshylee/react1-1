# 이성현 201930122

## 6월 12일 강의내용
- CSS란
    - Cascading Style Sheets의 약자로 스타일링을 위한 언어입니다.
    - Cascading이란 계단식이라는 뜻으로 한 엘리먼트에 여러 스타일이 적용될 경우 스타일간의 충돌을 막기 위해 계단식으로 스타일을 적용시키는 규칙을 갖고있습니다.
    - 즉 하나의 스타일이 여러 개의 엘리먼트에 적용될 수도 있고, 하나의 엘리먼트에도 여러 개의 스타일이 적용될 수도 있습니다.
    - 엘리먼트에 스타일이 적용되는 규칙을 선택자라고 합니다. CSS는 이 선택자와 스타일로 이루어집니다.
    - 이번 장에서는 선택자와 스타일을 카테고리별로 나누어 학습합니다.
    - CSS의 중요성이 높아짐에 따라 다양한 프레임워크들이 개발됨 -> BootStrap, Tailwind, SASS(PreProcessor), LASS


- CSS문법과 선택자
    - 선택자를 먼저 쓰고 다음에 적용할 스타일을 중괄호 안에 세미콜론으로 구분하여 하나씩 작성합니다.
    - 선택자는 HTML 엘리먼트를 직접 넣어도 되고, 엘리먼트의 조합 혹은 class의 형태로 작성 가능합니다.
    - 스타일은 property와 key value로 이루어지며, 이들은 콜론으로 구분하고, 각 스타일은 세미콜론으로 구분합니다.
    ```CSS
        h1{ // 선택자
            color : green;
        //  속성     값
        }
    ```
    - 두번째는 id선택자를 설명하고 있는데 이 것은 절대 사용하지 마세요. 그 이유는 JavaSript에도 id키워드가 존재하기 때문에 코드를 보고 의미를 유추하기 힘들어지기 때문입니다.
    - 세 번쨰는 class 선택자 입니다. HTML태그로 특정할 수 없는 스타일은 모두 class로 정의합니다. (.class)
    - 네 번쨰는 유형의 전체 선택자 입니다. ( * )
    - 다섯 번째는 그룹 선택자
    - 여섯 번째는 상태 선택자입니다.
         ```CSS 
            button:hover{
                font-weight : bold;
            }
            a:active{
                color : red;
            }
            p:first-child{
                background : #ff0000;
            }
            p:last-child{
                background : #0000ff;
            }
        ```

- 레이아웃과 관련된 속성
    - 화면에 엘리먼트를 어떻게 배치할 것인지를 정의합니다.
    - 가장 중요한 속성은 display입니다.
    - 모든 엘리먼트는 기본 display 속성을 갖고 있지만 이 기본값을 변경해 줄 수 있습니다.
    - ```CSS div { display : none | block | inline | flex } ```
    - none는 존재는 하지만 화면에 보이지 않는 것으로, 자바스크립트를 넣을 때 많이 사용합니다.
    - block은 세로로 정렬되며 width의 height를 가질 수있다. 크기와 상관없이 한 줄을 점유합니다.
    - inline은 가로로 정렬되며, width의 height를 가질 수 없다. 컨텐츠의 크기만큼 공간을 점유합니다.
    - inline-blick는 기본적으로 inline의 특성을 갖지만, width와 height등 block의 특성을 사용할 수 있습니다.
    - 대표적인 block과 inline태그는 다음과 같습니다
        - block : div, table, h1~h6, p, form, ul, ol
        - inline : span, a, br, input, img
    - flex는 컨테이너의 형태로 엘리먼트를 관리합니다
    - 최근 들어서는 Grid를 많이 사용합니다. Flex가 1차원적이라면 Grid는 2차원적으로 괸라가 가능하기 때문입니다.
    - visibility 속성은 엘리먼트의 가시성을 정의합니다.
    - 중요한 것은 display:none과 visibility:hidden의 차이입니다.
    - display:none은 엘리먼트의 영역이 보이지 않고ㅡ visibility:hidden은 차지하는 영역이 보입니다.
    - 다음으로 position 속성은 엘리먼트를 어떻게 위치시킬 것인지를 정의합니다.
        position : static | fixed | relative | absolute
    - static은 원래 순서대로 위치 시킵니다.
    - fixed는 window에 상대적 위치라고 정의하지만 지금은 sticky로 바뀌었습니다.
    - relative는 요소에 대한 상대적 위치입니다.
    - absolute는 window에 대한 절대적인 위치입니다.

- 많이 사용하는 기타 속성
    - 16진수 컬러값 : #ff0000
    - 투명도를 가진 16진수 컬러값 : #ff000055
    - RGB컬러값 : rgb(255,0,0)
    - RGBA 컬러값 : rgb(255,0,0,0.5)
    - 정의된 색상 이름
    - currentcolor 키워드

- styled-components
    - CSS 문법을 그대로 사용하면서 결과물을 스타일링된 컴포넌트 형태로 만들어 주는 오픈소스 라이브러리
    - 컴포넌트의 개념을 사용하고 있어 리액트 개발에 많이 사용됩니다.
    - 태그드 템플릿 리터럴을 사용하여 구성 요소의 스타일을 지정합니다.
    - 태그드 템플릿 리터럴은 자바스크립트에서 제공하는 문법 중 하나로 리터럴을 템플릿 형태로 사용하는 것입ㄴ니다
    - styled.<HTML tag>` ... ` 의 형태로 정의한 후 컴포넌트를 생성해서 사용합니다.

## 6월 11일 강의내용
- 컨텍스트 API
    - 리액트에서 제공하는 컨텍스트 API를 통해 컨텍스트를 어떻게 사용하는지에 대해 알아봅시다.
    - 컨텍스트를 생성하기 위한 함수입니다. React.createContext 파라미터에는 기본값을 넣어주면 됩니다.
    - 하위 컴포넌트는 가장 가까운 상위 레벨의 provider로부터 컨텍스트를 받게 되지만 만일 provider를 찾을 수 없다면 위에서 설정한 기본값을 사용하게 됩니다. 
      const MyContext = React.createContext(기본값);

- Context.Provider
    - Context.Provider 컴포넌트로 하위 컴포넌트들을 감싸주면 모든 하위 컴포넌트들이 해당 컨텍스트의 데이터에 접근할 수 있게 됩니다.
        ```<myContext.Provider value={ some value }>```
    - Provider 컴포넌트에는 value라는 prop이 있고 이것은 Provider 컴포넌트 하위에 있는 컴포넌트에게 전달됩니다.
    - 하위 컴포넌트를 consumer 컴포넌트라고 부릅니다.

- Class.contextType
    - provider 하위에 있는 클래스 컴포넡느에서 컨텍스트의 데이터에 접근하기 위해 사용합니다.
    - Class 컴포넌트는 더 이상 사용하지 않으므로 참고만 합니다.

- Context.Consumer
    - 함수형 컴포넌트에서 Context.Consumer를 사용하여 컨텍스트를 구독할 수 있습니다.
    - 컴포넌트의 자식으로 함수가 올 수 있는데 이것을 function as a child라고 부릅니다.
    - Conttext.Consumer로 감싸주면 자식으로 들어간 함수가 현재 컨텍스트의 value를 받아서 리액트 노드로 리턴합니다.
    - 함수로 전달되는 value는 provider의 value prop과 동일합니다.

- Context.displayName
    - 컨텍스트 객체는 displayName이라는 문자열 속성을 갖습니다.
    - 크롬의 리액트 개발자 도구에서는 컨텍스트의 Provider나 Consumer를 표시할 때 displayName을 함께 표시해줍니다.

- 여러개의 컨텍스트 사용하기
    - 여러 개의 컨텍스트를 동시에 사용하려면 Context.Provider를 중첩해서 사용합니다.
    - 예제에서는 ThemeContext와 UserContext를 주첩해서 사용하고 있습니다.
    - 이런 방법으로 여러 개의 컨텍스트를 동시에 사용할 수 있습니다.
    - 하지만 두 개 또는 그 이상의 컨텍스트 값이 자주 함께 사용될 경우 모든 값을 한번에 제공해 주는 별도의 render prop 컴포넌트를 직접 만드는 것을 고라하는 것이 좋습니다.

- useContext
    - 함수형 컴포넌트에서 컨텍스트를 ㅅ용하기 위해 컴포넌트를 매번 Consumer 컴포넌트로 감싸주는 것보다 더 좋은 방법이 있습니다. 바로 Hook입니다.
    - useContext() 혹은 React.createContext()함수 호출로 생성된 컨텍스트 객체를 인자로 받아서 현재 컨텍스트의 값을 리턴합니다.
    - 이 방법도 가장 가까운 상위 Provider로부터 컨텍스트의 값을 받아옵니다.
    - 만일 값이 변경되면 useContext() 훅을 사용하는 컴포넌트가 재 렌더링 됩니다.
    - 또한 useContext() 훅을 사용할 때에는 파라미터로 컨텍스트 객체를 넣어줘야 한다는 것을 기억해야 합니다.
    - // 올바른 사용법
    - useContext(MyContext)
    - // 잘못된 사용법
    - useContext(MyContext.Consumer)
    - useContext(MyContext.Provider)

    - useState와 useContext의 차이
        - useState -> local(해당 컴포넌트)를 관리해줌
        - useContext -> 전역적인 컴포넌트를 관리해줌

## 6월 5일 강의 내용
- Shared State
    - Share State는 state의 공유를 의미합니다.
    - 같은 부모 컴포넌트의 state를 지식 컴포넌트가 공유해서 사용하는 것입니다.
    - 다음 그림은 부모 컴포넌트가 섭씨 온도의 state를 갖고있고 이 것을 컴포넌트C와 컴포넌트F가 공유해서 사용하는 것을 보여줍니다.
    - 화씨 섭씨 이미지

- 합성에 대해 알아보기
    - 합성은 여러 개의 컴포넌트를 합쳐서 새로운 컴포넌트를 만드는 것입니다.
    - 조합 방법에 따라 합성의 사용 기법은 다음과 같이 나눌 수 있습니다.

- Containment
    - 특정 컴포넌트가 하위 컴포넌트를 포함하는 형태의 합성 방법입니다.
    - 컴포넌트에 따라서는 어떤 자식 엘리먼트가 들어올 지 미리 에상할 수 없는 경우가 있습니다.
    - 범용적인 박스역할을 하는 사이드바 혹은 디이어로그와 같은 컴포넌트에서 특히 자주 볼 수 있습니다.
    - 이런 컴포넌트에서는 children prop을 사용하여 자식 엘리먼트를 출력에 그대로 전달하는 것이 좋습니다.
    - 이떄 children prop은 컴포넌트의 props에 기본적으로 들어있는 children속성을 사용합니다.

- React.createElemenet()에 관하여
    - jsx를 사용하지 않는 경우의 props전달 방법입니다.
    - 정확히 말하면 jsx를 사용하지 않고 리액트로 엘리먼트를 생성하는 방법입니다.



## 5월 29일 강의 내용
- textarea 태그
    - HTML태그에서는 <textarea>의 children으로 텍스트가 들어가는 형태입니다.
    - 리액트에서는 state를 통해 태그의 value라는 attribute를 추가합니다.

- input Null Value
    - 제어 컴포넌트에 value prop을 정해진 값으로 넣으면 코드를 정하지 않는 한 입력값을 바꿀 수 없습니다.
    - 만약 value prop은 넣되 자유롭게 입력할 수 있게만들고 싶다면 값이 undefined또는 null을 넣어주면 됩니다.

- shared state
    - 어떤 컴포넌트에 스테이트 컴포넌트에 있는 하위 컴포넌트의 경로를 사용하는 것을 shared state라고 한다.
    - state에 있는 데이터를 여러 개의 하위 컴포넌트에서 공통적으로 사용하는 경우


## 5월 22일 강의 내용

- 리스트와 키란 무엇인가?
    - 리스트는 자바스크립트의 변수나 객체를 하나의 변수로 묶어 놓은 배열과 같은 것
    - 키는 각 객체나 아이템을 구분할 수 있는 고유한 값을 의미합니다.
    - 리액트에서는 배열과 키를 사용하는 반복되는 다수의 엘리먼트를 쉽게 렌더링할 수 있습니다.

- 여러 개의 컴포넌트 렌더링하기
    - 예의 에어비엔비의 화면처럼 같은 컴포넌트를 화면에 반복적으로 나타내야 할 경우 배열에 들어있는 엘리먼트를 map()함수를 이용하여 렌더링합니다.
    - 다음은 numbers 배열에 들어가는 각각의 요소를 map()를 이용하여 하나씩 추출하여, 2를 곱한 후 double라는 배열에 다시 넣는 코드입니다
    ``` JavaScript 
        const double = numbers.map((number) => number * 2)
    ```  
    - 다은은 리액트에서 map() 함수를 사용한 에제입니다.
    ``` JavaScript 
        const numbers = [1,2,3,4,5]
        const listItems = numbers.map((number) => {
            <li>{number}</li>
        })
    ```

- 리스트의 키에 대해 알아보기
    - 리스트에서의 키는 "리스트 에서 아이템을 구별하기 위한 고유한 문자열"입니다.
    - 이 키는 리스트에서 어떤 아이템이 변경, 추가 또는 제거되었는지 구분하기 위해 사용됩니다.
    - 키는 같은 리스트에 있는 엘리먼트 사이에서만 고유한 값이면 됩니다.

- 기본적인 리스트 컴포넌트
    - 앞서 작성한 코드를 별도의 컴포넌트로 분리하면 다음과 같습니다.
    - 이 컴포넌트는 props로 받은 숫자를 numbers로 받아 리스트로 렌더링해줍니다.
    ``` JavaScript 
        export default function NumberList(props) {
        const { numbers } = props

        const listItems = numbers.map((number) =>
          <li>{number}</li>
        );

        return (
            <ul>{listItems}</ul>
        )
}
    ```  

- 폼이란 무엇인가?
    - 폼은 일반적으로 사용자로부터 입력을 받기위한 양식에서 많이 사용합니다.

## 5월 1일 강의 내용

- 훅의 규칙
    - 첫 번째 규칙은 무조건 최상위 레벨에서만 호출해야 한다는 것입니다.
    - 따라서 반복문이나 조건문 또는 중첩된 함수들 안에서 훅을 호출하면 안됩니다.
    - 이 규칙에 따라서 혹은 컴포넌트가 렌더링 될 떄마다 같은 순서로 호출되어야 합니다
    - 두 번째 규칙은 함수형 컴포너트에서만 훅을 호출해야 한다는 것입니다.
    - 따라서 일반 자바스크립트 함수에서 훅을 호출하면 안됩니다.
    - 훅은 함수형 컴포넌트 혹은 직접 만든 커스텀 훅에서만 호출할 수 있습니다.

- 커스텀 훅 만들기
    - 필요하다면 직접 훅을 만들어 쓸 수도 있습니다. 이것을 커스텀 훅 이라고 합니다.

- 이벤트 처리하기
    - 이벤트이름이 onclick에서 onClick으로 변경 (카멜케이스)
    - 전달하려는 함수는 문자열에서 함수 그대로 전달
    - 이벤트가 발생했을 때 해당 이벤트를 처리하는 함수를 이벤트 핸들러 라고 합니다. 또는 이벤트가 발생하는 것을 계속 들고 있다는 의미로 이벤트 리스너라고 부르기도 합니다.

- 이벤트 핸들러 추가하는 방법
    - 버튼을 클릭하면 이벤트 핸들러 함수인 handleClick함수를 호출하도록 되어있음
    - bind를 사용하지 않으면 this.handleClick은 글로벌 스코프에서 호출되어 undefined으로 사용할 수 없기 때문입니다.
    - bind를 사용하지 않으려면 화살표 함수를 사용하는 방법도 있씁니다.
    - 하지만 클래스 컴포넌트는 이제 거의 사용하지 않습니다.



## 4월 17일 강의 내용

- 훅이란 무엇인가
    - 클래스형 컴포넌트에서는 생성자에서 state를 정의하고, setState()함수를 통해 state를 업데이트합니다.
    - 예전에 사용하던 함수형 컴포넌트는 별도로 state를 정의하거나, 컴포넌트의 생먕주기에 맞춰서 어떤 코드가 실행되도록 할 수 없었습니다.  
    - 험수형 컴포넌트에서도 state나 생명주기 함수의 기능을 사용하게 해주기 위해 추가된 기능이 바로 훅입니다.
    - 함수형 컴포넌트도 훅을 사용하여 클래스형 컴포넌트의 기능을 모두 통일하게 구현할 수 있게 되었습니다.
    - Hook이란 state와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만들어둔 함수를 의미합니다.
    - 사용자 정의 훅을 만들 수 있으며, 이 경우에 이름은 자유롭게 할 수 있으나 use로 시작할 것을 권장합니다.  
    <br>

- useState
    - useState는 함수형 컴포넌트에서 state를 사용하기 위한 Hook입니다.
    - 하지만 증가는 시킬 수 있지만 증가할 때마다 재 렌더링은 일어나지 않습니다.
    - 이럴 때 state를 사용해야 하지만 함수형에는 없기때문에 useState()를 사용합니다  
    <br>
    
- getEffect
    - useState와 함께 가장 많이 사용되눈 Hook
    - 이 함수는 사이드 이펙트를 수행하기 위한 것입니다.
    - 영어로 Side Effect는 부작용을 의미합니다, 일반적으로 프로그래밍에서 사이트 이펙트는 개발자가 의도하지 않은 코드가 실행되면서 버그가 발생하는 것을 말합니다.
    - 하지만 리액트에서는 효과 또는 영향을 뜻하는 effect의미에 가깝습니다.
    - 예를 들면 서버에서 데이터를 받아오거나 수동으로 DOM을 변경하는 등의 작업을 의미합니다.
    - 이 작업을 이펙트라고 부르는 이유는 이 작업들이 다른 컴포넌트에 영향을 미칠 수 있으며, 렌더링중에는 작업이 완료될 수 없기 떄문입니다. 렌더링이 끝난 이후에 실행되어야 하는 작업들입니다.
    - 클래스 컴포넌트의 생명주기 함수와 같은 기능을 하나로 통합한 기능을 제공합니다.
    - 저기는 useEffect가 side effect가 아니라 effectd에 가깝다고 설명하고 있지만, 이것은 부작용의 의미를 잘못 해석해서 생긴 오해이다.
    - side effect는 원래의 용도 혹은 목적의 효과외에 부가적으로 다른 효과가 있는것을 뜻하는 것입니다.
    - sideeffect는 렌더링 외에 실행해야 하는 부수적인 코드를 실행합니다.
    - 예를들면 네트워크 리퀘스트, DOM 수동 조작, 로깅 등은 정리가 필요없는 경우들입니다.
    - useEffect함수는 다음과 같이 사용합니다.
    - 첫번째 파라미터는 이펙트 람수가 들어가고, 두번째 파라미터로는 의존성 배열이 들어갑니다.
    - 의존성 배열은 이펙트가 의존하고 있는 배열로, 배열 안에 있는 변수 중에 하나라도 값이 변경되었으면  DOM이 변경된 이후에 해당 이펙트 함수를 실행하라는 의미입니다.  
    <br>

- useMemo
    - useMemo() 혹은 Memoizde value를 리턴하는 훅입니다.
    - 이전 계산값을 갖고 있기 때문에 연산량이 많은 작업의 반복을 피할 수 있습니다.
    - 이 훅은 렌더링이 일어나는 동안 실행됩니다.
    - 따라서 렌더링이 일어나는 동안 실행되서는 안될 작업을 넣으면 안됩니다.
    - 예를 들면 useEffect에서 실행되어야 할 사이드 이펙트 같은 것입니다.
    - 다음 코드와 같이 의존성 배열을 넣지 않을 경우 렌더링이 일어날 때마다 매번 함수가 실행됩니다.
    - 따라서 의존성 배열을 넣지 않는 것은 의미가 없습니다.
    - 만약 빈 배열을 넣게 되면 컴포넌트 마운트 시에만 함수가 실행됩니다.
    ``` JavaScript 
        const memoizedValue = useMemo(
            () => {
                // 연산량이 많은 작업을 수행하여 결과를 반환
                // doSomething(의존성 변수1, 의존성 변수2)
                // }, [의존성 변수1, 의존성 변수2]
                return computerExpensiveValue"의존성변수1", "의존성변수2")
            }
        )
    ```  
    <br>

- useCallback
    - useCallback() 혹은 useMemo()와 유사한 역할을 합니다.
    - 차이점은 값이 아닌 함수를 반환한다는 점입니다.
    - 의존성 배열을 파라미터로 받는 것은 useMemo와 통일합니다.
    - 파라미터로 받은 함수를 콜백이라고 부릅니다.
    - useMemo와 마찬가지로 의존성 배열 중 하나라도 변경되면 콜백함수를 반환합니다.
    ``` JavaScript 
        const memoizedValue = useMemo(
        () => {
            // 연산량이 많은 작업을 수행하여 결과를 반환
            doSomething(의존성 변수1, 의존성 변수2)
            }, [의존성 변수1, 의존성 변수2]
        
        )
    ```  
     <br>

- useRef
    - UseRef() 혹은 레퍼런스를 사용하기 위한 훅입니다.
    - 레퍼런스란 특정 컴포넌트에 접근할 수 있는 객체를 의미합니다.
    - iseRef() 혹은 바로 이 레퍼런스 객체를 반환합니다.
    - 레퍼런스 객체에는 current라는 속성이 있는데, 이것은 현재 참조하고 있는 엘리먼트를 의미합니다.
    - 이렇게 반환된 레퍼런스 객체는 컴포넌트의 라이프타임 전체에 걸쳐서 유지됩니다.
    - 즉 컴포넌트가 마운트 해제 전까지는 계속 유지된다는 의미입니다.
    ``` JavaScript 
        const refContainer = useRef(초깃값);   
    ```  
    <br>

- 훅의 규칙
    - 첫 번쨰 규칙은 무조건 최상의 레벨에서만 호출해야 한다는 것입니다, 여기서 최상위는 컴포넌트의 최상위 레벨을 의미합니다.
    - 따라서 반복문이나 조건문 또는 중첩된 함수를 안에서 훅을 호출하면 안됩니다.
    - 이 규칙에 따라서 혹은 컴포넌트가 렌더링 될때마다 같은 순서로 호출되어야 합니다.


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
