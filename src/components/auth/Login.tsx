import { useState } from 'react'
import useStore from 'src/store'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  padding: 4em 1.5em;
`
const Title = styled.div`
  color: #202126;
  font-size: ${(p) => p.theme.fontSizes.title};
  font-weight: ${(p) => p.theme.fontWeight.title};
`
const Subtitle = styled.div`
  color: #202126;
  font-size: ${(p) => p.theme.fontSizes.smallTitle};
  font-weight: ${(p) => p.theme.fontWeight.smallTitle};
  margin-top: 6px;
  margin-bottom: 4em;
`
const PrettyInput = styled.div`
  width: 100%;
  display: flex;
  gap: 6px;
  height: 4em;
  border-radius: 12px;
  color: ${(p) => p.theme.colors.gray4};
  border: 2px solid #eeeef6;
  margin-top: 12px;

  padding: 18px 20px;
  padding-right: 0;
  input {
    flex: 1;
    outline: none;
    font-size: ${(p) => p.theme.fontSizes.smallTitle};
    font-weight: ${(p) => p.theme.fontWeight.smallTitle};
    border: none;
  }
`
const Btn = styled.div`
  bottom: 2em;
  width: 100%;
  margin-top: 12px;

  height: 3.8em;
  color: ${(p) => p.theme.colors.gray1};
  font-size: ${(p) => p.theme.fontSizes.smallTitle};
  font-weight: ${(p) => p.theme.fontWeight.title};
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
const IconContainer = styled.div`
  margin-bottom: 1em;
  width: 36px;
  height: 48px;
  position: relative;
  svg {
    position: absolute;
  }
  svg:last-child {
    transform: translate(2px, 2px);
    filter: blur(10px);
    opacity: 0.8;
  }
`
const OrBar = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  margin: auto;
  margin-top: 6px;
  gap: 11px;
  div {
    flex: 1;
    height: 1px;
    background-color: ${(p) => p.theme.colors.gray2};
  }
  p {
    color: ${(p) => p.theme.colors.gray4};
    font-size: ${(p) => p.theme.fontSizes.smallTitle};
    font-weight: ${(p) => p.theme.fontWeight.smallTitle};
  }
`
const Socials = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  & > div {
    display: flex;
    gap: 2em;
  }
`
const KakaoTalk = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  border: solid 3px transparent;
  background-image: linear-gradient(#fde933, #fde933),
    linear-gradient(to bottom, #fff7ad 0%, #fde933 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Google = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  border: solid 3px transparent;
  background-image: linear-gradient(white, white),
    linear-gradient(to bottom, white 0%, #eeeef499 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Naver = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  border: solid 3px transparent;
  background-image: linear-gradient(#34d17b, #34d17b),
    linear-gradient(to bottom, #a2debd 0%, #34d17b 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SignupText = styled.div`
  display: flex;
  justify-content: center;
  div {
    display: flex;
    gap: 6px;
    p {
      color: ${(p) => p.theme.colors.gray4};
      font-size: ${(p) => p.theme.fontSizes.smallTitle};
      font-weight: ${(p) => p.theme.fontWeight.smallTitle};
    }
    p:last-child {
      text-decoration: underline;
      color: ${(p) => p.theme.colors.blue};
      font-weight: ${(p) => p.theme.fontWeight.title};
    }
  }
`
const Login = () => {
  const [inputs, setInputs] = useState({
    id: '',
    pw: ''
  })
  const { setIsLoggedIn } = useStore()
  return (
    <>
      <Container>
        <IconContainer>
          <svg
            width="36"
            height="48"
            viewBox="0 0 36 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.8" clip-path="url(#clip0_241_410)">
              <path
                d="M31.5 11.4286H29.25C29.25 17.7372 24.21 22.8572 18 22.8572H6.75V11.4286H4.5C2.025 11.4286 0 13.4857 0 16V29.7143C0 39.8172 8.055 48 18 48C27.945 48 36 39.8172 36 29.7143V16C36 13.4857 33.975 11.4286 31.5 11.4286ZM12.375 38.8572C9.27 38.8572 6.75 36.2972 6.75 33.1429C6.75 29.9886 9.27 27.4286 12.375 27.4286C15.48 27.4286 18 29.9886 18 33.1429C18 36.2972 15.48 38.8572 12.375 38.8572Z"
                fill="#0019FA"
                fill-opacity="0.8"
              />
              <path
                d="M18 0C11.79 0 6.75 5.12 6.75 11.4286H29.25C29.25 5.12 24.21 0 18 0Z"
                fill="#FF8616"
              />
              <path
                d="M18 22.8572C24.21 22.8572 29.25 17.7372 29.25 11.4286H6.75V22.8572H18Z"
                fill="#0019FA"
              />
              <path
                d="M18 22.8572C24.21 22.8572 29.25 17.7372 29.25 11.4286H6.75V22.8572H18Z"
                fill="#001881"
              />
              <path
                d="M12.375 38.8572C15.4816 38.8572 18 36.2988 18 33.1429C18 29.987 15.4816 27.4286 12.375 27.4286C9.2684 27.4286 6.75 29.987 6.75 33.1429C6.75 36.2988 9.2684 38.8572 12.375 38.8572Z"
                fill="#0019FA"
              />
              <path
                d="M12.375 38.8572C15.4816 38.8572 18 36.2988 18 33.1429C18 29.987 15.4816 27.4286 12.375 27.4286C9.2684 27.4286 6.75 29.987 6.75 33.1429C6.75 36.2988 9.2684 38.8572 12.375 38.8572Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_241_410">
                <rect width="36" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>{' '}
          <svg
            width="36"
            height="48"
            viewBox="0 0 36 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.8" clip-path="url(#clip0_241_410)">
              <path
                d="M31.5 11.4286H29.25C29.25 17.7372 24.21 22.8572 18 22.8572H6.75V11.4286H4.5C2.025 11.4286 0 13.4857 0 16V29.7143C0 39.8172 8.055 48 18 48C27.945 48 36 39.8172 36 29.7143V16C36 13.4857 33.975 11.4286 31.5 11.4286ZM12.375 38.8572C9.27 38.8572 6.75 36.2972 6.75 33.1429C6.75 29.9886 9.27 27.4286 12.375 27.4286C15.48 27.4286 18 29.9886 18 33.1429C18 36.2972 15.48 38.8572 12.375 38.8572Z"
                fill="#0019FA"
                fill-opacity="0.8"
              />
              <path
                d="M18 0C11.79 0 6.75 5.12 6.75 11.4286H29.25C29.25 5.12 24.21 0 18 0Z"
                fill="#FF8616"
              />
              <path
                d="M18 22.8572C24.21 22.8572 29.25 17.7372 29.25 11.4286H6.75V22.8572H18Z"
                fill="#0019FA"
              />
              <path
                d="M18 22.8572C24.21 22.8572 29.25 17.7372 29.25 11.4286H6.75V22.8572H18Z"
                fill="#001881"
              />
              <path
                d="M12.375 38.8572C15.4816 38.8572 18 36.2988 18 33.1429C18 29.987 15.4816 27.4286 12.375 27.4286C9.2684 27.4286 6.75 29.987 6.75 33.1429C6.75 36.2988 9.2684 38.8572 12.375 38.8572Z"
                fill="#0019FA"
              />
              <path
                d="M12.375 38.8572C15.4816 38.8572 18 36.2988 18 33.1429C18 29.987 15.4816 27.4286 12.375 27.4286C9.2684 27.4286 6.75 29.987 6.75 33.1429C6.75 36.2988 9.2684 38.8572 12.375 38.8572Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_241_410">
                <rect width="36" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </IconContainer>

        <Title>안녕하세요,</Title>
        <Title>포켓멘토입니다.</Title>
        <Subtitle>회원 서비스 이용을 위해 로그인 해주세요.</Subtitle>

        <PrettyInput>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 3C9.56586 3 7.59259 4.95716 7.59259 7.37143C7.59259 9.7857 9.56586 11.7429 12 11.7429C14.4341 11.7429 16.4074 9.7857 16.4074 7.37143C16.4074 4.95716 14.4341 3 12 3Z"
              fill="#CACAD0"
            />
            <path
              d="M14.601 13.6877C12.8779 13.4149 11.1221 13.4149 9.39904 13.6877L9.21435 13.7169C6.78647 14.1012 5 16.1783 5 18.6168C5 19.933 6.07576 21 7.40278 21H16.5972C17.9242 21 19 19.933 19 18.6168C19 16.1783 17.2135 14.1012 14.7857 13.7169L14.601 13.6877Z"
              fill="#CACAD0"
            />
          </svg>

          <input
            value={inputs.id}
            onChange={(e) => setInputs({ ...inputs, id: e.target.value })}
            placeholder="아이디를 입력해주세요."
          />
        </PrettyInput>
        <PrettyInput>
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
              d="M11.1374 4.51386C11.703 4.37049 12.2969 4.37049 12.8625 4.51386C14.1819 4.84832 15.1258 5.96028 15.2306 7.26587L15.1915 7.25782C13.0872 6.82413 10.9128 6.82413 8.8085 7.25782L8.76936 7.26589C8.87413 5.96028 9.81803 4.84832 11.1374 4.51386ZM16.685 7.50839V7.7184C18.1592 8.40029 19.2768 9.68843 19.6983 11.2674C20.1955 13.1297 20.0758 15.0973 19.3563 16.8896L19.2718 17.1C18.5 19.0225 16.7426 20.4054 14.6498 20.7371L13.9687 20.845C12.6648 21.0517 11.3352 21.0517 10.0313 20.845L9.35019 20.7371C7.25734 20.4054 5.49999 19.0225 4.72818 17.1L4.64368 16.8895C3.92417 15.0973 3.80447 13.1297 4.30168 11.2674C4.72321 9.68846 5.84078 8.40033 7.31494 7.71843V7.50838C7.31494 5.45953 8.7365 3.66924 10.7734 3.15292C11.5777 2.94903 12.4223 2.94903 13.2266 3.15292C15.2634 3.66924 16.685 5.45954 16.685 7.50839ZM12 12.8504C12.3192 12.8504 12.5779 13.1022 12.5779 13.4129V15.288C12.5779 15.5987 12.3192 15.8506 12 15.8506C11.6809 15.8506 11.4221 15.5987 11.4221 15.288V13.4129C11.4221 13.1022 11.6809 12.8504 12 12.8504Z"
              fill="#CACAD0"
            />
          </svg>

          <input
            value={inputs.pw}
            onChange={(e) => setInputs({ ...inputs, pw: e.target.value })}
            placeholder="비밀번호를 입력해주세요."
          />
        </PrettyInput>
        <Btn onClick={() => setIsLoggedIn(true)}>로그인</Btn>
        <OrBar>
          <div />
          <p>또는</p>
          <div />
        </OrBar>
        <Socials>
          <div>
            <KakaoTalk>
              <svg
                width="28"
                height="26"
                viewBox="0 0 28 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.0692 0.58313C6.60226 0.58313 0.580566 5.40043 0.580566 11.2487C0.580566 15.0448 3.08559 18.3687 6.84313 20.2668L5.57135 25.0167C5.54737 25.0879 5.54368 25.1643 5.5607 25.2375C5.57771 25.3107 5.61476 25.3777 5.66769 25.431C5.74488 25.499 5.84419 25.5367 5.9471 25.5369C6.03243 25.5301 6.11339 25.4964 6.17833 25.4406L11.6508 21.7506C12.4587 21.8621 13.273 21.9199 14.0884 21.9239C21.5457 21.9239 27.577 17.1066 27.577 11.2487C27.577 5.3908 21.5264 0.58313 14.0692 0.58313Z"
                  fill="#392020"
                />
                <path
                  d="M5.30136 9.56257H3.82725C3.64454 9.56787 3.46409 9.52108 3.30697 9.42767C3.23722 9.38397 3.17724 9.32629 3.13082 9.25831C3.0844 9.19033 3.05252 9.11349 3.0372 9.03262C3.03252 8.98134 3.03252 8.92982 3.0372 8.87855C3.03262 8.7826 3.05125 8.6869 3.0915 8.59969C3.13176 8.51247 3.19245 8.43629 3.26843 8.37752C3.4364 8.25587 3.63914 8.19161 3.84651 8.1944H8.28812C8.47228 8.18793 8.65395 8.23842 8.80839 8.33894C8.87979 8.38072 8.94103 8.43788 8.98768 8.50619C9.03434 8.5745 9.06524 8.65229 9.07816 8.734C9.08287 8.78206 9.08287 8.83049 9.07816 8.87855C9.08271 8.97588 9.06412 9.07287 9.02393 9.16164C8.98374 9.2504 8.92308 9.3283 8.84693 9.3891C8.68305 9.5106 8.48227 9.5719 8.27848 9.56257H6.85255V14.6304C6.85834 14.7384 6.84163 14.8463 6.80348 14.9475C6.76533 15.0487 6.70658 15.1409 6.63095 15.2181C6.55842 15.292 6.47124 15.3499 6.37499 15.3881C6.27875 15.4263 6.17558 15.4438 6.07213 15.4397C5.89119 15.4449 5.71408 15.3871 5.57113 15.276C5.43503 15.1675 5.34267 15.0135 5.31099 14.8424C5.30147 14.772 5.30147 14.7008 5.31099 14.6304L5.30136 9.56257Z"
                  fill="#FEE500"
                />
                <path
                  d="M9.50324 8.57015C9.54561 8.4116 9.64513 8.27431 9.78264 8.18474C9.92917 8.10169 10.0961 8.06163 10.2644 8.06913H10.6305C10.809 8.06273 10.9858 8.1061 11.1411 8.19438C11.3057 8.30505 11.4227 8.47357 11.4687 8.66647L13.3957 14.1101C13.4456 14.2521 13.4874 14.397 13.5209 14.5437C13.5242 14.6047 13.5242 14.6658 13.5209 14.7267C13.5242 14.8206 13.5069 14.9141 13.4703 15.0007C13.4337 15.0872 13.3786 15.1647 13.3089 15.2278C13.2414 15.297 13.1604 15.3515 13.0709 15.388C12.9814 15.4244 12.8853 15.442 12.7887 15.4397C12.6401 15.4545 12.4908 15.4188 12.365 15.3384C12.2391 15.258 12.144 15.1376 12.095 14.9965L11.6903 13.8115H9.15639L8.75173 14.9965C8.70387 15.1404 8.60761 15.2632 8.47936 15.344C8.35111 15.4248 8.1988 15.4586 8.04839 15.4397C7.88547 15.444 7.72589 15.393 7.59556 15.2952C7.46859 15.1942 7.38292 15.0503 7.35469 14.8906C7.34958 14.8361 7.34958 14.7812 7.35469 14.7267C7.33815 14.6311 7.33815 14.5334 7.35469 14.4378C7.35469 14.3318 7.42214 14.2161 7.46068 14.1101L9.50324 8.57015ZM10.4667 9.83235L9.55141 12.7228H11.3724L10.4667 9.83235Z"
                  fill="#FEE500"
                />
                <path
                  d="M13.7416 8.87868C13.7318 8.66247 13.808 8.45118 13.9535 8.29098C14.0275 8.21635 14.1163 8.15803 14.2142 8.11986C14.3122 8.08169 14.417 8.06442 14.522 8.06928C14.7025 8.06718 14.8786 8.1248 15.023 8.23312C15.1568 8.34613 15.2457 8.50334 15.2735 8.67628C15.283 8.74339 15.283 8.81158 15.2735 8.87868V13.9466H17.923C18.1067 13.9442 18.2872 13.9942 18.4433 14.091C18.5134 14.1342 18.5737 14.1918 18.6202 14.2599C18.6667 14.3279 18.6983 14.405 18.7131 14.486C18.7131 14.486 18.7131 14.5824 18.7131 14.6306C18.7176 14.7265 18.699 14.8221 18.6588 14.9093C18.6185 14.9965 18.5578 15.0728 18.4818 15.1316C18.3139 15.2533 18.1111 15.3174 17.9038 15.3146H14.6472C14.4398 15.328 14.2337 15.274 14.0595 15.1605C13.9037 15.0441 13.7999 14.8711 13.7705 14.6788C13.7634 14.5729 13.7634 14.4666 13.7705 14.3608L13.7416 8.87868Z"
                  fill="#FEE500"
                />
                <path
                  d="M18.8867 8.87873C18.881 8.66314 18.9566 8.45331 19.0987 8.29103C19.2431 8.15981 19.4283 8.08233 19.6231 8.0718C19.818 8.06127 20.0104 8.11828 20.1681 8.23316C20.3049 8.34519 20.3971 8.50232 20.4283 8.67632C20.433 8.74368 20.433 8.81137 20.4283 8.87873V11.2392L22.8659 8.42581C22.9598 8.32983 23.0595 8.23983 23.1645 8.15613C23.2635 8.0972 23.377 8.06708 23.4921 8.06933C23.6605 8.06841 23.8252 8.11885 23.9642 8.21388C24.0297 8.25799 24.0857 8.3149 24.1287 8.38112C24.1717 8.44733 24.201 8.52151 24.2147 8.59929C24.2186 8.61836 24.2186 8.63808 24.2147 8.65715C24.21 8.67939 24.21 8.70231 24.2147 8.72454C24.2144 8.82593 24.1878 8.92555 24.1376 9.01363C24.0865 9.1069 24.0251 9.19406 23.9546 9.27367L22.3552 11.0273L24.2822 14.014V14.1103C24.3822 14.2484 24.4602 14.4012 24.5134 14.5632V14.6113C24.5245 14.723 24.5084 14.8357 24.4665 14.9397C24.4245 15.0437 24.358 15.136 24.2725 15.2087C24.1118 15.3302 23.9152 15.3946 23.7137 15.3918C23.5799 15.3973 23.4469 15.3673 23.3283 15.305C23.2 15.219 23.0943 15.1033 23.02 14.9678L21.228 12.0774L20.3705 12.9735V14.5824C20.3762 14.798 20.3006 15.0078 20.1585 15.1701C20.0824 15.2445 19.9918 15.3027 19.8924 15.3408C19.793 15.3789 19.6868 15.3963 19.5804 15.3918C19.4026 15.3955 19.229 15.3376 19.0891 15.228C18.953 15.1195 18.8606 14.9656 18.8289 14.7945C18.8194 14.7241 18.8194 14.6527 18.8289 14.5824L18.8867 8.87873Z"
                  fill="#FEE500"
                />
              </svg>
            </KakaoTalk>
            <Google>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_241_423)">
                  <path
                    d="M11.9995 9.922V14.348H18.1501C17.8801 15.7714 17.0696 16.9766 15.854 17.787L19.5631 20.6649C21.7241 18.6702 22.9709 15.7403 22.9709 12.2598C22.9709 11.4494 22.8982 10.6701 22.7631 9.92212L11.9995 9.922Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M5.59499 14.1753L4.75845 14.8157L1.79736 17.1221C3.67788 20.8519 7.53214 23.4286 11.9996 23.4286C15.0853 23.4286 17.6723 22.4104 19.5632 20.665L15.8541 17.7871C14.8359 18.4728 13.5372 18.8884 11.9996 18.8884C9.02822 18.8884 6.50362 16.8832 5.59966 14.1819L5.59499 14.1753Z"
                    fill="#34A853"
                  />
                  <path
                    d="M1.79717 6.87793C1.018 8.41553 0.571289 10.1506 0.571289 11.9999C0.571289 13.8493 1.018 15.5844 1.79717 17.122C1.79717 17.1323 5.59984 14.1713 5.59984 14.1713C5.37127 13.4856 5.23616 12.7584 5.23616 11.9998C5.23616 11.2413 5.37127 10.5141 5.59984 9.82834L1.79717 6.87793Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M11.9999 5.12206C13.683 5.12206 15.1791 5.70386 16.3739 6.82595L19.6466 3.55327C17.6622 1.70395 15.0856 0.571411 11.9999 0.571411C7.53237 0.571411 3.67788 3.13764 1.79736 6.87791L5.59991 9.82856C6.50375 7.12724 9.02846 5.12206 11.9999 5.12206Z"
                    fill="#EA4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_241_423">
                    <rect
                      width="22.8571"
                      height="22.8571"
                      fill="white"
                      transform="translate(0.571289 0.571411)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Google>
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_241_418)">
                <g filter="url(#filter0_b_241_418)">
                  <path
                    d="M48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24Z"
                    fill="#03C75A"
                    fill-opacity="0.8"
                  />
                  <path
                    d="M24 0.5C36.9787 0.5 47.5 11.0213 47.5 24C47.5 36.9787 36.9787 47.5 24 47.5C11.0213 47.5 0.5 36.9787 0.5 24C0.5 11.0213 11.0213 0.5 24 0.5Z"
                    stroke="url(#paint0_linear_241_418)"
                  />
                </g>
                <path
                  d="M27.1199 24.6172L20.6285 15.3143H15.2456V32.6858H20.8799V23.3829L27.3713 32.6858H32.7542V15.3143H27.1199V24.6172Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_b_241_418"
                  x="-20"
                  y="-20"
                  width="88"
                  height="88"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_241_418"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_241_418"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_241_418"
                  x1="24"
                  y1="0"
                  x2="24"
                  y2="48"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A2DEBD" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <clipPath id="clip0_241_418">
                  <rect width="48" height="48" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </Socials>
        <SignupText>
          <div>
            <p>아직 회원이 아니신가요?</p>
            <p>회원가입</p>
          </div>
        </SignupText>
      </Container>
    </>
  )
}

export default Login
