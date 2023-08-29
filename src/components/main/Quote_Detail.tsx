import useStore from "src/store";
import styled from "styled-components";
import Home from "../Home";

const Container = styled.div`
    width:100%;
    height:100%;
    overflow:hidden;
    position: relative;
    //padding:4em 1.5em;
    display:flex;
    flex-direction: column;

`
const Header = styled.div`

    width:100%;
    height:15em;
    text-align:left;
    font-size:${p=>p.theme.fontSizes.title};
    font-weight:${p=>p.theme.fontWeight.title};
    color:${p=>p.theme.colors.gray1};
    border-radius:0px 0px 24px 24px;
    opacity: 0.8;
    background-color: #586Cf1;
    box-shadow: inset 0 0 10px 1px #6A7FEC;
    backdrop-filter: blur(10px);

`
const HeaderText = styled.div`
    width:100%;
    display:flex;
    padding:88px 24px;
    padding-bottom:0;
    align-items: center;
    gap:12px;
    p{
        margin:0;
    }
`
const HeaderContent = styled.div`
    margin:auto;
    width:65%;
    margin-top:2.5em;
    display:flex;
    flex-direction: column;
    align-items:center;
    p{
        font-size:${p=>p.theme.fontSizes.smallTitle};
        font-weight:${p=>p.theme.fontWeight.smallTitle};
        line-height:15px;
    }

    div {
        font-size:${p=>p.theme.fontSizes.subtitle};
        font-weight:${p=>p.theme.fontWeight.title};  
        line-height:24px;      
        text-align: center;
    }
`
const Blocks = styled.div`
    width:100%;
    height:100%;
    overflow-y:auto;
    padding: 32px 1.5em;
    flex-grow:1;
    width:100%;
    position:relative;
    overflow-y:auto;
    flex-basis:0;
    max-height:100%;
    display:flex;
    flex-direction: column;
    gap:12px;
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
    }

`
const Quote_Details = () => {

    const {changeTab} = useStore()

    return <Container>
        <Header>
            <HeaderText onClick={()=>changeTab(<Home/>, "Home")}>
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 13L1 7L7 1" stroke="#F8F8FD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>오늘의 명언</p>                
            </HeaderText>
            <HeaderContent>
                <svg width="19" height="2" viewBox="0 0 19 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="19" height="2" rx="1" fill="#F8F8FD"/>
                </svg>
                <p>
                2023년 8월 28일
                </p>
                <div>
                    {'변명 중에서도 가장 어리석고 못난 변명은 "시간이 없어서"라는 변명이다.'}

                </div>
            </HeaderContent>
        </Header>
        <Blocks>
            <Block>
                <div>
                    <p>자신의 일을 발견한 사람은 행복한 사람이다.
    그에게는 인생의 목적이 있다.</p>
                    <div>2023-08-24</div>
                </div>

            </Block>
            <Block>
                <div>
                    <p>자신의 일을 발견한 사람은 행복한 사람이다.
    그에게는 인생의 목적이 있다.</p>
                    <div>2023-08-23</div>
                </div>

            </Block>
            <Block>
                <div>
                    <p>아는 것만으로는 충분하지 않다.</p>
                    <div>2023-08-22</div>
                </div>

            </Block>
        </Blocks>
    </Container>
}


export default Quote_Details;