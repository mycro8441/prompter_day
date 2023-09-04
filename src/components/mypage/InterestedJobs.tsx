import Head from 'next/head'
import styled from 'styled-components'
import characterOneImage from '../../images/main/character1.png'
import characterTwoImage from '../../images/main/character2.png'
import characterThreeImage from '../../images/main/character3.png'
import Image from 'next/image'
import { useState } from 'react'
import useStore from 'src/store'
import MyPage from '../MyPage'
const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  padding: 4em 1.5em;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
`
const SmallTitle = styled.div`
  display: flex;
  color: ${(p) => p.theme.colors.gray4};
  font-size: ${(p) => p.theme.fontSizes.smallText};
  font-weight: ${(p) => p.theme.fontWeight.smallText};
  align-items: center;
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

const Infos = styled.div`
  flex-grow: 1;
  width: 100%;
  position: relative;
  overflow-y: auto;
  flex-basis: 0;
  max-height: 100%;
`
const PlusBtn = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 36px;
  position: relative;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px 1px #0019fa33;
  svg {
    position: absolute;
  }
  svg:last-child {
    transform: translate(2px, 2px);
    opacity: 0.2;
    filter: blur(5px);
  }
`
const CharacterSlider = styled.div`
  width: 100%;
  display: flex;
  padding: 2em 1em;
  gap: 24px;
  overflow-x: scroll;
  white-space: nowrap;
  ::-webkit-scrollbar {
    display: none;
  }
`
const CharacterContainer = styled.div<{ activated: boolean }>`
  width: 72px;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(p) => (p.activated ? '1' : '0.5')};
  cursor: pointer;
`
const Circle = styled.div<{ color1: string; color2: string }>`
  width: 72px;
  height: 72px;
  border-radius: 36px;

  background: ${(p) =>
    `linear-gradient(180deg, ${p.color1} 0%, ${p.color2} 100%)`};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const Card = styled.div`
  width: 100%;
  background-color: rgba(238, 238, 246, 0.8);
  height: auto;
  padding: 24px;
  border-radius: 1em;
  p {
    font-size: ${(p) => p.theme.fontSizes.subtitle};
    font-weight: ${(p) => p.theme.fontWeight.title};
    color: #202126;
    margin: 0;
  }
  display: flex;
  flex-direction: column;
  gap: 12px;
  h1 {
    color: ${(p) => p.theme.colors.gray4};
    font-size: ${(p) => p.theme.fontSizes.smallText};
    font-weight: ${(p) => p.theme.fontWeight.smallText};
  }
`
const MoneyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;

  div {
    display: flex;
    gap: 8px;
    align-items: center;
    p {
      font-size: ${(p) => p.theme.fontSizes.smallTitle};
      font-weight: ${(p) => p.theme.fontWeight.smallTitle};
    }
  }
`
const Btn = styled.div`
  height: 2em;
  border: solid 3px transparent;
  border-radius: 1em;
  background-image: ${(p) =>
    `linear-gradient(#5363F9, #5363F9), linear-gradient(to bottom, #9BA4FD 0%,#5363F9 100%)`};
  background-origin: border-box;
  background-clip: content-box, border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin: 0;
    font-size: ${(p) => p.theme.fontSizes.smallText};
    font-weight: ${(p) => p.theme.fontWeight.smallText};
    color: ${(p) => p.theme.colors.gray1};
    padding: 0 1em;
  }
`
const Btn2 = styled.div`
  height: 2em;
  border: solid 3px transparent;
  border-radius: 1em;
  background-image: ${(p) =>
    `linear-gradient(#FAA355, #FAA355), linear-gradient(to bottom, #FEC490 0%,#FAA355 100%)`};
  background-origin: border-box;
  background-clip: content-box, border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin: 0;
    font-size: ${(p) => p.theme.fontSizes.smallText};
    font-weight: ${(p) => p.theme.fontWeight.smallText};
    color: ${(p) => p.theme.colors.gray1};
    padding: 0 1em;
  }
`
const SearchContainer = styled.div<{ activated: boolean }>`
  width: 100%;
  height: auto;
  background-color: ${(p) => p.activated && '#EEEEF6'};
  border-radius: 12px;
`

const PrettyInputContainer = styled.div`
  width: 100%;
  height: 4em;
  border-radius: 12px;
  display: flex;
  align-items: center;
  background-color: white;
  overflow: hidden;
  gap: 6px;
  border: 2px solid #eeeef6;
  padding: 0 1em;
  input {
    flex: 1;
    height: auto;
    border: none;
    outline: none;
    background-color: transparent;
    color: ${(p) => p.theme.colors.gray4};
    font-size: ${(p) => p.theme.fontSizes.smallTitle};
    font-weight: ${(p) => p.theme.fontWeight.smallTitle};
  }
`
const SearchResultContainer = styled.div`
  width: 100%;
  height: auto;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: #eeeef6;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  p {
    margin: 0;
    font-size: ${(p) => p.theme.fontSizes.smallTitle};
    font-weight: ${(p) => p.theme.fontWeight.smallTitle};
  }
`
const SubmitBtn = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
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
const PrettyInput = () => {
  const [input, setInput] = useState('')
  return (
    <SearchContainer activated={!!input}>
      <PrettyInputContainer>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.31573 13.7811L4.04591 13.6098L3.31573 13.7811ZM3.31573 8.324L4.04591 8.49528L3.31573 8.324ZM18.7893 8.324L19.5195 8.15273L18.7893 8.324ZM18.7893 13.781L19.5195 13.9523L18.7893 13.781ZM13.781 18.7893L13.6098 18.0591L13.781 18.7893ZM8.324 18.7893L8.15273 19.5195L8.324 18.7893ZM8.324 3.31573L8.15272 2.58555L8.324 3.31573ZM13.781 3.31573L13.9523 2.58555L13.781 3.31573ZM20.4697 21.5303C20.7626 21.8232 21.2374 21.8232 21.5303 21.5303C21.8232 21.2374 21.8232 20.7626 21.5303 20.4697L20.4697 21.5303ZM4.04591 13.6098C3.65136 11.9278 3.65136 10.1773 4.04591 8.49528L2.58555 8.15272C2.13815 10.06 2.13815 12.045 2.58555 13.9523L4.04591 13.6098ZM18.0591 8.49528C18.4537 10.1773 18.4537 11.9278 18.0591 13.6098L19.5195 13.9523C19.9669 12.045 19.9669 10.06 19.5195 8.15273L18.0591 8.49528ZM13.6098 18.0591C11.9278 18.4537 10.1773 18.4537 8.49528 18.0591L8.15273 19.5195C10.06 19.9669 12.045 19.9669 13.9523 19.5195L13.6098 18.0591ZM8.49528 4.04591C10.1773 3.65136 11.9278 3.65136 13.6098 4.04591L13.9523 2.58555C12.045 2.13815 10.06 2.13815 8.15272 2.58555L8.49528 4.04591ZM8.49528 18.0591C6.28757 17.5413 4.56377 15.8175 4.04591 13.6098L2.58555 13.9523C3.23351 16.7147 5.39038 18.8715 8.15273 19.5195L8.49528 18.0591ZM13.9523 19.5195C16.7147 18.8715 18.8715 16.7147 19.5195 13.9523L18.0591 13.6098C17.5413 15.8175 15.8175 17.5413 13.6098 18.0591L13.9523 19.5195ZM13.6098 4.04591C15.8175 4.56377 17.5413 6.28757 18.0591 8.49528L19.5195 8.15273C18.8715 5.39037 16.7147 3.23351 13.9523 2.58555L13.6098 4.04591ZM8.15272 2.58555C5.39037 3.23351 3.23351 5.39037 2.58555 8.15272L4.04591 8.49528C4.56377 6.28756 6.28757 4.56377 8.49528 4.04591L8.15272 2.58555ZM16.8048 17.8655L20.4697 21.5303L21.5303 20.4697L17.8655 16.8048L16.8048 17.8655Z"
            fill="#9C9DA4"
          />
        </svg>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <svg
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 1L7 7L1 0.999999"
            stroke="#CACAD0"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </PrettyInputContainer>
      {!!input && (
        <>
          <SearchResultContainer>
            <p>프론트엔드 개발자</p>
          </SearchResultContainer>
        </>
      )}
    </SearchContainer>
  )
}
const InterestedJobs = () => {
  const { changeTab } = useStore()
  const [addMode, setAddMode] = useState(false)
  const [curJob, setCurJob] = useState('')

  const selectJob = (name: string) => {
    setAddMode(false)
    if (name === curJob) setCurJob('')
    else setCurJob(name)
  }
  return (
    <Container>
      <Header onClick={() => changeTab(<MyPage />, 'MyPage')}>
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
        관심 직종
      </Header>
      <SmallTitle>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.81063 14.7575C4.92193 14.3123 5.32191 14 5.78078 14H18.2192C18.6781 14 19.0781 14.3123 19.1894 14.7575L19.7515 17.006C19.8777 17.5109 19.4958 18 18.9754 18H5.02462C4.50416 18 4.12228 17.5109 4.24851 17.006L4.81063 14.7575Z"
            fill="url(#paint0_linear_241_2471)"
          />
          <g filter="url(#filter0_bi_241_2471)">
            <path
              d="M3.90995 15.0995L3.21685 8.16848C3.13175 7.31754 4.08475 6.75933 4.78535 7.24974L7.35789 9.05053C7.73496 9.31447 8.24348 9.28696 8.58986 8.98387L11.3415 6.57619C11.7185 6.24629 12.2815 6.24629 12.6585 6.57619L15.4101 8.98387C15.7565 9.28696 16.265 9.31447 16.6421 9.05053L19.2147 7.24974C19.9152 6.75933 20.8682 7.31754 20.7832 8.16848L20.09 15.0995C20.0389 15.6107 19.6088 16 19.095 16H4.90499C4.39124 16 3.96107 15.6107 3.90995 15.0995Z"
              fill="#F1F1F1"
              fill-opacity="0.1"
            />
            <path
              d="M3.90995 15.0995L3.21685 8.16848C3.13175 7.31754 4.08475 6.75933 4.78535 7.24974L7.35789 9.05053C7.73496 9.31447 8.24348 9.28696 8.58986 8.98387L11.3415 6.57619C11.7185 6.24629 12.2815 6.24629 12.6585 6.57619L15.4101 8.98387C15.7565 9.28696 16.265 9.31447 16.6421 9.05053L19.2147 7.24974C19.9152 6.75933 20.8682 7.31754 20.7832 8.16848L20.09 15.0995C20.0389 15.6107 19.6088 16 19.095 16H4.90499C4.39124 16 3.96107 15.6107 3.90995 15.0995Z"
              fill="url(#paint1_linear_241_2471)"
              fill-opacity="0.2"
            />
            <path
              d="M4.00945 15.0896L3.31635 8.15853C3.23977 7.39268 4.09747 6.89029 4.728 7.33167L7.30055 9.13245C7.71532 9.42279 8.27469 9.39252 8.65571 9.05913L11.4073 6.65145C11.7467 6.35454 12.2533 6.35454 12.5927 6.65145L15.3443 9.05913C15.7253 9.39252 16.2847 9.42279 16.6995 9.13245L19.272 7.33167C19.9025 6.89029 20.7602 7.39268 20.6836 8.15853L19.9905 15.0896C19.9445 15.5496 19.5574 15.9 19.095 15.9H4.90499C4.44261 15.9 4.05546 15.5496 4.00945 15.0896Z"
              stroke="url(#paint2_linear_241_2471)"
              stroke-opacity="0.1"
              stroke-width="0.2"
            />
          </g>
          <defs>
            <filter
              id="filter0_bi_241_2471"
              x="0.211914"
              y="3.32886"
              width="23.5762"
              height="15.6711"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="1.5" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_241_2471"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_241_2471"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="0.5" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect2_innerShadow_241_2471"
              />
            </filter>
            <linearGradient
              id="paint0_linear_241_2471"
              x1="4"
              y1="14"
              x2="13.8753"
              y2="24.0301"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#82E8FF" />
              <stop offset="1" stop-color="#379FFF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_241_2471"
              x1="3"
              y1="6"
              x2="21.6703"
              y2="14.5333"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#82E8FF" />
              <stop offset="1" stop-color="#379FFF" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_241_2471"
              x1="3.5625"
              y1="6.45455"
              x2="21"
              y2="6.45455"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#7EE5FF" />
              <stop offset="1" stop-color="#41A9FF" />
            </linearGradient>
          </defs>
        </svg>
        프리미엄에 가입하고 관심 직종을 추가해보세요!
      </SmallTitle>
      <CharacterSlider>
        <div>
          <CharacterContainer
            activated={'소방관' === curJob}
            onClick={() => selectJob('소방관')}
          >
            <Circle color1="#FF6C6C" color2="#BB0000">
              <Image src={characterThreeImage} alt="" width={56} />
            </Circle>
          </CharacterContainer>
        </div>
        <div>
          <CharacterContainer
            activated={'프론트엔드 개발자' === curJob}
            onClick={() => selectJob('프론트엔드 개발자')}
          >
            <Circle color1="#0019FA" color2="#001881">
              <Image src={characterOneImage} alt="" width={56} />
            </Circle>
          </CharacterContainer>
        </div>
        <div>
          <CharacterContainer
            activated={'의사' === curJob}
            onClick={() => selectJob('의사')}
          >
            <Circle color1="#FA9600" color2="#F27400">
              <Image src={characterTwoImage} alt="" width={56} />
            </Circle>
          </CharacterContainer>
        </div>
        <PlusBtn
          onClick={() => {
            setAddMode((prev) => !prev)
            setCurJob('')
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 0C13.0464 0 13.8947 0.848303 13.8947 1.89474V10.1053H22.1053C23.1517 10.1053 24 10.9536 24 12C24 13.0464 23.1517 13.8947 22.1053 13.8947H13.8947V22.1053C13.8947 23.1517 13.0464 24 12 24C10.9536 24 10.1053 23.1517 10.1053 22.1053V13.8947H1.89474C0.848303 13.8947 0 13.0464 0 12C0 10.9536 0.848303 10.1053 1.89474 10.1053H10.1053V1.89474C10.1053 0.848302 10.9536 0 12 0Z"
              fill="#0019FA"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 0C13.0464 0 13.8947 0.848303 13.8947 1.89474V10.1053H22.1053C23.1517 10.1053 24 10.9536 24 12C24 13.0464 23.1517 13.8947 22.1053 13.8947H13.8947V22.1053C13.8947 23.1517 13.0464 24 12 24C10.9536 24 10.1053 23.1517 10.1053 22.1053V13.8947H1.89474C0.848303 13.8947 0 13.0464 0 12C0 10.9536 0.848303 10.1053 1.89474 10.1053H10.1053V1.89474C10.1053 0.848302 10.9536 0 12 0Z"
              fill="#0019FA"
            />
          </svg>
        </PlusBtn>
      </CharacterSlider>
      <Infos>
        {addMode ? (
          <>
            <PrettyInput />
            <SubmitBtn>추가하기</SubmitBtn>
          </>
        ) : (
          <>
            {curJob && (
              <>
                <Card>
                  {curJob === '소방관' ? (
                    <>
                      <p>소방관</p>
                      <MoneyContainer>
                        <div>
                          <Btn>
                            <p>평균연봉</p>
                          </Btn>
                          <p>4,000만원</p>
                        </div>
                        <div>
                          <Btn2>
                            <p>직업 만족도</p>
                          </Btn2>
                          <p>66.5%</p>
                        </div>
                      </MoneyContainer>
                      <h1>
                        화재를 예방·경계하거나 진압하고 화재, 재난·재해 그 밖의
                        위급한 상황에서의 구조·구급활동 등을 통하여 국민의
                        생명·신체 및 재산을 보호함으로써 공공의 안녕질서 유지와
                        복리증진에 이바지함을 목적으로 하는 공무원
                      </h1>
                    </>
                  ) : curJob === '프론트엔드 개발자' ? (
                    <>
                      <p>프론트엔드 개발자</p>
                      <MoneyContainer>
                        <div>
                          <Btn>
                            <p>평균연봉</p>
                          </Btn>
                          <p>4,000만원</p>
                        </div>
                        <div>
                          <Btn2>
                            <p>직업 만족도</p>
                          </Btn2>
                          <p>70.8%</p>
                        </div>
                      </MoneyContainer>
                      <h1>
                        프론트엔드 개발자는 웹 및 앱 사용자 인터페이스(UI)를
                        디자인하고 개발하는 역할을 맡으며, 사용자 경험을
                        개선하고 웹 페이지 또는 애플리케이션의 시각적 요소를
                        관리합니다. HTML, CSS, JavaScript 등의 기술을 사용하여
                        웹 페이지를 만들고, 디자인과 사용자 인터랙션을
                        최적화하는 역할을 수행합니다.
                      </h1>
                    </>
                  ) : (
                    <>
                      <p>의사</p>
                      <MoneyContainer>
                        <div>
                          <Btn>
                            <p>평균연봉</p>
                          </Btn>
                          <p>4,000만원</p>
                        </div>
                        <div>
                          <Btn2>
                            <p>직업 만족도</p>
                          </Btn2>
                          <p>66.5%</p>
                        </div>
                      </MoneyContainer>
                      <h1>ㅁㅁ</h1>
                    </>
                  )}
                </Card>
              </>
            )}
          </>
        )}
      </Infos>
    </Container>
  )
}

export default InterestedJobs
