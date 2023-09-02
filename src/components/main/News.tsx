import useStore from "src/store";
import styled from "styled-components";
import Home from "../Home";
import CookImage from "../../images/news/cooking.png";
import Image from "next/image";
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
    gap:24px;
`
const Block = styled.div`
    width:100%;
    height:auto;
    background-color: #EEEEF6CC;
    border-radius: 16px;
    padding:24px;
    position:relative;

    p {
        color:#202126;
        font-size:${p=>p.theme.fontSizes.smallTitle};
        font-weight: ${p=>p.theme.fontWeight.smallTitle};
    }
`
const Title = styled.div`
    margin-top:8px;
    margin-bottom:6px;
    font-size:${p=>p.theme.fontSizes.subtitle};
    font-weight: ${p=>p.theme.fontWeight.title};
`
const Subtitle = styled.div`
    color:${p=>p.theme.colors.gray3};
    text-align:left;
    font-size:${p=>p.theme.fontSizes.smallTitle};
    font-weight: ${p=>p.theme.fontWeight.smallTitle};
`

const ImageContainer = styled.div`
    width:100%;
    margin:24px 0;

    img {
        width:100%;
        height:auto;
        border-radius: 12px;
    }

`
const News = () => {


    const {changeTab} = useStore();
    return <Container>
        <Header onClick={()=>changeTab(<Home/>, "Home")}>
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 13L1 7L7 1" stroke="#202126" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                직종 관련 기사
        </Header>
        <Blocks>
            <Block>
                <Title>세계적인 셰프가 선보인 혁신적인 요리 스타일</Title>
                <Subtitle>2023-08-27</Subtitle>
                <ImageContainer>
                    <Image src={CookImage} alt="요리하는 남자" />
                </ImageContainer>
                <p>
                    {"세계적으로 유명한 셰프가 새로운 요리 스타일을 선보였습니다. 이번 주말 동안 열린 '글로벌 요리 아카데미'에서는 다양한 나라의 요리 전문가들이 모여 혁신적인 요리 기법을 공유하고 경험을 나눴습니다."}
                </p>
                <p>{"이번 행사에서 주목받은 셰프는 프랑스의 미셸 르냥 셰프입니다. 그는 기존의 요리 경험을 뛰어넘... "}</p>
            </Block>
            <Block>
                <Title>세계적인 셰프가 선보인 혁신적인 요리 스타일</Title>
                <Subtitle>2023-08-27</Subtitle>
                <ImageContainer>
                    <Image src={CookImage} alt="요리하는 남자" />
                </ImageContainer>
                <p>
                    {"세계적으로 유명한 셰프가 새로운 요리 스타일을 선보였습니다. 이번 주말 동안 열린 '글로벌 요리 아카데미'에서는 다양한 나라의 요리 전문가들이 모여 혁신적인 요리 기법을 공유하고 경험을 나눴습니다."}
                </p>
                <p>{"이번 행사에서 주목받은 셰프는 프랑스의 미셸 르냥 셰프입니다. 그는 기존의 요리 경험을 뛰어넘... "}</p>
            </Block>
        </Blocks>
    </Container>
}


export default News;