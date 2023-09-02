import useStore from "src/store";
import styled from "styled-components";
import Home from "../Home";

const Container = styled.div`
    width:100%;
    height:100%;
    overflow:hidden;
    position: relative;
    padding:4em 1.5em;
    padding-bottom:0;
    display:flex;
    flex-direction: column;

`
const Header = styled.div`

    width:100%;
    display:flex;
    text-align:left;
    margin-top:1em;
    font-size:${p=>p.theme.fontSizes.title};
    font-weight:${p=>p.theme.fontWeight.title};
    align-items:center;
    gap:12px;
`
const Blocks = styled.div`
    width:100%;
    height:100%;
    overflow-y:auto;
    padding: 32px 0;
    flex-grow:1;
    width:100%;
    position:relative;
    overflow-y:auto;
    flex-basis:0;
    max-height:100%;
    display:flex;
    flex-direction: column;
    gap:6px;
`
const Block = styled.div`
  position:relative;
  width:100%;
  height:auto;
  border:solid 3px transparent;
  border-radius: 1em;
  background-image: ${p=>`linear-gradient(${p.theme.colors.gray1}, ${p.theme.colors.gray1}), linear-gradient(to bottom, white 0%, ${p.theme.colors.gray1} 100%)`};
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow:0px 5px 15px 1px #0019FA1A;
    & > div {
        width:100%;
        height:100%;
        padding:20px 24px; 
        padding-bottom:12px;
        p{
            font-size:${p=>p.theme.fontSizes.smallTitle};
                font-weight:${p=>p.theme.fontWeight.smallTitle};
                margin:0;
        }
        div {
            font-size:${p=>p.theme.fontSizes.smallText};
            font-weight:${p=>p.theme.fontWeight.smallText};
            color:${p=>p.theme.colors.gray3};
            margin-top:4px;
        }
        h1 {
            width:100%;
            text-align:right;
            font-size:${p=>p.theme.fontSizes.smallText};
            font-weight:${p=>p.theme.fontWeight.smallText};
            color:${p=>p.theme.colors.gray3};
        }
    }

`
const Title = styled.div`
    margin-top:1em;
    margin-bottom:6px;
    width:100%;
    text-align:left;
    color:#40414A;
        font-size:${p=>p.theme.fontSizes.subtitle};
        font-weight: ${p=>p.theme.fontWeight.title};
        line-height:24px;
`
const Mento_Briefing = () => {

    const {changeTab} = useStore()

    return <Container>
        <Header onClick={()=>changeTab(<Home/>, "Home")}>
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 13L1 7L7 1" stroke="#202126" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            멘토링 요약
        </Header>
        <Blocks>
            <Title>최근 7일</Title>
            <Block>
                <div>
                    <p>웹 개발에서 자주 사용하는 프레임워크</p>
                    <div>React, Angular, Vue.js, Express.js, Ruby on Rails, Django, Spring Boot</div>
                    <h1>2023-09-03</h1>
                </div>
            </Block>
            <Block>
                <div>
                    <p>하나의 프레임워크를 마스터하려면</p>
                    <div>1. 기초학습, 2. 중급 수준, 3. 고급 수준</div>
                    <h1>2023-09-03</h1>
                </div>
            </Block>
            <Block>
                <div>
                    <p>next.js란?</p>
                    <div>react 기반의 프레임워크로, 서버 사이드 렌더링 및 정적 사이트 생성을 강력하게 지원</div>
                    <h1>2023-09-03</h1>
                </div>
            </Block>
            <Title>최근 30일</Title>

        </Blocks>
    </Container>
}


export default Mento_Briefing;