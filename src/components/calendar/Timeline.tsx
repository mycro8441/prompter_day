import styled from 'styled-components'

const TimeLineContainer = styled.div`
  position: relative;
  margin-top: 10px;
  padding-top: 1em;
  margin-left: 16px;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -2px; /* Adjust this value as needed */
    width: 2px; /* Width of the timeline line */
    height: 100%;
    background-color: #ccc; /* Color of the timeline line */
    border-radius: 1px; /* Half of the line width to create rounded corners */
  }
`
const Block = styled.div`
  position: relative;
  margin: 0 0 20px 20px;
  padding: 10px;
  border-radius: 8px;
  max-width: 400px;

  p {
    margin: 0 !important;
    color: ${(p) => p.theme.colors.gray4} !important;
    font-size: ${(p) => p.theme.fontSizes.smallText} !important;
    font-weight: ${(p) => p.theme.fontWeight.smallText} !important;
  }
`
const Title = styled.div`
  color: #202126;
  position: relative;
  font-size: ${(p) => p.theme.fontSizes.smallTitle} !important;
  &::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;

    border-radius: 10px;
    left: -38px;
    background-image: ${(p) =>
      `linear-gradient(${p.theme.colors.orange + 'CC'}, ${
        p.theme.colors.orange + 'CC'
      }), linear-gradient(to bottom, #FFC187 0%, ${
        p.theme.colors.orange + 'CC'
      } 100%)`};
    background-origin: border-box;
    background-clip: content-box, border-box;
    border: solid 2px transparent;

    box-shadow: 1px 1px 3px 1px #ff861666;
  }
`

const Timeline = () => {
  return (
    <TimeLineContainer>
      <Block>
        <Title>자바스크립트 개발 환경 설정</Title>
        <p>오후 1:00 - 오후 2:00</p>
      </Block>
      <Block>
        <Title>자바스크립트 조건문과 반복문 학습</Title>
        <p>오후 4:00 - 오후 5:30</p>
      </Block>
    </TimeLineContainer>
  )
}

export default Timeline
