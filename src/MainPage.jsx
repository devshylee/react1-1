import styled from "styled-components";

const Wrapper = styled.div`
padding: 1em;
background : gray;`

const Title = styled.h1`
font-size : 1.5em;
color : white;
texdt-align : center`

const Button = styled.button`
color : ${props => props.dark ? 'white' : 'dark' }
background : ${props => props.dark ? 'black' : 'white'}
border : 1px solid black
`

const RoundButton = styled(Button)`
    border-radius : 16px;
`

export default function MainPage(props){
    return (
        <Wrapper>
            <Title>
                안녕 리액트!
                <Button>Normal</Button>
                <Button>Dark</Button>
                <RoundButton>RoundButton</RoundButton>
            </Title>
        </Wrapper>
    )
}