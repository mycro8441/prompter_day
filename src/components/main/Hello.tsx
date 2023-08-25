import styled from "styled-components";

const HelloContainer = styled.div`
  width:85%;
  height:auto;
  display:flex;
  justify-content: space-between;

`
const TextContainer = styled.div`
  display:flex;
  flex-direction: column;
  gap:0px;
  line-height: 28px;
  margin-bottom:15px;
  p {
    margin:0;
    font-size:${p=>p.theme.fontSizes.title};
    font-weight:${p=>p.theme.fontWeight.title};
  }
`

const Name = styled.p`
  color:${p=>p.theme.colors.blue};
`
const BtnContainer = styled.div`
  width:6.5em;
  height:2em;
  display:flex;
  justify-content: center;
  align-items: center;
`
const Btn = styled.div`
  position:absolute;
  width:6.5em;
  height:2em; 
  border:solid 3px transparent;
  border-radius: 1em;
  background-image: ${p=>`linear-gradient(${p.theme.colors.orange}, ${p.theme.colors.orange}), linear-gradient(to bottom, #FFC086 0%, ${p.theme.colors.orange} 100%)`};
  background-origin: border-box;
  background-clip: content-box, border-box;



`

const Blur = styled.div`
  position:relative;
  border-radius: 1em;
  width:5.5em;
  height:2em; 
  box-shadow: 0 5px 15px 1px ${p=>p.theme.colors.orange + "1A"};
`
const Adjuster = styled.div`
  display:flex;
  width:100%;
  height:100%;
  justify-content:space-between;
  align-items:center;
  padding:0 1.4em;
  font-size:${p=>p.theme.fontSizes.smallText};
  font-weight:${p=>p.theme.fontWeight.smallText};
  color:${p=>p.theme.colors.gray1};
`
const Hello = () => {

    return <HelloContainer>
    <TextContainer>
      <div style={{display:"flex"}}><Name>이준행</Name><p>님</p></div>
      <p>안녕하세요!</p>
    </TextContainer>
    <BtnContainer>
        <Blur/>
        <Btn>
            <Adjuster>
                <p>AI 개발자</p>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L1 9" stroke="#F8F8FD" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </Adjuster>
        </Btn>
    </BtnContainer>
  </HelloContainer>
}

export default Hello;