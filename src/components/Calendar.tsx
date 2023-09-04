import { useEffect, useState } from 'react'
import styled from 'styled-components'
import CalendarBody from './calendar/CalendarBody'
import Timeline from './calendar/Timeline'
import { getCalendar } from 'src/lib/routes'
import { format } from 'date-fns'

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
  const [data, setData] = useState(null)
  useEffect(() => {
    getCalendar().then((res) => {
      if (res.success) {
        console.log(res.data)
      }
    })
  }, [])
  return (
    <>
      <Container>
        <Title>캘린더</Title>
        <CalendarBody
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <Title>오늘 일정</Title>
        <Timeline />
      </Container>
    </>
  )
}

export default Calendar
