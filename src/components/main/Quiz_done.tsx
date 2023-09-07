import styled from 'styled-components'
import Image from 'next/image'
import NoteImg from '../../images/main/note.png'
import useStore from 'src/store'
import Home from '../Home'

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
`
const Block = styled.div`
  width: 100%;
  text-align: center;
  p {
    margin: 0.6em;
    font-size: ${(p) => p.theme.fontSizes.title};
    font-weight: ${(p) => p.theme.fontWeight.title};
  }
  h2 {
    margin: 0;
    font-size: ${(p) => p.theme.fontSizes.smallTitle};
    font-weight: ${(p) => p.theme.fontWeight.smallTitle};
  }
`
const Btn = styled.div`
  position: absolute;
  bottom: 2em;
  width: 80%;
  height: 3.8em;
  color: ${(p) => p.theme.colors.gray1};
  border: 3px solid transparent;
  border-radius: 1em;
  background-image: linear-gradient(#6271f8, #6271f8),
    linear-gradient(to bottom, white 0%, #6271f8 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`
const BlurCircle = styled.div`
  position: absolute;
  width: 80vw;
  height: 80vw;
  border-radius: 40vw;
  bottom: -10em;
  filter: blur(100px);
  background-color: ${(p) => p.theme.colors.blue + '40'};
  pointer-events: none;
`

const QuizDone = () => {
  const { changeTab } = useStore()

  return (
    <Container>
      <Block>
        <Image
          src={NoteImg}
          alt="노트 이미지"
          sizes="100vw"
          style={{ width: '20%', height: 'auto' }}
        />
        <p>준비된 퀴즈를 다 풀었어요</p>
        <h2>퀴즈는 매일 5개씩 풀 수 있어요</h2>
        <h2>내일 또 만나요!</h2>
      </Block>
      <Btn onClick={() => changeTab(<Home />, 'Home')}>메인으로 돌아가기</Btn>
      <BlurCircle />
    </Container>
  )
}

export default QuizDone
