import useStore from 'src/store'
import styled from 'styled-components'
import Home from '../Home'
import AINEWS from '../../images/news/AINEWS.jpg'
import WEBNEWS from '../../images/news/WEBNEWS.jpg'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { getNews } from 'src/lib/routes'
const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  padding: 4em 1.5em;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
`
const Header = styled.div`
  width: 100%;
  display: flex;
  text-align: left;
  margin-top: 1em;
  font-size: ${(p) => p.theme.fontSizes.title};
  font-weight: ${(p) => p.theme.fontWeight.title};
  align-items: center;
  gap: 12px;
`
const Blocks = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 32px 0;
  flex-grow: 1;
  width: 100%;
  position: relative;
  overflow-y: auto;
  flex-basis: 0;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`
const Block = styled.div`
  width: 100%;
  height: auto;
  background-color: #eeeef6cc;
  border-radius: 16px;
  padding: 24px;
  position: relative;
  p {
    color: #202126;
    font-size: ${(p) => p.theme.fontSizes.smallTitle};
    font-weight: ${(p) => p.theme.fontWeight.smallTitle};
  }
`
const Title = styled.div`
  margin-top: 8px;
  margin-bottom: 6px;
  font-size: ${(p) => p.theme.fontSizes.subtitle};
  font-weight: ${(p) => p.theme.fontWeight.title};
`
const Subtitle = styled.div`
  color: ${(p) => p.theme.colors.gray3};
  text-align: left;
  font-size: ${(p) => p.theme.fontSizes.smallTitle};
  font-weight: ${(p) => p.theme.fontWeight.smallTitle};
  white-space: pre-line;
  width: 100%;
  word-break: break-all;
`

const ImageContainer = styled.div`
  width: 100%;
  margin: 24px 0;

  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
  }
`
type NewsType = {
  title: string
  url: string
}
const News = () => {
  const { changeTab } = useStore()
  const [data, setData] = useState<NewsType[]>([])
  useEffect(() => {
    getNews('').then((res) => {
      if (res.success) {
        console.log(res.data)
        setData(res.data)
      }
    })
  }, [])
  return (
    <Container>
      <Header onClick={() => changeTab(<Home />, 'Home')}>
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 13L1 7L7 1"
            stroke="#202126"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        직종 관련 기사
      </Header>
      <Blocks>
        {data.length !== 0 &&
          data.map((v, i) => {
            return (
              <Block key={i}>
                <Title>
                  {v.title
                    .replaceAll('<b>', '')
                    .replaceAll('</b>', '')
                    .replaceAll('&quot;', '')}
                </Title>
                <Subtitle>{v.url}</Subtitle>
                <ImageContainer>
                  {/* <Image src={v.url} fill alt="AI 자료사진" /> */}
                </ImageContainer>
                <p>dd</p>
              </Block>
            )
          })}
      </Blocks>
    </Container>
  )
}

export default News
