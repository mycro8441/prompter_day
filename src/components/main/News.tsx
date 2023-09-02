import useStore from "src/store";
import styled from "styled-components";
import Home from "../Home";
import AINEWS from "../../images/news/AINEWS.jpg";
import WEBNEWS from "../../images/news/WEBNEWS.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getNews } from "src/lib/routes";
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
    const [data, setData] = useState([])
    useEffect(()=>{
        getNews("").then(res=>{
            console.log(res)
        })
    }, [])
    return <Container>
        <Header onClick={()=>changeTab(<Home/>, "Home")}>
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 13L1 7L7 1" stroke="#202126" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                직종 관련 기사
        </Header>
        <Blocks>
            <Block>
                <Title>AI가 냄새도 맡는다…향기도 디지털 세상으로</Title>
                <Subtitle>2023-09-02</Subtitle>
                <ImageContainer>
                    <Image src={AINEWS} alt="AI 자료사진" />
                </ImageContainer>
                <p>
                    {"로봇이 냄새로 독극물을 찾아내고 메타버스 세상에서 향기까지 나누는 시대가 열릴까. 특유의 복잡성 때문에 디지털화가 힘들었던 후각도 청각, 시각에 이어 머잖아 디지털 세상으로 편입될 것으로 보인다."}
                </p>
                <p>{"AI(인공지능) 기반 후각기술 스타트업 오스모(Osmo)는 미국 모넬케미컬센스센터, 영국 레딩대학, 미국 애리조나주립대학과 공동으로 얻은 연구성과를 1일(현지시간) 국제학술지 사이언스지에 발표했다..."}</p>
            </Block>
            <Block>
                <Title>2023년을 장식할 최고의 프로그래밍 언어 Top 10</Title>
                <Subtitle>2023-04-08</Subtitle>
                <ImageContainer>
                    <Image src={WEBNEWS} alt="웹뉴스" />
                </ImageContainer>
                <p>
                    {"개발자로서 다른 경력이나 회사를 찾고 있다면, 프로그래밍 언어를 하나쯤 새로 장착해 두는 것이 나쁘지 않은 선택이 될 수 있다. 언어를 많이 다룰 줄 안다고 해서 손해볼 것은 없다. 2023년 IT 분야에서 새로운 기회를 찾고자 한다면 다음 10가지 언어 중에서 선택할 것을 추천한다."}
                </p>
                <p>{"“가장 좋은 프로그래밍 언어는 무엇일까”라고 개발자들에게 묻는다면 다들 표현은 조금씩 다를지 몰라도 이런 식으로 답할 것이다. “어디에 쓸 건지에 따라 다르지.” 이 말은 사실이다. 목적과 조건을 불문하고 늘 최고의 성능을 발휘하는 단 하나의 프로그래밍 언어라는 건 세상에 존재하지 않기 때문이다. 모바일 앱을 개발하고자 하는 사람과, 웹 앱을 개발하고자 하는 사람은 다른 언어를 선호할 가능성이 높고, 비디오 게임 개발자 역시 B2B 소프트웨어 개발자와 다른 선호도를 가지고 있을 것이다."}</p>
            </Block>
        </Blocks>
    </Container>
}


export default News;