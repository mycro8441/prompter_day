import styled from "styled-components";
import Image from "next/image";
import PlannerImg from "../../images/main/planner.png";

const Container = styled.div`
    position:relative;
    width:100%;
    height:100%;
    display:flex;
    justify-content: center;
    align-items:center;
    overflow-y: hidden;

`
const Block = styled.div`
    width:100%;
    text-align:center;
    p {
        margin:0.6em;
        font-size:${p=>p.theme.fontSizes.title};
        font-weight: ${p=>p.theme.fontWeight.title};
    }
    h2 {
        margin:0;
        font-size:${p=>p.theme.fontSizes.smallTitle};
        font-weight: ${p=>p.theme.fontWeight.smallTitle};        
    }
`
const Btn = styled.div`
    position:absolute;
    bottom:2em;
    width:80%;
    height:3.8em;
    color:${p=>p.theme.colors.gray1};
    border: 3px solid transparent;
    border-radius: 1em;
    background-image: linear-gradient(#6271F8, #6271F8), linear-gradient(to bottom, white 0%,  #6271F8 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    display:flex;
    justify-content: center;
    align-items: center;
`
const BlurCircle = styled.div`
    position:absolute;
    width:80vw;
    height:80vw;
    border-radius: 40vw;
    bottom:-10em;
    filter:blur(100px);
    background-color: ${p=>p.theme.colors.blue+"40"};
    pointer-events: none;
`

const IsNull = ({setIsCreate}) => {


    return <Container>
    <Block>
        <Image src={PlannerImg} alt="플래너 이미지" sizes="100vw" style={{ width: '40%', height: 'auto' }}/>
        <p>아직 계획이 없어요</p>
        <h2>하단의 버튼을 눌러서</h2>
        <h2>포켓멘토와 함께 계획을 세워보세요!</h2>
    </Block>
    <Btn onClick={()=>setIsCreate(true)}>
        커리어 플래너 추가하기
    </Btn>
    <BlurCircle/>
</Container>
}


export default IsNull;