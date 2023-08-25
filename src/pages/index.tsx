import ChatSlider from "src/components/main/ChatSlider"
import Feature from "src/components/main/Feature"
import Hello from "src/components/main/Hello"
import styled from "styled-components"

const Container = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  flex-direction: column;
  align-items: center;
  padding-top:5em;
  background-color: #ECECF2;
`
const BtnContainer = styled.div`
  width:90%;
  height:4em;
  display:flex;
  justify-content: center;
  align-items: center;
`
const Btn = styled.div`
  position:absolute;
  width:85%;
  height:4em; 
  border:solid 3px transparent;
  border-radius: 1em;
  background-image: ${p=>`linear-gradient(${p.theme.colors.gray1}, ${p.theme.colors.gray1}), linear-gradient(to bottom, white 0%, ${p.theme.colors.gray1} 100%)`};
  background-origin: border-box;
  background-clip: content-box, border-box;
  font-size:${p=>p.theme.fontSizes.smallTitle};
  font-weight:${p=>p.theme.fontWeight.smallTitle};

`

const Blur = styled.div`
  position:relative;
  border-radius: 1em;
  width:90%;
  height:90%; 
  box-shadow: 0 5px 15px 1px #0019FA1A;
`

const Adjuster = styled.div`
  display:flex;
  width:100%;
  height:100%;
  justify-content:space-between;
  align-items:center;
  padding:0 1.4em;
  
`

const Section1 = styled.div`
  width:100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Section2 = styled.div`
  width:100%;
  margin-top:2.2em;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  padding:2em;
  flex:1;

  background-color: ${p=>p.theme.colors.gray1};

`

export default function Home() {
  return (
    <>
      <Container>
        <Section1>
          <Hello/>
          <BtnContainer>
            <Blur/>
            <Btn>
              <Adjuster>
                <p>성공은 하룻밤 사이에 오지 않는다.</p>
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L7 7L1 13" stroke="#202126" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>              
              </Adjuster>

            </Btn>
          </BtnContainer>          
        </Section1>
        <Section2>
          <Feature/>
          <ChatSlider/>
        </Section2>
      </Container>
    </>
  )
}
