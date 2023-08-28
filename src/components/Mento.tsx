import styled from "styled-components";
import { useState } from "react";
import Main from "./mento/Main";

const Container = styled.div`
    width:100%;
    height:100%;
    overflow-y:auto;
    padding:4em 2em;
`
const Header = styled.div`
  width:100%;
  display:flex;
  font-size:${p=>p.theme.fontSizes.title};
  font-weight:${p=>p.theme.fontWeight.title};
  div {
    display:flex;
    gap:6px;
  }
`

const Mento = () => {


    const [chatInfo, setChatInfo] = useState({
        on:false,
        info: {
            id:0,
            name:"",
        }
    })

    return <>
        <Container>
            <>
                {chatInfo.on ? <>
                    <Header>
                        <div>
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 13L1 7L7 1" stroke="#202126" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                        </div>
                    </Header>
                    
                </>:<>
                    <Main setChatInfo={setChatInfo}/>
                </>}
            </>

        </Container>
    </>
}

export default Mento;