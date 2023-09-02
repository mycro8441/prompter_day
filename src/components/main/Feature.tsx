import styled from "styled-components";
import chatIcon from "../../images/main/chatIcon.png";
import imageIcon from "../../images/main/imageIcon.png";
import puzzleIcon from "../../images/main/puzzleIcon.png";
import memoIcon from "../../images/main/memoIcon.png";
import Image from "next/image";
import useStore from "src/store";
import Quiz from "./Quiz";
import News from "./News";
import Quote_Details from "./Quote_Detail";
import Mento_Briefing from "./Mento_Briefing";
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
        margin-top:12px;
    }
    & > div{
        border:solid 3px transparent;
        border-radius: 36px;
        background-image: ${p=>`linear-gradient(${p.theme.colors.gray1}, ${p.theme.colors.gray1}), linear-gradient(to bottom, white 0%, ${p.theme.colors.gray1} 100%)`};
        background-origin: border-box;
        background-clip: content-box, border-box;
        width:72px;
        height:72px;
        display:flex;
        justify-content:center;
        align-items:center;
        img {
            position:absolute;
            z-index:1;
        }
        img:last-child {
            transform:translate(6px, 6px);
            filter:blur(10px);
            opacity:0.5;
            z-index:0;
        }
    }
`

const Feature = () => {

    const {changeTab} = useStore();

    return <>
        <FeatureContainer>
            <p>이런 기능도 있어요</p>
            <Slider>
                <Block onClick={()=>changeTab(<News/>, "News")}>
                    <div>
                       <Image style={{margin:"auto"}} src={imageIcon} alt="직종 관련 기사" width={44} height={44}/> 
                       <Image style={{margin:"auto"}} src={imageIcon} alt="직종 관련 기사" width={44} height={44}/>                        
                    </div>
                    <p>직종 관련 기사</p>
                </Block>
                <Block onClick={()=>changeTab(<Quiz/>, "Quiz")}>
                    <div>
                        <Image style={{margin:"auto"}} src={puzzleIcon} alt="퀴즈" width={44} height={44}/>
                        <Image style={{margin:"auto"}} src={puzzleIcon} alt="퀴즈" width={44} height={44}/>
                    </div>
                    <p>퀴즈</p>
                </Block>
                <Block onClick={()=>changeTab(<Quote_Details/>, "Quote")}>
                    <div>
                        <Image style={{margin:"auto"}} src={chatIcon} alt="오늘의 명언" width={44} height={44}/>
                        <Image style={{margin:"auto"}} src={chatIcon} alt="오늘의 명언" width={44} height={44}/>
                    </div>
                    <p>오늘의 명언</p>
                </Block>
                <Block onClick={()=>changeTab(<Mento_Briefing/>, "Mento_Brief")}>
                    <div>
                        <Image style={{margin:"auto"}} src={memoIcon} alt="멘토링 요약" width={44} height={44}/>
                        <Image style={{margin:"auto"}} src={memoIcon} alt="멘토링 요약" width={44} height={44}/>
                    </div>
                    <p>멘토링 요약</p>
                </Block>
            </Slider>
        </FeatureContainer>
    </>
}


export default Feature;