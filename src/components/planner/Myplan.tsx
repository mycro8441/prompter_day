import { format } from 'date-fns'
import useStore from 'src/store'
import styled from 'styled-components'
import Create_Result from './Create_Result'

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 4em 0.5em;
  overflow: hidden;
  p {
    text-align: left;
    margin: 1em;
    font-size: ${(p) => p.theme.fontSizes.title};
    font-weight: ${(p) => p.theme.fontWeight.title};
  }
`
const Btn = styled.div`
  position: relative;
  width: 90%;
  margin: auto;
  height: 4em;
  margin-bottom: 0.5em;
  border: solid 3px transparent;
  border-radius: 1em;
  background-image: ${(p) =>
    `linear-gradient(${p.theme.colors.gray1}, ${p.theme.colors.gray1}), linear-gradient(to bottom, white 0%, ${p.theme.colors.gray1} 100%)`};
  background-origin: border-box;
  background-clip: content-box, border-box;
  z-index: 1;
  padding: 0 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }
  p {
    margin: 0;
  }
  p:first-child {
    font-size: ${(p) => p.theme.fontSizes.smallTitle};
    font-weight: ${(p) => p.theme.fontWeight.title};
  }
  p:last-child {
    font-size: ${(p) => p.theme.fontSizes.smallText};
    font-weight: ${(p) => p.theme.fontWeight.smallText};
  }
`
const BlurCircle1 = styled.div`
  position: absolute;
  z-index: 0;
  width: 100vw;
  height: 100vw;
  left: -4em;

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

const PlusBtn = styled.div`
  position: fixed;
  z-index: 1;
  bottom: 6em;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: solid 2px transparent;
  background-image: ${(p) =>
    `linear-gradient(${p.theme.colors.gray1}, ${p.theme.colors.gray1}), linear-gradient(to bottom, white 0%, ${p.theme.colors.gray1} 100%)`};
  background-origin: border-box;
  background-clip: content-box, border-box;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    position: absolute;
  }
  svg:last-child {
    transform: translate(2px, 2px);
    opacity: 0.2;
    filter: blur(5px);
  }
`
const MyPlan = ({ setIsCreate, data }) => {
  const { changeTab } = useStore()
  return (
    <Container>
      <p>나의 플래너</p>
      {data?.map((v, i) => {
        return (
          <Btn
            key={i}
            onClick={() =>
              changeTab(<Create_Result data={v.plans} />, 'Create_Result')
            }
          >
            <div>
              <p>{v.plans[0]?.title}</p>
              <p>{format(new Date(v.startedAt), 'yyyy-MM-dd')}</p>
            </div>
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L1 13"
                stroke={v.color}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Btn>
        )
      })}

      <BlurCircle1 />
      <BlurCircle2 />
      <PlusBtn onClick={() => setIsCreate(true)}>
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
    </Container>
  )
}

export default MyPlan
