import styled from "styled-components";

const FeatureContainer = styled.div`
  width:100%;
  margin-top:1em;
  p {
    text-align:left;
    margin:0;
    font-size:${p=>p.theme.fontSizes.subtitle};
    font-weight: ${p=>p.theme.fontWeight.title};
  }
`
const Slider = styled.div`
    width:100%;
    height:6em;
    margin-top:0.5em;
    display:flex;
    justify-content: space-between;
`

const Block = styled.div`
    
    display:flex;
    flex-direction:column;
    p {
        font-size:${p=>p.theme.fontSizes.smallText};
        font-weight:${p=>p.theme.fontWeight.smallText};
        text-align:center;
    }
`
const DummyImage = styled.div`
    width:72px;
    height:72px;
    background-color: brown;
`
const Feature = () => {


    return <>
        <FeatureContainer>
            <p>이런 기능도 있어요</p>
            <Slider>
                <Block>
                    <DummyImage/>
                    <p>직종 관련 기사</p>
                </Block>
                <Block>
                    <DummyImage/>
                    <p>퀴즈</p>
                </Block>
                <Block>
                    <DummyImage/>
                    <p>오늘의 명언</p>
                </Block>
                <Block>
                    <DummyImage/>
                    <p>멘토링 요약</p>
                </Block>
            </Slider>
        </FeatureContainer>
    </>
}


export default Feature;