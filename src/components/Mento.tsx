import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import Main from "./mento/Main";
import useStore from "src/store";
import Chat from "./mento/Chat";

const Container = styled.div`
    width:100%;
    height:100%;
    overflow-y:auto;
    padding:4em 1.5em;
    padding-bottom:1em;
    display:flex;
    flex-direction: column;
`

const Mento = () => {


    const {chatInfo, setChatInfo} = useStore()

    return <>
        <Container>
            <>
                {chatInfo.on ? <>
                    <Chat/>
                </>:<>
                    <Main/>
                </>}
            </>

        </Container>
    </>
}

export default Mento;