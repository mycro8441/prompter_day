import { useState } from 'react'
import styled from 'styled-components'

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
  h2 {
    font-size: ${(p) => p.theme.fontSizes.smallTitle};
    font-weight: ${(p) => p.theme.fontWeight.smallTitle};
    color: ${(p) => p.theme.colors.gray4};
  }
`
const BtnContainer = styled.div`
  width: 90%;
  height: 3.5em;
  display: flex;
  flex-direction: column;
`
const Btn = styled.div`
  margin: auto;
  margin-bottom: 8px;
  width: 100%;
  height: 100%;
  background-color: white;
  border: 2px solid;
  border-color: #eeeef6;
  border-radius: 1em;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;

  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`
const ColorBtn = styled.div`
  margin: auto;
  margin-bottom: 8px;
  width: 90%;
  height: 5.5em;
  background-color: white;
  border: 2px solid;
  border-color: #eeeef6;
  border-radius: 1em;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1em;

    div {
      display: flex;
      align-items: center;
      gap: 5px;
      padding-left: 0;
      h2 {
        font-size: ${(p) => p.theme.fontSizes.smallTitle};
        font-weight: ${(p) => p.theme.fontWeight.smallTitle};
        color: ${(p) => p.theme.colors.gray4};
      }
    }
  }
  div:last-child {
    padding: 0 2em;
  }
`
const SubmitBtn = styled.div`
  margin: auto;
  width: 90%;
  height: 3.5em;
  border: 2px solid transparent;
  border-radius: 1em;
  background-image: linear-gradient(#6271f8, #6271f8),
    linear-gradient(to bottom, #929dff 0%, #6271f8 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: ${(p) => p.theme.colors.gray1};
    font-size: ${(p) => p.theme.fontSizes.smallTitle};
    font-weight: ${(p) => p.theme.fontWeight.title};
  }
`
const ColorCircle = styled.div<{ color: string }>`
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 1em;
  background-image: ${(p) =>
    `linear-gradient(${p.color + '5A'}, ${
      p.color
    }), linear-gradient(to bottom, ${p.color + '99'} 0%,  ${p.color} 100%)`};
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 3px 3px 6px 1px ${(p) => p.color + '99'};
  padding: 0 !important;
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
const PrettyInput = ({ children }) => {
  const [on, setOn] = useState(false)
  return (
    <BtnContainer>
      <Btn onClick={() => setOn((prev) => !prev)}>
        <div>{children}</div>

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
      </Btn>
      {on && (
        <>
          <SearchResultContainer>
            <p>물리학자</p>
            <p>화학자</p>
            <p>생물학자</p>
          </SearchResultContainer>
        </>
      )}
    </BtnContainer>
  )
}
const Create_Form = ({ setIsCreated }) => {
  return (
    <Container>
      <p>새 목표 설정하기</p>

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
            d="M15.823 5.90625C15.9347 6.4218 15.9527 6.94915 15.8792 7.46518C17.7094 7.90203 19.1523 9.2766 19.6287 11.0528L19.6983 11.3123C20.1955 13.1661 20.0758 15.1246 19.3563 16.9086L19.2718 17.1181C18.5 19.0317 16.7426 20.4081 14.6498 20.7383L13.9687 20.8457C12.6648 21.0514 11.3352 21.0514 10.0313 20.8457L9.35019 20.7383C7.25734 20.4081 5.49999 19.0317 4.72818 17.1181L4.64368 16.9085C3.92417 15.1246 3.80447 13.1661 4.30168 11.3124L4.3713 11.0528C4.8477 9.2766 6.2906 7.90203 8.12084 7.46518C8.04731 6.94915 8.06527 6.4218 8.17701 5.90625C8.49089 4.45802 9.68081 3.33947 11.1843 3.07933L11.2912 3.06084C11.76 2.97972 12.24 2.97972 12.7088 3.06084L12.8157 3.07933C14.3192 3.33947 15.5091 4.45802 15.823 5.90625ZM11.5451 4.43887C11.846 4.38682 12.154 4.38682 12.4549 4.43887L12.5617 4.45736C13.4853 4.61717 14.2163 5.30429 14.4091 6.19394C14.4823 6.53164 14.4974 6.87666 14.4557 7.21544C12.8264 6.99713 11.1736 6.99713 9.54426 7.21544C9.5026 6.87666 9.5177 6.53164 9.59089 6.19394C9.78371 5.30429 10.5147 4.61717 11.4383 4.45736L11.5451 4.43887Z"
            fill="#CACAD0"
          />
        </svg>
        <h2>직종을 선택해주세요.</h2>
      </PrettyInput>
      <Btn>
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
              d="M15.823 5.90625C15.9347 6.4218 15.9527 6.94915 15.8792 7.46518C17.7094 7.90203 19.1523 9.2766 19.6287 11.0528L19.6983 11.3123C20.1955 13.1661 20.0758 15.1246 19.3563 16.9086L19.2718 17.1181C18.5 19.0317 16.7426 20.4081 14.6498 20.7383L13.9687 20.8457C12.6648 21.0514 11.3352 21.0514 10.0313 20.8457L9.35019 20.7383C7.25734 20.4081 5.49999 19.0317 4.72818 17.1181L4.64368 16.9085C3.92417 15.1246 3.80447 13.1661 4.30168 11.3124L4.3713 11.0528C4.8477 9.2766 6.2906 7.90203 8.12084 7.46518C8.04731 6.94915 8.06527 6.4218 8.17701 5.90625C8.49089 4.45802 9.68081 3.33947 11.1843 3.07933L11.2912 3.06084C11.76 2.97972 12.24 2.97972 12.7088 3.06084L12.8157 3.07933C14.3192 3.33947 15.5091 4.45802 15.823 5.90625ZM11.5451 4.43887C11.846 4.38682 12.154 4.38682 12.4549 4.43887L12.5617 4.45736C13.4853 4.61717 14.2163 5.30429 14.4091 6.19394C14.4823 6.53164 14.4974 6.87666 14.4557 7.21544C12.8264 6.99713 11.1736 6.99713 9.54426 7.21544C9.5026 6.87666 9.5177 6.53164 9.59089 6.19394C9.78371 5.30429 10.5147 4.61717 11.4383 4.45736L11.5451 4.43887Z"
              fill="#CACAD0"
            />
          </svg>
          <h2>직종을 선택해주세요.</h2>
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
            stroke="#CACAD0"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Btn>
      <Btn>
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
              d="M8.38358 3C8.75808 3 9.06166 3.31153 9.06166 3.69582V3.92169C9.10586 3.91015 9.15023 3.89901 9.19476 3.88829C11.0399 3.44416 12.9601 3.44416 14.8052 3.88829C14.8498 3.89901 14.8941 3.91014 14.9383 3.92169V3.69582C14.9383 3.31153 15.2419 3 15.6164 3C15.9909 3 16.2945 3.31153 16.2945 3.69582V4.42901C18.2277 5.38732 19.6726 7.19919 20.1754 9.39896C20.6082 11.2924 20.6082 13.2628 20.1754 15.1562C19.5504 17.8905 17.4698 20.0255 14.8052 20.6669C12.9601 21.111 11.0399 21.111 9.19476 20.6669C6.53017 20.0255 4.44963 17.8906 3.82461 15.1562C3.3918 13.2628 3.3918 11.2924 3.82461 9.39896C4.32745 7.19918 5.77233 5.38732 7.70551 4.42901V3.69582C7.70551 3.31153 8.00909 3 8.38358 3ZM11.0274 9.88793C11.2393 9.67055 11.2393 9.31809 11.0274 9.1007C10.8156 8.88331 10.4721 8.88331 10.2603 9.1007L8.83564 10.5626L8.31512 10.0285C8.10327 9.81107 7.7598 9.81107 7.54796 10.0285C7.33611 10.2458 7.33611 10.5983 7.54796 10.8157L8.45206 11.7435C8.66391 11.9608 9.00737 11.9608 9.21922 11.7435L11.0274 9.88793ZM12.9041 10.3293C12.6045 10.3293 12.3616 10.5785 12.3616 10.886C12.3616 11.1934 12.6045 11.4426 12.9041 11.4426H16.0685C16.3681 11.4426 16.6109 11.1934 16.6109 10.886C16.6109 10.5785 16.3681 10.3293 16.0685 10.3293H12.9041ZM11.0274 14.5267C11.2393 14.3093 11.2393 13.9569 11.0274 13.7395C10.8156 13.5221 10.4721 13.5221 10.2603 13.7395L8.83564 15.2014L8.31512 14.6673C8.10327 14.4499 7.7598 14.4499 7.54796 14.6673C7.33611 14.8846 7.33611 15.2371 7.54796 15.4545L8.45206 16.3822C8.66391 16.5996 9.00737 16.5996 9.21922 16.3822L11.0274 14.5267ZM12.9041 14.9681C12.6045 14.9681 12.3616 15.2173 12.3616 15.5248C12.3616 15.8322 12.6045 16.0814 12.9041 16.0814H16.0685C16.3681 16.0814 16.6109 15.8322 16.6109 15.5248C16.6109 15.2173 16.3681 14.9681 16.0685 14.9681H12.9041Z"
              fill="#CACAD0"
            />
          </svg>

          <h2>목표를 입력해주세요.</h2>
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
            stroke="#CACAD0"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Btn>
      <Btn>
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.3027 15.3365H6.68V20.1818C6.68 20.6337 6.30392 21 5.84 21C5.37608 21 5 20.6337 5 20.1818V3.81818C5 3.36631 5.37608 3 5.84 3H16.3027C17.4037 3 18.2506 3.65926 18.6739 4.48207C19.0965 5.30334 19.1414 6.35681 18.6123 7.28021L18.1096 8.15756C17.757 8.77312 17.757 9.56335 18.1096 10.1789L18.6123 11.0563C19.1414 11.9797 19.0965 13.0331 18.6739 13.8544C18.2506 14.6772 17.4037 15.3365 16.3027 15.3365Z"
              fill="#CACAD0"
            />
          </svg>

          <h2>기간을 선택해주세요.</h2>
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
            stroke="#CACAD0"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Btn>
      <ColorBtn>
        <div>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.19119 3.15595C7.30475 2.94802 6.38222 2.94802 5.49578 3.15595C4.33479 3.42828 3.42828 4.33479 3.15595 5.49578C2.94802 6.38222 2.94802 7.30475 3.15595 8.19119C3.42828 9.35218 4.33479 10.2587 5.49578 10.531C6.38222 10.739 7.30475 10.739 8.19119 10.531C9.35218 10.2587 10.2587 9.35218 10.531 8.19119C10.739 7.30475 10.739 6.38222 10.531 5.49578C10.2587 4.33479 9.35218 3.42828 8.19119 3.15595Z"
                fill="#CACAD0"
              />
              <path
                d="M8.19119 13.469C7.30475 13.261 6.38222 13.261 5.49578 13.469C4.33479 13.7413 3.42828 14.6478 3.15595 15.8088C2.94802 16.6952 2.94802 17.6178 3.15595 18.5042C3.42828 19.6652 4.33479 20.5717 5.49578 20.8441C6.38222 21.052 7.30475 21.052 8.19119 20.8441C9.35218 20.5717 10.2587 19.6652 10.531 18.5042C10.739 17.6178 10.739 16.6952 10.531 15.8088C10.2587 14.6478 9.35218 13.7413 8.19119 13.469Z"
                fill="#CACAD0"
              />
              <path
                d="M18.5042 3.15595C17.6178 2.94802 16.6952 2.94802 15.8088 3.15595C14.6478 3.42828 13.7413 4.33479 13.469 5.49578C13.261 6.38222 13.261 7.30475 13.469 8.19119C13.7413 9.35218 14.6478 10.2587 15.8088 10.531C16.6952 10.739 17.6178 10.739 18.5042 10.531C19.6652 10.2587 20.5717 9.35218 20.8441 8.19119C21.052 7.30475 21.052 6.38222 20.8441 5.49578C20.5717 4.33479 19.6652 3.42828 18.5042 3.15595Z"
                fill="#CACAD0"
              />
              <path
                d="M18.5042 13.469C17.6178 13.261 16.6952 13.261 15.8088 13.469C14.6478 13.7413 13.7413 14.6478 13.469 15.8088C13.261 16.6952 13.261 17.6178 13.469 18.5042C13.7413 19.6652 14.6478 20.5717 15.8088 20.8441C16.6952 21.052 17.6178 21.052 18.5042 20.8441C19.6652 20.5717 20.5717 19.6652 20.8441 18.5042C21.052 17.6178 21.052 16.6952 20.8441 15.8088C20.5717 14.6478 19.6652 13.7413 18.5042 13.469Z"
                fill="#CACAD0"
              />
            </svg>

            <h2>색상을 선택해주세요.</h2>
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
              stroke="#CACAD0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div>
          <ColorCircle color="#FF8616" />
          <ColorCircle color="#AFCFFF" />
          <ColorCircle color="#FC9C9C" />
          <ColorCircle color="#FFE588" />
          <ColorCircle color="#C4EA9E" />
          <ColorCircle color="#C99FFF" />
          <ColorCircle color="#CECECE" />
        </div>
      </ColorBtn>
      <SubmitBtn onClick={() => setIsCreated(true)}>
        <p>생성하기</p>
      </SubmitBtn>
    </Container>
  )
}

export default Create_Form
