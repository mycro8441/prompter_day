import { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import IsNull from './planner/isNull'
import MyPlan from './planner/Myplan'
import Create from './planner/Cteate'
import { useEffect } from 'react'
import { getCalendar } from 'src/lib/routes'
const Planner = () => {
  const [isCreate, setIsCreate] = useState(false)
  const [data, setData] = useState(null)
  useEffect(() => {
    getCalendar().then((res) => {
      if (res.success) {
        console.log(res.data)
        setData(res.data)
      }
    })
  }, [isCreate])
  return (
    <>
      {!isCreate ? (
        <>
          {!data ? (
            <>
              <IsNull setIsCreate={setIsCreate} />
            </>
          ) : (
            <>
              <MyPlan data={data} setIsCreate={setIsCreate} />
            </>
          )}
        </>
      ) : (
        <>
          <Create setIsCreate={setIsCreate} />
        </>
      )}
    </>
  )
}

export default Planner
