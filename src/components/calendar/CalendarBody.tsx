import styled from "styled-components";
import {format, addMonths, subMonths} from 'date-fns';
import {startOfMonth, getDay, isSameDay, addDays,isSameMonth, parse, endOfMonth, startOfWeek, endOfWeek} from 'date-fns';
import { memo, useState } from "react";
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
    gap:5px;
    padding-top:2em;

    justify-content: space-around;
    font-size: ${p=>p.theme.fontSizes.smallText};
    font-weight:${p=>p.theme.fontWeight.smallText};

`
const WeekDayContainer = styled.div`
    flex:1;
    height:2em;
 
`
const Day = styled.div<{activated:1|0}>`
    color:${p=>p.activated ? p.theme.colors.blue : p.theme.colors.gray2};
    display:flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:100%;
    border:solid 3px transparent;
    border-radius: 6px;
    background-color: linear-gradient(#FFFFFF, #FFFFFF00);
    background-image: ${p=>p.activated && `linear-gradient(#F6F6FACC, #F6F6FACC), linear-gradient(to bottom, white 0%, #F6F6FACC 100%)`};
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: ${p=>p.activated && "0 2px 5px 1px #0019FA1A"};
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
    flex:1;
    height:52px;
    padding:2px;
`
const DayBlock = styled.div<{state:'selected' | 'normal' | 'disabled'}>`
    width:100%;
    height:100%;
    background-color:${p=>p.state === 'selected' ? "#0019FA99" : "none"};
    border-radius: 5px;
    padding:5px;
    color: ${p=>p.state === 'selected' ? p.theme.colors.gray1 : p.state ===  'normal' ? "#202126" : p.theme.colors.gray2};
    font-size:${p=>p.theme.fontSizes.smallText};
    font-weight:${p=>p.theme.fontWeight.smallText};
`
const CalendarContainer = styled.div`
    position:relative;
    width:100%;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;

`
const CalendarBackground = styled.div`
    width:100%;
    height:100%;
    background-color: #F8F8FD99;
    background-image: linear-gradient(#F8F8FD99, #F8F8FD99), linear-gradient(to bottom, white 0%, #F8F8FD99 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    border:solid 2px transparent;
    padding-bottom:1em;
    border-bottom-left-radius: 1em;
    border-bottom-right-radius: 1em;
`
const CalendarBlur = styled.div`
    position:absolute;
    width:90%;
    left:50%;
    transform:translate(-50%, 10px);
    height:22em;
    z-index: 1;
    border-radius: 16px;
    background: rgba(0, 25, 250, 0.04);
    filter: blur(20px);
    pointer-events: none;
`

const Container = styled.div`
    width:100%;
    height:auto;
    position:relative;
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
    const date = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    return <DayHeader>{date.map((v, i)=><>
                <WeekDayContainer key={i}>
                    <Day activated={getDay(selectedDate) === i ? 1:0}>
                        {v}
                    </Day>                
            </WeekDayContainer>
        </>)}</DayHeader>
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
                <DayContainer key={day.getTime()} >
                    <DayBlock
                        
                        onClick={()=>onDateClick(cloneDay)}
                        state={
                            !isSameMonth(day, currentMonth) ?
                            "disabled"
                            : isSameDay(day, selectedDate) ?
                            "selected":
                            "normal"
                        }
                    >
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
const CalendarBody = ({selectedDate, setSelectedDate}) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    }
    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    }
    const onDateClick = (day) => {
        if(format(currentMonth, 'M') !== format(day, 'M')) {
            if(format(day, 'M') === format(addMonths(currentMonth, 1), 'M')) {
                nextMonth()
            }
            else {
                prevMonth()
            }
        }
        setSelectedDate(day);
    }




    return <>
            <RenderHeader
                currentMonth={currentMonth}
                prevMonth={prevMonth}
                nextMonth={nextMonth}

            />
            <Container>
                <CalendarBlur/>
                <CalendarContainer>
                    <CalendarBackground>
                        <RenderDays selectedDate={selectedDate}/>
                        <RenderCells
                            currentMonth={currentMonth}
                            selectedDate={selectedDate}
                            onDateClick={onDateClick}
                        />                              
                    </CalendarBackground>
            
                </CalendarContainer>                     
            </Container>
        

    </>
}


export default memo(CalendarBody);