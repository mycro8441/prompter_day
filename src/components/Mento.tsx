import styled from "styled-components";
import { useState } from "react";
import Main from "./mento/Main";

const Container = styled.div`
    width:100%;
    height:100%;
    overflow-y:auto;
    padding:4em 2em;
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
                    
                
                </>:<>
                    <Main/>
                </>}
            </>

        </Container>
    </>
}

export default Mento;