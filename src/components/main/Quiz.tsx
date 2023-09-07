import { useEffect, useRef, useState } from 'react'
import useStore from 'src/store'
import styled from 'styled-components'
import Home from '../Home'
import { getQuiz } from 'src/lib/routes'
import QuizDone from './Quiz_done'

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  padding: 4em 1.5em;
  padding-bottom: 1em;
  display: flex;
  flex-direction: column;
`
const Header = styled.div`
  width: 100%;
  display: flex;
  text-align: left;
  margin-top: 1em;
  font-size: ${(p) => p.theme.fontSizes.title};
  font-weight: ${(p) => p.theme.fontWeight.title};
  align-items: center;
  gap: 12px;
`
const HeaderLight = styled.div`
  display: flex;
  justify-content: center;
  & > div {
    margin-top: 1em;
    display: flex;
    gap: 12px;
  }
`
const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding-top: 1em;
`
const QuizTitle = styled.div`
  p {
    font-size: ${(p) => p.theme.fontSizes.title};
    font-weight: ${(p) => p.theme.fontWeight.title};
    margin: 0;
    margin-bottom: 12px;
  }
  & > div {
    font-size: ${(p) => p.theme.fontSizes.subtitle};
    font-weight: ${(p) => p.theme.fontWeight.subtitle};
    width: 70%;
  }
`
const AnsButtonContainer = styled.div`
  width: 100%;

  & > div:last-child {
    width: 100%;
    height: 4em;
    margin-top: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    p {
      color: ${(p) => p.theme.colors.gray4};
      font-size: ${(p) => p.theme.fontSizes.smallTitle};
      font-weight: ${(p) => p.theme.fontWeight.smallTitle};
    }
  }
`
type answerType = 'answer' | 'wrong' | 'normal'
const AnsButton = styled.div<{ status: answerType }>`
  position: relative;
  width: 100%;
  height: 4em;
  border: solid 3px transparent;
  z-index: 5;
  border-radius: 1em;
  margin-top: 12px;
  background-image: ${(p) => `linear-gradient(
        ${
          p.status === 'answer'
            ? '#D8EBB9'
            : p.status === 'wrong'
            ? '#FBB6B4'
            : p.theme.colors.gray1
        }, 
        ${
          p.status === 'answer'
            ? '#D8EBB9'
            : p.status === 'wrong'
            ? '#FBB6B4'
            : p.theme.colors.gray1
        }), 
        linear-gradient(to bottom, 
        ${
          p.status === 'answer'
            ? '#E0F6CA'
            : p.status === 'wrong'
            ? '#FFCDCD'
            : 'white'
        } 0%, 
        ${
          p.status === 'answer'
            ? '#D8EBB9'
            : p.status === 'wrong'
            ? '#FBB6B4'
            : p.theme.colors.gray1
        } 100%)`};
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 0px 2px 15px 1px #0019fa1a;
  display: flex;
  justify-content: ${(p) =>
    p.status === 'normal' ? 'start' : 'space-between'};
  align-items: center;
  color: ${(p) =>
    p.status === 'answer'
      ? '#00A958'
      : p.status === 'wrong'
      ? '#DD1C1C'
      : '#202126'};
  font-size: ${(p) => p.theme.fontSizes.smallTitle};
  font-weight: ${(p) => p.theme.fontWeight.title};
  text-align: left;
  p {
    margin-left: 1.5em;
  }
  svg {
    margin-right: 1em;
  }
  transition: 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
`
const BlurCircle1 = styled.div`
  position: absolute;
  z-index: 0;
  width: 100vw;
  height: 100vw;
  left: -4em;
  bottom: 0em;
  border-radius: 40vw;
  filter: blur(100px);
  background-image: linear-gradient(#ff5c0040, #ff861640);
  pointer-events: none;
`
const BlurCircle2 = styled.div`
  position: absolute;
  z-index: 0;
  width: 80vw;
  top: 2em;
  right: -5em;
  height: 80vw;
  border-radius: 40vw;
  filter: blur(100px);
  background-image: linear-gradient(#0019fa40, #6ea2f040);
  pointer-events: none;
`
const LightCircle = styled.div<{ current: boolean }>`
  width: 10px;
  height: 10px;
  border: solid 1px transparent;
  border-radius: 1em;
  background-image: ${(p) =>
    `linear-gradient(${
      p.current ? '#3B4EFA, #3B4EFA' : '#CFD0E1, #CFD0E1'
    }), linear-gradient(to bottom, ${
      p.current ? '#969AF3 0%, #3B4EFA 100%' : '#EFF0FB, #CFD0E1'
    })`};
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: ${(p) => p.current && '0px 3px 10px 1px #3B4EFA'};
`

const Quiz = () => {
  const { changeTab } = useStore()
  const [data, setData] = useState(null)
  const [index, setIndex] = useState(0)
  const revealed = useRef(false)
  useEffect(() => {
    getQuiz().then((res) => {
      if (res.success) {
        console.log(res.data)
        setData(res.data)
      }
    })
  }, [])
  //const data = ["호텔 예약 기능", "변수 및 함수 선언을 미리 처리", "데이터 암호화", "반복문 처리"]
  const [status, setStatus] = useState<answerType[]>([
    'normal',
    'normal',
    'normal',
    'normal'
  ])
  const reveal = (target: number, answer: string) => {
    if (revealed.current) return
    revealed.current = true
    const copy = [...status]
    for (let i = 0; i < 4; i++) {
      if (data[index].options[i].value === answer) {
        copy[i] = 'answer'
      } else if (data[index].options[target].value !== answer) {
        copy[target] = 'wrong'
      }
    }
    setStatus(copy)
  }
  return (
    <>
      {index > 2 ? (
        <QuizDone />
      ) : (
        <>
          <Container>
            <Header onClick={() => changeTab(<Home />, 'Home')}>
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13L1 7L7 1"
                  stroke="#202126"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              퀴즈
            </Header>
            <HeaderLight>
              <div>
                {[...Array(5)].map((v, i) => (
                  <>
                    <LightCircle current={index === i} />
                  </>
                ))}
              </div>
            </HeaderLight>
            <QuizContainer>
              <QuizTitle>
                <p>Q{index + 1}</p>
                <div>{data?.[index].content}</div>
              </QuizTitle>
              <AnsButtonContainer>
                {data?.[index].options.map((v, i: number) => (
                  <AnsButton
                    key={i}
                    status={status[i]}
                    onClick={() => reveal(i, data[index].answer)}
                  >
                    <p>{v.content}</p>
                    {status[i] === 'answer' && (
                      <>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.35288 8.95043C4.00437 6.17301 6.17301 4.00437 8.95043 3.35288C10.9563 2.88237 13.0437 2.88237 15.0496 3.35288C17.827 4.00437 19.9956 6.17301 20.6471 8.95044C21.1176 10.9563 21.1176 13.0437 20.6471 15.0496C19.9956 17.827 17.827 19.9956 15.0496 20.6471C13.0437 21.1176 10.9563 21.1176 8.95044 20.6471C6.17301 19.9956 4.00437 17.827 3.35288 15.0496C2.88237 13.0437 2.88237 10.9563 3.35288 8.95043Z"
                            stroke="#00A958"
                            stroke-width="1.5"
                          />
                          <path
                            d="M8 11.8L10.9091 15L16 9"
                            stroke="#00A958"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </>
                    )}
                    {status[i] === 'wrong' && (
                      <>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.35288 8.95043C4.00437 6.17301 6.17301 4.00437 8.95043 3.35288C10.9563 2.88237 13.0437 2.88237 15.0496 3.35288C17.827 4.00437 19.9956 6.17301 20.6471 8.95044C21.1176 10.9563 21.1176 13.0437 20.6471 15.0496C19.9956 17.827 17.827 19.9956 15.0496 20.6471C13.0437 21.1176 10.9563 21.1176 8.95044 20.6471C6.17301 19.9956 4.00437 17.827 3.35288 15.0496C2.88237 13.0437 2.88237 10.9563 3.35288 8.95043Z"
                            stroke="#DD1C1C"
                            stroke-width="1.5"
                          />
                          <path
                            d="M15 9L9 15M15 15L9 9"
                            stroke="#DD1C1C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </svg>
                      </>
                    )}
                  </AnsButton>
                ))}

                <div
                  onClick={() => {
                    revealed.current = false
                    setIndex((prev) => prev + 1)
                    setStatus(['normal', 'normal', 'normal', 'normal'])
                  }}
                >
                  <p>다음 문제로 넘어가기</p>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 10H18M18 10L13.2157 6M18 10L13.2157 14"
                      stroke="#6E6F77"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </AnsButtonContainer>
            </QuizContainer>

            <BlurCircle1 />
            <BlurCircle2 />
          </Container>
        </>
      )}
    </>
  )
}

export default Quiz
