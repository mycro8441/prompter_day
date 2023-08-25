import { useEffect, useRef, useState } from "react";
import Calendar from "src/components/Calendar";
import Home from "src/components/Home";
import Mento from "src/components/Mento";
import MyPage from "src/components/MyPage";
import Planner from "src/components/Planner";
import useStore from "src/store"
import styled from "styled-components"

const Container = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  flex-direction: column;
  align-items: center;
  padding-top:5em;
  background-color: #ECECF2;
`

export default function Index() {

  
  const {tab} = useStore();

  return (
    <>
      <Container>
        {tab}
      </Container>
    </>
  )
}
