import Image from "next/image";
import styled from "styled-components";
import characterOneImage from "../../images/main/character1.png";
import characterTwoImage from "../../images/main/character2.png";
const ChatContainer = styled.div`
  width:100%;
  margin-top:1em;
  p {
    text-align:left;
    margin:0;
    font-size:${p=>p.theme.fontSizes.subtitle};
    font-weight: ${p=>p.theme.fontWeight.title};
  }
`
const BtnContainer = styled.div`
  width:100%;
  height:5em;
  display:flex;
  justify-content: center;
  align-items: center;
  margin-top:0.5em;
`
const Btn = styled.div`
  position:relative;
  width:100%;
  height:5em; 
  border:solid 3px transparent;
  border-radius: 1em;
  background-image: ${p=>`linear-gradient(${p.theme.colors.gray1}, ${p.theme.colors.gray1}), linear-gradient(to bottom, white 0%, ${p.theme.colors.gray1} 100%)`};
  background-origin: border-box;
  background-clip: content-box, border-box;
  font-size:${p=>p.theme.fontSizes.smallTitle};
  font-weight:${p=>p.theme.fontWeight.smallTitle};

`

const Blur = styled.div<{color:string}>`
  position:absolute;
  border-radius: 1em;
  width:80%;
  height:5em; 
  left:50%;
  transform: translate(-50%, 10px);
  background-color:${p=>p.color};
  filter:blur(10px);
  z-index: 1;
`

const Adjuster = styled.div`
  display:flex;
  width:100%;
  height:100%;
  justify-content:space-between;
  align-items:center;
  padding:0 0.4em;
  
`

const CharacterContainer = styled.div`
    width:4em;
    height:4em;
    display:flex;
    justify-content: center;
    align-items: center;
`
const Circle = styled.div<{color1:string, color2:string}>`
  width:3em;
  height:3em;
  border-radius: 1.5em;
  
  background :${p=>`linear-gradient(180deg, ${p.color1} 0%, ${p.color2} 100%)`};
  display:flex;
  justify-content: center;
  align-items: center;
  overflow:hidden;
`
const CharacterInfoContainer = styled.div`
  flex:1;
  padding-left:5px;
  width:100%;
  height:100%;
  display:flex;
  flex-direction: column;
  justify-content: center;

  div:first-child {
    font-size:${p=>p.theme.fontSizes.smallTitle};
    font-weight:700;
  }
  div:last-child {
    font-size:${p=>p.theme.fontSizes.smallText};
    font-weight:${p=>p.theme.fontWeight.smallText};
  }
`
const ChatSlider = () => {


    return <>
        <ChatContainer>
            <p>최근 나눈 대화</p>

            <BtnContainer>
                <Blur color='#0019FA09'/>
                <Btn>
                    <Adjuster>
                        <CharacterContainer>
                          <Circle color1="#0019FA" color2="#001881">
                            <Image src={characterOneImage} alt="요리사 캐릭터" width={32}/>
                          </Circle>
                        </CharacterContainer>
                        <CharacterInfoContainer>
                          <div>요요</div>
                          <div>안녕! 나는 ai 요리사 멘토 요요야. 궁금한 게 있다면 언제든지 물어봐!</div>
                        </CharacterInfoContainer>
                    </Adjuster>
                </Btn>
            </BtnContainer>

            
            <BtnContainer>
                <Blur color='#FF5C0009'/>
                <Btn>
                    <Adjuster>
                        <CharacterContainer>
                            <Circle color1="#FA9600" color2="#F27400">
                              <Image src={characterTwoImage} alt="요리사 캐릭터" width={32}/>
                            </Circle>
                        </CharacterContainer>
                        <CharacterInfoContainer>
                          <div>사사</div>
                          <div>안녕하세요. 저는 ai 의사 멘토, 사사예요!
무엇이 궁금하신가요?</div>
                        </CharacterInfoContainer>
                    </Adjuster>
                </Btn>
            </BtnContainer>
        </ChatContainer>
    </>
}


export default ChatSlider;