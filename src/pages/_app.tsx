import GlobalStyle from '../styles/globals'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'

import styled from 'styled-components'
import {dark, light} from "../styles/theme"
import {useEffect, useRef, useState} from 'react'

import { useRouter } from 'next/router'
import Navbar from 'src/components/navbar'
import dynamic from 'next/dynamic'

const Container = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  flex-direction: column;

`
const Adjuster = styled.div`
  flex:1;
  padding-bottom:3.6em;
`
export default function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}) {

  const theme = useRef(light);
  
  const [isAuthed, setIsAuthed] = useState(true);


  return (

      <ThemeProvider theme={theme.current}>
        <GlobalStyle/>
            <Head>
              <title>travel app</title>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <meta name="description" content="여행, 똑똑하게 해보세요"/>
              <meta name="keywords" content="travel, planner"/>
            </Head>
            <Container>
              <Adjuster>
                <Component {...pageProps} />
              </Adjuster>
              <Navbar/>
            </Container>
      </ThemeProvider>

  )
}

