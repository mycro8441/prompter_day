import useStore from "src/store";
import styled from "styled-components";
import Home from "../Home";



const Container = styled.div`
    width:100%;
    height:100%;
    overflow:hidden;
    position: relative;
    padding:4em 1.5em;
    padding-bottom:1em;
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
const HeaderLight = styled.div`
    display:flex;
    justify-content: center;
    & > div {
        margin-top:1em;
        display:flex;
        gap:12px;
    }
`
const QuizContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    flex:1;
    padding-top:1em;
`
const QuizTitle = styled.div`
    p {
        font-size:${p=>p.theme.fontSizes.title};
        font-weight:${p=>p.theme.fontWeight.title};
        margin:0;
        margin-bottom:12px;
    }
    & > div {
        font-size:${p=>p.theme.fontSizes.subtitle};
        font-weight:${p=>p.theme.fontWeight.subtitle};
        width:70%;
    }
`
const AnsButtonContainer = styled.div`
    width:100%;

    & > div:last-child {
        width:100%;
        height:4em;
        margin-top:12px;
        display:flex;
        justify-content: center;
        align-items: center;
        gap:4px;
        p {
            color:${p=>p.theme.colors.gray4};
            font-size:${p=>p.theme.fontSizes.smallTitle};
            font-weight:${p=>p.theme.fontWeight.smallTitle};
        }

    }
`
const AnsButton = styled.div<{ans:boolean}>`
    position:relative;
    width:100%;
    height:4em; 
    border:solid 3px transparent;
    z-index:5;
    border-radius: 1em;
    margin-top:12px;
    background-image: ${p=>`linear-gradient(${p.ans ? p.theme.colors.blue+"99" : p.theme.colors.gray1}, ${p.ans ? p.theme.colors.blue+"99" : p.theme.colors.gray1}), linear-gradient(to bottom, ${p.ans ? "#929DFF" : "white"} 0%, ${p.ans ? p.theme.colors.blue+"99" : p.theme.colors.gray1} 100%)`};
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow:0px 2px 15px 1px #0019FA1A;
    display:flex;
    justify-content:center;
    align-items:center;
    color:${p=>p.ans && p.theme.colors.gray1};
    font-size:${p=>p.theme.fontSizes.smallTitle};
    font-weight:${p=>p.theme.fontWeight.title};
    text-align:left;
`
const BlurCircle1 = styled.div`
    position:absolute;
    z-index:0;
    width:100vw;
    height:100vw;
    left:-4em;
    bottom:0em;
    border-radius: 40vw;
    filter:blur(100px);
    background-image:linear-gradient(#FF5C0040, #FF861640);
    pointer-events: none;
`
const BlurCircle2 = styled.div`
    position:absolute;
    z-index:0;
    width:80vw;
    top:2em;
    right:-5em;
    height:80vw;
    border-radius: 40vw;
    filter:blur(100px);
    background-image:linear-gradient(#0019FA40, #6EA2F040);
    pointer-events: none;
`
const Quiz = () => {


    const {changeTab} = useStore();
    
    return <>
        <Container>
            <Header  onClick={()=>changeTab(<Home/>, "Home")}>
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 13L1 7L7 1" stroke="#202126" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                퀴즈
            </Header>
            <HeaderLight>
                <div>
                    {[...Array(5)].map((v, i)=>(
                        <>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="4.5" fill="#CACAD0" fill-opacity="0.6" stroke="url(#paint0_linear_241_669)"/>
                            <defs>
                            <linearGradient id="paint0_linear_241_669" x1="5" y1="0" x2="5" y2="10" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#EBEDFF"/>
                            <stop offset="1" stop-color="#F8F8FF" stop-opacity="0"/>
                            </linearGradient>
                            </defs>
                            </svg>                        
                        </>
                    ))}
                </div>
            </HeaderLight>
            <QuizContainer>
                <QuizTitle>
                    <p>Q1</p>
                    <div>화재 현장에서 물 대신
                        어떤 화학 물질을 사용하여
                        불을 진압할 수 있을까요?
                    </div>
                </QuizTitle>
                <AnsButtonContainer>
                    <AnsButton ans={false}>{"a) 유리섬유"}</AnsButton>
                    <AnsButton ans={true}>{"a) 유리섬유"}</AnsButton>

                    <AnsButton ans={false}>{"a) 유리섬유"}</AnsButton>
                    <AnsButton ans={false}>{"a) 유리섬유"}</AnsButton>
                    <div>
                        <p>다음 문제로 넘어가기</p>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 10H18M18 10L13.2157 6M18 10L13.2157 14" stroke="#6E6F77" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </div>
                </AnsButtonContainer>
                
            </QuizContainer>



            <BlurCircle1/>
            <BlurCircle2/>
        </Container>
    </>
}



export default Quiz;