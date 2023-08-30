import useStore from 'src/store'
import styled from 'styled-components'
import Home from '../Home'
import Image from 'next/image'
import characterOneImage from '../../images/main/character1.png'
import characterTwoImage from '../../images/main/character2.png'
import characterThreeImage from '../../images/main/character3.png'
import InterestedJobs from './InterestedJobs'
import Settings from './Settings'
import { useState } from 'react'

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`
const Header = styled.div`
  width: 100%;
  height: 15em;
  font-size: ${(p) => p.theme.fontSizes.title};
  font-weight: ${(p) => p.theme.fontWeight.title};
  color: ${(p) => p.theme.colors.gray1};
  border-radius: 0px 0px 24px 24px;
  opacity: 0.8;
  background-color: #586cf1;
  box-shadow: inset 0 0 50px 30px #6a7fec;
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
`
const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    gap: 6px;
    font-size: ${(p) => p.theme.fontSizes.title};
    font-weight: ${(p) => p.theme.fontWeight.title};
    margin-top: 16px;
    align-items: center;
  }
  p {
    margin-top: 6px;
    font-size: ${(p) => p.theme.fontSizes.smallTitle};
    font-weight: ${(p) => p.theme.fontWeight.smallTitle};
  }
`
const User = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border: solid 3px transparent;
  background-image: ${(p) =>
    `linear-gradient(${p.theme.colors.gray1}, ${p.theme.colors.gray1}), linear-gradient(to bottom, white 0%, ${p.theme.colors.gray1} 100%)`};
  background-origin: border-box;
  background-clip: content-box, border-box;
`
const Blocks = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 5em 1.5em;
  margin-top: 1em;
  flex-grow: 1;
  width: 100%;
  position: relative;
  overflow-y: auto;
  flex-basis: 0;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`
const JobTray = styled.div`
  width: 80%;
  position: absolute;
  top: 12em;
  z-index: 10;
  height: auto;
  border-radius: 1em;
  backdrop-filter: blur(10px);
  border: solid 3px transparent;
  background-image: ${(p) =>
    `linear-gradient(${p.theme.colors.gray1 + '99'}, ${
      p.theme.colors.gray1 + '99'
    }), linear-gradient(to bottom, white 0%, ${
      p.theme.colors.gray1 + '99'
    } 100%)`};
  background-origin: border-box;
  background-clip: content-box, border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  box-shadow: 0 5px 15px 1px ${(p) => p.theme.colors.orange + '1A'};
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1em 0;
    gap: 6px;
    p {
      font-size: ${(p) => p.theme.fontSizes.smallTitle};
      font-weight: ${(p) => p.theme.fontWeight.smallTitle};
      color: #202126;
      margin: 0;
    }
  }
`
const Block = styled.div`
  position: relative;
  width: 80%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    gap: 9px;
    font-size: ${(p) => p.theme.fontSizes.smallTitle};
    font-weight: ${(p) => p.theme.fontWeight.smallTitle};
    color: ${(p) => p.theme.colors.gray4};
  }
`

const CharacterContainer = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Circle = styled.div<{ color1: string; color2: string }>`
  width: 60px;
  height: 60px;
  border-radius: 1.5em;

  background: ${(p) =>
    `linear-gradient(180deg, ${p.color1} 0%, ${p.color2} 100%)`};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`
const BannerBG = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background: rgba(32, 33, 38, 0.4);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
`
const LogoutBlock = styled.div`
  display: flex;
  width: 335px;
  padding: 40px 24px 32px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 16px;
  background: rgba(248, 248, 253, 0.6);
  backdrop-filter: blur(10px);
  p {
    font-size: ${(p) => p.theme.fontSizes.subtitle};
    font-weight: ${(p) => p.theme.fontWeight.subtitle};
    color: #202126;
  }
  div {
    display: flex;
    gap: 1em;
  }
`
const Btn = styled.div`
  position: relative;
  width: 7em;
  height: 3em;
  border: solid 3px transparent;
  border-radius: 1em;
  color: ${(p) => p.theme.colors.gray1};
  background-image: ${(p) =>
    `linear-gradient(#4959EF, #4939EF), linear-gradient(to bottom, #939EFE 0%, #4959EF 100%)`};
  background-origin: border-box;
  background-clip: content-box, border-box;
  font-size: ${(p) => p.theme.fontSizes.smallTitle};
  font-weight: ${(p) => p.theme.fontWeight.smallTitle};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 15px 1px #0019fa33;
`
const Btn2 = styled.div`
  position: relative;
  width: 7em;
  height: 3em;
  border: solid 3px transparent;
  border-radius: 1em;
  background-image: ${(p) =>
    `linear-gradient(${p.theme.colors.gray1}, ${p.theme.colors.gray1}), linear-gradient(to bottom, white 0%, ${p.theme.colors.gray1} 100%)`};
  background-origin: border-box;
  background-clip: content-box, border-box;
  font-size: ${(p) => p.theme.fontSizes.smallTitle};
  font-weight: ${(p) => p.theme.fontWeight.smallTitle};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 15px 1px #0019fa33;
`
const MyPage_Main = () => {
  const { changeTab, setIsLoggedIn } = useStore()
  const [bannerOn, setBannerOn] = useState(false)
  return (
    <Container>
      {bannerOn && (
        <>
          <BannerBG>
            <LogoutBlock>
              <p>로그아웃 하시겠어요?</p>
              <div>
                <Btn onClick={() => setIsLoggedIn(false)}>네</Btn>
                <Btn2 onClick={() => setBannerOn(false)}>아니요</Btn2>
              </div>
            </LogoutBlock>
          </BannerBG>
        </>
      )}

      <Header>
        <HeaderContent>
          <User>
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_241_1034"
                style={{ maskType: 'alpha' }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="80"
                height="80"
              >
                <circle cx="40" cy="40" r="40" fill="#F8F8FD" />
              </mask>
              <g mask="url(#mask0_241_1034)">
                <g filter="url(#filter0_b_241_1034)">
                  <circle
                    cx="40"
                    cy="36"
                    r="14"
                    fill="white"
                    fill-opacity="0.8"
                  />
                  <circle
                    cx="40"
                    cy="36"
                    r="13.5"
                    stroke="url(#paint0_linear_241_1034)"
                  />
                </g>
                <g filter="url(#filter1_b_241_1034)">
                  <rect
                    x="14"
                    y="54"
                    width="52"
                    height="35"
                    rx="16"
                    fill="white"
                    fill-opacity="0.8"
                  />
                  <rect
                    x="14.5"
                    y="54.5"
                    width="51"
                    height="34"
                    rx="15.5"
                    stroke="url(#paint1_linear_241_1034)"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_b_241_1034"
                  x="6"
                  y="2"
                  width="68"
                  height="68"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_241_1034"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_241_1034"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_b_241_1034"
                  x="-6"
                  y="34"
                  width="92"
                  height="75"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_241_1034"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_241_1034"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_241_1034"
                  x1="40"
                  y1="22"
                  x2="40"
                  y2="50"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_241_1034"
                  x1="40"
                  y1="54"
                  x2="40"
                  y2="89"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="0.619792" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </User>
          <div>
            이준행
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.0641 0C11.0202 0 10.0191 0.414676 9.28097 1.1528L4.63904 5.79473C2.50709 7.92668 0.994639 10.598 0.263388 13.523L0.0390918 14.4201C-0.193539 15.3507 0.64933 16.1935 1.57986 15.9609L2.47704 15.7366C5.40205 15.0054 8.07332 13.4929 10.2053 11.361L14.8472 6.71904C15.5853 5.98091 16 4.97979 16 3.93592C16 1.76217 14.2378 0 12.0641 0ZM10.7301 5.26994C11.4406 5.98049 12.2644 6.28317 12.8754 6.17683L13.5902 5.46202C13.9949 5.05727 14.2223 4.50832 14.2223 3.93592C14.2223 2.74396 13.256 1.77769 12.0641 1.77769C11.4917 1.77769 10.9427 2.00507 10.538 2.40982L9.82317 3.12463C9.71683 3.73564 10.0195 4.55938 10.7301 5.26994Z"
                fill="#F8F8FD"
              />
            </svg>
          </div>
          <p>@leejunhaengbabo</p>
        </HeaderContent>
        <JobTray>
          <div>
            <CharacterContainer>
              <Circle color1="#FF6C6C" color2="#BB0000">
                <Image src={characterThreeImage} alt="" width={47} />
              </Circle>
            </CharacterContainer>
            <p>소방관</p>
          </div>
          <div>
            <CharacterContainer>
              <Circle color1="#0019FA" color2="#001881">
                <Image src={characterOneImage} alt="" width={47} />
              </Circle>
            </CharacterContainer>
            <p>요리사</p>
          </div>
          <div>
            <CharacterContainer>
              <Circle color1="#FA9600" color2="#F27400">
                <Image src={characterTwoImage} alt="" width={47} />
              </Circle>
            </CharacterContainer>
            <p>의사</p>
          </div>
        </JobTray>
      </Header>

      <Blocks>
        <Block onClick={() => changeTab(<InterestedJobs />, 'InterestedJobs')}>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.4709 4.0535C14.1978 4.22856 12.9226 4.8312 12 5.80891C11.0774 4.8312 9.8022 4.22856 8.52915 4.0535C6.91335 3.83131 5.1499 4.28425 4.05884 5.73088C2.64706 7.60276 2.64705 10.254 4.05884 12.1258L8.75286 18.3496C10.4125 20.5501 13.5875 20.5501 15.2471 18.3496L19.9412 12.1258C21.3529 10.254 21.3529 7.60276 19.9412 5.73088C18.8501 4.28425 17.0867 3.83131 15.4709 4.0535Z"
                fill="#CACAD0"
              />
            </svg>
            관심 직종
          </div>
          <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L5 5L1 9"
              stroke="#CACAD0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Block>
        <Block onClick={() => changeTab(<Settings />, 'Settings')}>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.2 19.2C10.2 20.1941 11.0059 21 12 21C12.9941 21 13.8 20.1941 13.8 19.2V18.0391C14.219 17.9144 14.6197 17.7473 14.9972 17.5428L15.8184 18.364C16.5213 19.0669 17.661 19.0669 18.364 18.364C19.0669 17.661 19.0669 16.5213 18.364 15.8184L17.5428 14.9972C17.7473 14.6197 17.9144 14.219 18.0391 13.8H19.2C20.1941 13.8 21 12.9941 21 12C21 11.0059 20.1941 10.2 19.2 10.2H18.0391C17.9144 9.78102 17.7473 9.3803 17.5428 9.00282L18.364 8.18163C19.0669 7.47869 19.0669 6.33899 18.364 5.63604C17.661 4.9331 16.5213 4.9331 15.8184 5.63604L14.9972 6.45724C14.6197 6.2527 14.219 6.08559 13.8 5.96089V4.8C13.8 3.80589 12.9941 3 12 3C11.0059 3 10.2 3.80589 10.2 4.8V5.96089C9.78101 6.08559 9.3803 6.2527 9.00282 6.45724L8.18163 5.63605C7.47869 4.9331 6.33899 4.9331 5.63604 5.63605C4.9331 6.33899 4.9331 7.47869 5.63604 8.18163L6.45724 9.00283C6.2527 9.3803 6.08559 9.78102 5.96089 10.2H4.8C3.80589 10.2 3 11.0059 3 12C3 12.9941 3.80589 13.8 4.8 13.8H5.96089C6.08559 14.219 6.2527 14.6197 6.45724 14.9972L5.63603 15.8184C4.93309 16.5213 4.93309 17.661 5.63603 18.364C6.33897 19.0669 7.47867 19.0669 8.18161 18.364L9.00282 17.5428C9.38029 17.7473 9.78101 17.9144 10.2 18.0391V19.2ZM12 14.7C13.4912 14.7 14.7 13.4912 14.7 12C14.7 10.5088 13.4912 9.29999 12 9.29999C10.5088 9.29999 9.29999 10.5088 9.29999 12C9.29999 13.4912 10.5088 14.7 12 14.7Z"
                fill="#CACAD0"
              />
            </svg>
            환경설정
          </div>
          <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L5 5L1 9"
              stroke="#CACAD0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Block>
        <Block onClick={() => setBannerOn(true)}>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.7941 4.03452C12.7941 3.60124 12.4386 3.25 12 3.25C11.5614 3.25 11.2059 3.60124 11.2059 4.03452V8.2186C11.2059 8.65187 11.5614 9.00311 12 9.00311C12.4386 9.00311 12.7941 8.65187 12.7941 8.2186V4.03452Z"
                fill="#CACAD0"
              />
              <path
                d="M18.364 5.57182C18.0538 5.26545 17.551 5.26545 17.2409 5.57182C16.9308 5.87819 16.9308 6.37492 17.2409 6.68129C18.2775 7.70531 18.9834 9.00999 19.2693 10.4303C19.5553 11.8507 19.4086 13.3229 18.8476 14.6609C18.2866 15.9988 17.3366 17.1424 16.1178 17.947C14.8989 18.7515 13.4659 19.181 12 19.181C10.5341 19.181 9.10111 18.7515 7.88225 17.947C6.66339 17.1424 5.71341 15.9988 5.15243 14.6609C4.59145 13.323 4.44467 11.8507 4.73065 10.4304C5.01663 9.01 5.72253 7.70532 6.75908 6.6813C7.06921 6.37493 7.06921 5.8782 6.75908 5.57183C6.44896 5.26546 5.94615 5.26546 5.63603 5.57183C4.37736 6.81528 3.5202 8.39954 3.17293 10.1243C2.82567 11.849 3.0039 13.6367 3.68509 15.2613C4.36628 16.886 5.51984 18.2746 6.99988 19.2516C8.47992 20.2285 10.22 20.75 12 20.75C13.78 20.75 15.5201 20.2285 17.0001 19.2516C18.4802 18.2746 19.6337 16.886 20.3149 15.2613C20.9961 13.6367 21.1743 11.849 20.8271 10.1242C20.4798 8.39953 19.6226 6.81527 18.364 5.57182Z"
                fill="#CACAD0"
              />
            </svg>
            로그인 / 로그아웃
          </div>
          <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L5 5L1 9"
              stroke="#CACAD0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Block>
      </Blocks>
    </Container>
  )
}

export default MyPage_Main
