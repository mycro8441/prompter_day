import Image from "next/image";
import styled from "styled-components";

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
  height:4em;
  display:flex;
  justify-content: center;
  align-items: center;
  margin-top:0.5em;
`
const Btn = styled.div`
  position:relative;
  width:100%;
  height:4em; 
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
  height:4em; 
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
  padding:0 1.4em;
  
`

const CharacterContainer = styled.div`
    position:absolute;
    width:52px;
    height:52px;

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
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="52" viewBox="0 0 52 52" fill="none">
                            <circle cx="26" cy="26" r="26" fill="url(#paint0_linear_24_5161)"/>
                            <defs>
                            <linearGradient id="paint0_linear_24_5161" x1="26" y1="0" x2="26" y2="52" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#0019FA"/>
                            <stop offset="1" stop-color="#001881"/>
                            </linearGradient>
                            </defs>
                        </svg>
                        </CharacterContainer>
                    </Adjuster>
                </Btn>
            </BtnContainer>
            <BtnContainer>
                <Blur color='#FF5C0009'/>
                <Btn>
                    <Adjuster>
                        <CharacterContainer>

                        </CharacterContainer>
                    </Adjuster>
                </Btn>
            </BtnContainer>
        </ChatContainer>
    </>
}


export default ChatSlider;