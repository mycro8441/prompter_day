import { useState } from 'react'
import styled from 'styled-components'
import CalendarBody from './calendar/CalendarBody'

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 4em 2em;
  position: relative;
`
const Title = styled.div`
  text-align: left;
  margin-top: 1em;
  font-size: ${(p) => p.theme.fontSizes.title};
  font-weight: ${(p) => p.theme.fontWeight.title};
`

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  return (
    <>
      <Container>
        <Title>캘린더</Title>
        <CalendarBody
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </Container>
    </>
  )
}

export default Calendar
