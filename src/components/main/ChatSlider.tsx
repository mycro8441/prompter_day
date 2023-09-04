import Image from 'next/image'
import styled from 'styled-components'
import characterOneImage from '../../images/main/character1.png'
import characterTwoImage from '../../images/main/character2.png'
import CharBtn from './CharBtn'
const ChatContainer = styled.div`
  width: 100%;
  margin-top: 1em;
  p {
    text-align: left;
    margin: 0;
    font-size: ${(p) => p.theme.fontSizes.subtitle};
    font-weight: ${(p) => p.theme.fontWeight.title};
  }
`
const ChatSlider = () => {
  return (
    <>
      <ChatContainer>
        <p>최근 나눈 대화</p>
        <CharBtn
          color1="#0019FA"
          color2="#001881"
          imagesrc={characterOneImage}
          alt="개발자 캐릭터"
          title="프론트엔드 개발자"
          subtitle="안녕! 나는 ai 프론트엔드 개발자 멘토 디디야. 궁금한 게 있다면 언제든지 물어봐!"
        />
        <CharBtn
          color1="#FA9600"
          color2="#F27400"
          imagesrc={characterTwoImage}
          alt="의사 캐릭터"
          title="의사"
          subtitle="안녕하세요. 저는 ai 의사 멘토, 사사예요!
              무엇이 궁금하신가요?"
        />
      </ChatContainer>
    </>
  )
}

export default ChatSlider
