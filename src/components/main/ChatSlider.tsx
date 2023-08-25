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

const ChatSlider = () => {


    return <>
        <ChatContainer>
            <p>최근 나눈 대화</p>
        </ChatContainer>
    </>
}


export default ChatSlider;