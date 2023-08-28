import styled from "styled-components";
import CharBtn from "../main/CharBtn";
import characterOneImage from "../../images/main/character1.png";
import characterTwoImage from "../../images/main/character2.png";
import characterThreeImage from "../../images/main/character3.png";


const Title = styled.div`
  text-align:left;
  margin-top:1em;
  font-size:${p=>p.theme.fontSizes.title};
  font-weight:${p=>p.theme.fontWeight.title};
`
const PlusBtn = styled.div`
    position:absolute;
    bottom:5em;
    right:2em;
    width:4.5em;
    height:4.5em;
    border-radius: 3em;
    background-image: ${p=>`linear-gradient(${p.theme.colors.blue+"99"}, ${p.theme.colors.blue+"99"}), linear-gradient(to bottom, #96A0FF 0%, ${p.theme.colors.blue+"99"} 100%)`};
    background-origin: border-box;
    background-clip: content-box, border-box;
    border:solid 2px transparent;

    display:flex;
    justify-content:center;
    align-items:center;

    svg{
        position:absolute;
    }
    svg:last-child {
        transform:translate(4px, 4px);
        opacity:0.2;
        filter:blur(5px);
    }
`

const Main = () => {



    return <>
            <PlusBtn>

            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="COCO/Bold/User-plus">
                <g id="Vector">
                <path d="M14.8 4C11.0445 4 8 7.04446 8 10.8C8 14.5555 11.0445 17.6 14.8 17.6C18.5555 17.6 21.6 14.5555 21.6 10.8C21.6 7.04446 18.5555 4 14.8 4Z" fill="#F8F8FD"/>
                <path d="M18.8129 20.6252C16.1545 20.201 13.4455 20.201 10.7871 20.6252L10.5021 20.6707C6.75628 21.2685 4 24.4996 4 28.2929C4 30.3403 5.65975 32 7.70715 32H21.8929C23.9403 32 25.6 30.3403 25.6 28.2929C25.6 24.4996 22.8437 21.2685 19.0979 20.6707L18.8129 20.6252Z" fill="#F8F8FD"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M27.6 13.6C28.2627 13.6 28.8 14.1373 28.8 14.8V16.8H30.8C31.4627 16.8 32 17.3373 32 18C32 18.6627 31.4627 19.2 30.8 19.2H28.8V21.2C28.8 21.8627 28.2627 22.4 27.6 22.4C26.9373 22.4 26.4 21.8627 26.4 21.2V19.2H24.4C23.7373 19.2 23.2 18.6627 23.2 18C23.2 17.3373 23.7373 16.8 24.4 16.8H26.4V14.8C26.4 14.1373 26.9373 13.6 27.6 13.6Z" fill="#F8F8FD"/>
            </g>
            </g>
            </svg>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="COCO/Bold/User-plus">
                <g id="Vector">
                <path d="M14.8 4C11.0445 4 8 7.04446 8 10.8C8 14.5555 11.0445 17.6 14.8 17.6C18.5555 17.6 21.6 14.5555 21.6 10.8C21.6 7.04446 18.5555 4 14.8 4Z" fill="#F8F8FD"/>
                <path d="M18.8129 20.6252C16.1545 20.201 13.4455 20.201 10.7871 20.6252L10.5021 20.6707C6.75628 21.2685 4 24.4996 4 28.2929C4 30.3403 5.65975 32 7.70715 32H21.8929C23.9403 32 25.6 30.3403 25.6 28.2929C25.6 24.4996 22.8437 21.2685 19.0979 20.6707L18.8129 20.6252Z" fill="#F8F8FD"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M27.6 13.6C28.2627 13.6 28.8 14.1373 28.8 14.8V16.8H30.8C31.4627 16.8 32 17.3373 32 18C32 18.6627 31.4627 19.2 30.8 19.2H28.8V21.2C28.8 21.8627 28.2627 22.4 27.6 22.4C26.9373 22.4 26.4 21.8627 26.4 21.2V19.2H24.4C23.7373 19.2 23.2 18.6627 23.2 18C23.2 17.3373 23.7373 16.8 24.4 16.8H26.4V14.8C26.4 14.1373 26.9373 13.6 27.6 13.6Z" fill="#F8F8FD"/>
            </g>
            </g>
            </svg>

        </PlusBtn>
        <Title>채팅</Title>
        <CharBtn 
        color1="#0019FA" 
        color2="#001881" 
        imagesrc={characterOneImage} 
        alt="요리사 캐릭터"
        title="요요"
        subtitle="안녕! 나는 ai 요리사 멘토 요요야. 궁금한 게 있다면 언제든지 물어봐!"
        />
        <CharBtn 
        color1="#FA9600" 
        color2="#F27400" 
        imagesrc={characterTwoImage} 
        alt="의사 캐릭터"
        title="사사"
        subtitle="안녕하세요. 저는 ai 의사 멘토, 사사예요!
        무엇이 궁금하신가요?"
        />
        <CharBtn 
        color1="#FF6C6C"
        color2="#BB0000" 
        imagesrc={characterThreeImage} 
        alt="의사 캐릭터"
        title="소소"
        subtitle="안녕하세요, ai 소방관 멘토입니다!
        질문이 있다면 언제든 해주세요!"
        />             
    </>
     
}


export default Main;
