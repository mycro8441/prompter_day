import { useState } from "react";
import styled from "styled-components";
import CalendarBody from "./calendar/CalendarBody";

const Container = styled.div`
    width:100%;
    height:100%;
    overflow-y:auto;
    padding:2em;
    padding-top:0;
`
const Title = styled.div`
  text-align:left;
  margin-top:1em;
  font-size:${p=>p.theme.fontSizes.title};
  font-weight:${p=>p.theme.fontWeight.title};
`

const TimeLineContainer = styled.div`
    position:relative;
    margin-top:10px;
    padding-top:1em;
    margin-left:16px;
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
        margin:0;
        color:${p=>p.theme.colors.gray4};
        font-size:${p=>p.theme.fontSizes.smallText};
    }
`
const Titlea = styled.div`
    color: #202126;
    position: relative;
    font-size:${p=>p.theme.fontSizes.smallTitle};
    &::before {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;

        border-radius: 10px;
        left: -38px;
        background-image: ${p=>`linear-gradient(${p.theme.colors.orange+"CC"}, ${p.theme.colors.orange+"CC"}), linear-gradient(to bottom, #FFC187 0%, ${p.theme.colors.orange+"CC"} 100%)`};
        background-origin: border-box;
        background-clip: content-box, border-box;
        border:solid 2px transparent;

        box-shadow: 1px 1px 3px 1px #FF861666;
    }
`
const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return <>
        <Container>
            <Title>캘린더</Title>
            <CalendarBody selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
            <Title>오늘 일정</Title>
            <TimeLineContainer>
                <Block>
                    <Titlea>
                        자바스크립트 개발 환경 설정
                    </Titlea>
                    <p>오후 1:00 - 오후 2:00</p>
                </Block>
                <Block>
                    <Titlea>
                        자바스크립트 조건문과 반복문 학습
                    </Titlea>
                    <p>오후 4:00 - 오후 5:30</p>
                </Block>
            </TimeLineContainer>
        </Container>
    </>
}

export default Calendar;