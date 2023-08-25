import styled from "styled-components";
import chatIcon from "../../images/main/chatIcon.png";
import imageIcon from "../../images/main/imageIcon.png";
import puzzleIcon from "../../images/main/puzzleIcon.png";
import memoIcon from "../../images/main/memoIcon.png";
import Image from "next/image";
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

const Feature = () => {


    return <>
        <FeatureContainer>
            <p>이런 기능도 있어요</p>
            <Slider>
                <Block>
                    <Image style={{margin:"auto"}} src={imageIcon} alt="직종 관련 기사" width={44} height={44}/>
                    <p>직종 관련 기사</p>
                </Block>
                <Block>
                <Image style={{margin:"auto"}} src={puzzleIcon} alt="퀴즈" width={44} height={44}/>
                    <p>퀴즈</p>
                </Block>
                <Block>
                <Image style={{margin:"auto"}} src={chatIcon} alt="오늘의 명언" width={44} height={44}/>
                    <p>오늘의 명언</p>
                </Block>
                <Block>
                <Image style={{margin:"auto"}} src={memoIcon} alt="멘토링 요약" width={44} height={44}/>
                    <p>멘토링 요약</p>
                </Block>
            </Slider>
        </FeatureContainer>
    </>
}


export default Feature;