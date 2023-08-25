import ChatSlider from "src/components/main/ChatSlider"
import Feature from "src/components/main/Feature"
import Hello from "src/components/main/Hello"
import Quote from "src/components/main/Quote"
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
          <Quote/>
        </Section1>
        <Section2>
          <Feature/>
          <ChatSlider/>
        </Section2>
      </Container>
    </>
  )
}
