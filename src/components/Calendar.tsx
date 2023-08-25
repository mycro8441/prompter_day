import { useState } from "react";
import styled from "styled-components";
import {format, addMonths, subMonths} from 'date-fns';
import {startOfMonth, isSameDay, addDays, parse, endOfMonth, startOfWeek, endOfWeek} from 'date-fns';
const Container = styled.div`
    width:100%;
    height:100%;
    overflow-y:auto;
    padding:2em;
`
const Title = styled.div`
  text-align:left;
  font-size:${p=>p.theme.fontSizes.title};
  font-weight:${p=>p.theme.fontWeight.title};
`
const HeaderContainer = styled.div`
    width:100%;
    height:52px;    
    display:flex;
    margin-top:1.8em;
    justify-content: center;
`
const Header = styled.div`
    width:100%;
    height:100%;
    background-color: ${p=>p.theme.colors.blue+"99"};
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:0 1.4em;
    box-shadow: 0 10px 15px 1px #0019FA33;
    p {
        font-size:${p=>p.theme.fontSizes.smallTitle};
        color:${p=>p.theme.colors.gray1};
        font-weight:700;
    }
`

const DayHeader=styled.div`
    width:100%;
    padding:0 2em;
    display:flex;
    margin-top:2em;
    justify-content: space-around;
    font-size: ${p=>p.theme.fontSizes.smallText};
    font-weight:${p=>p.theme.fontWeight.smallText};
    div {
        width:20px;
    }
`
const Day = styled.div<{activated:boolean}>`
    color:${p=>p.activated ? p.theme.colors.blue : p.theme.colors.gray2};
`
const RowsContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    gap:5px;
    margin-top:1em;
    padding:0 1.5em;
`
const DaysContainer = styled.div`
    display:flex;
    justify-content: space-around;
`
const DayContainer = styled.div`
    width:40px;
    height:52px;
    padding:2px;
`
const DayBlock = styled.div`
    width:100%;
    height:100%;
    background-color: #0019FA99;
    border-radius: 5px;
    padding:5px;
    color:white;
    font-size:${p=>p.theme.fontSizes.smallText};
    font-weight:${p=>p.theme.fontWeight.smallText};
`
const RenderHeader = ({currentMonth, prevMonth, nextMonth}) => {


        return (
        <HeaderContainer>
            <Header>
            <svg onClick={()=>prevMonth()} xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                <path d="M7 13L1 7L7 1" stroke="#F8F8FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p>{format(currentMonth, 'yyyy')}년 {format(currentMonth, 'MM')}월</p>
            <svg onClick={()=>nextMonth()} xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                <path d="M1 1L7 7L1 13" stroke="#F8F8FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </Header>

        </HeaderContainer>

        )
}

const RenderDays = ({selectedDate}) => {
    const days=[];
    const date = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    for (let i = 0;i<7;i++) {
        days.push(
            <Day activated={false} key={i}>
                {date[i]}
            </Day>
        )
    }

    return <DayHeader>{days}</DayHeader>
}
const RenderCells = ({currentMonth, selectedDate, onDateClick})=> {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows=[];
    let days = [];
    let day = startDate;
    let formattedDate = '';

    while(day <= endDate) {
        for(let i=0;i<7;i++) {
            formattedDate = format(day, 'd');
            const cloneDay = day;
            days.push(
                <DayContainer>
                    <DayBlock key={day.getTime()} onClick={()=>onDateClick(cloneDay)}>
                        <span>
                            {formattedDate}
                        </span>
                    </DayBlock>                    
                </DayContainer>

            )
            day = addDays(day, 1);
        }
        rows.push(
            <DaysContainer key={day.getTime()}>
                {days}
            </DaysContainer>
        )
        days=[];
    }
    return <RowsContainer>{rows}</RowsContainer>
}
const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    }
    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    }
    const onDateClick = (day) => {
        setSelectedDate(day);
    }
    return <>
        <Container>
            <Title>캘린더</Title>
            <RenderHeader
                currentMonth={currentMonth}
                prevMonth={prevMonth}
                nextMonth={nextMonth}
            />
            <RenderDays selectedDate={selectedDate}/>
            <RenderCells
                currentMonth={currentMonth}
                selectedDate={selectedDate}
                onDateClick={onDateClick}
            />
        </Container>
    </>
}

export default Calendar;