import styled from "styled-components";
import ChatSlider from "./main/ChatSlider";
import Feature from "./main/Feature";
import Hello from "./main/Hello";
import Quote from "./main/Quote";
const Section1 = styled.div`
  width:100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  padding-top:5em;
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

const Home = () => {
    return <>
        <Section1>
          <Hello/>
          <Quote/>
        </Section1>
        <Section2>
          <Feature/>
          <ChatSlider/>
        </Section2>
    </>
}


export default Home;