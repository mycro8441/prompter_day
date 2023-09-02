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
  background-color: #ECECF2;
  padding-bottom:2.2em;
`
const Section2 = styled.div`
  width:100%;
  
  border-radius:24px 24px 0px 0px;
  backdrop-filter: blur(10px);
  flex:1;
  border:solid 3px transparent;
  border-radius: 24px 24px 0 0;
  background-image: ${p=>`linear-gradient(${p.theme.colors.gray1}, ${p.theme.colors.gray1}), linear-gradient(to bottom, white 0%, ${p.theme.colors.gray1} 100%)`};
  background-origin: border-box;
  background-clip: content-box, border-box;
  &> div {
    padding:2em;
  }
  background-color: ${p=>p.theme.colors.gray1};

`
const Container = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction: column;
  background-color: #ECECF2;

`

const Home = () => {
    return <>
      <Container>
        <Section1>
          <Hello/>
          <Quote/>
        </Section1>
        <Section2>
          <div>
            <Feature/>
            <ChatSlider/>            
          </div>
        </Section2>            
      </Container>

    </>
}


export default Home;