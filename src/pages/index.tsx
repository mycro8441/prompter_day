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
