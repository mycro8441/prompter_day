import useStore from "src/store"
import styled from "styled-components"

const Container = styled.div`
  width:100vw;
  height:100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  background-color: #F8F8FD;
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
