import GlobalStyle from '../styles/globals'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'

import styled from 'styled-components'
import {dark, light} from "../styles/theme"
import {useEffect, useRef, useState} from 'react'

import { useRouter } from 'next/router'
import Navbar from 'src/components/navbar'
import dynamic from 'next/dynamic'
import useStore from 'src/store'
import Login from 'src/components/auth/Login'

const Container = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  flex-direction: column;

`
const Adjuster = styled.div<{visible:boolean}>`
  flex:1;
  padding-bottom:${p=>p.visible && "3.6em"};
`
export default function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}) {

  const theme = useRef(light);
  
  const {tab, isLoggedIn} = useStore()
  return (

      <ThemeProvider theme={theme.current}>
        <GlobalStyle/>
            <Head>
              <title>travel app</title>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <meta name="description" content="여행, 똑똑하게 해보세요"/>
              <meta name="keywords" content="travel, planner"/>
            </Head>
            {isLoggedIn ? <>
              <Container>
                <Adjuster visible={tab.name === "Home" || tab.name ==="Mento" || tab.name==="Planner" || tab.name==="Calendar" || tab.name === "MyPage"}>
                  <Component {...pageProps} />
                </Adjuster>
                {(tab.name === "Home" || tab.name ==="Mento" || tab.name==="Planner" || tab.name==="Calendar" || tab.name === "MyPage") && <Navbar/>}
              </Container>            
            </>:<>
              <Login/>
            </>}

      </ThemeProvider>

  )
}

