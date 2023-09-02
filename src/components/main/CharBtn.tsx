import { memo } from "react";
import styled from "styled-components";
import Image from "next/image";
import useStore from "src/store";
import Mento from "../Mento";

const BtnContainer = styled.div`
  width:100%;
  height:5em;
  display:flex;
  justify-content: center;
  align-items: center;
  margin-top:0.5em;
`
const Btn = styled.div`
  position:relative;
  width:100%;
  height:5em; 
  border:solid 3px transparent;
  border-radius: 1em;
  background-image: ${p=>`linear-gradient(${p.theme.colors.gray1}, ${p.theme.colors.gray1}), linear-gradient(to bottom, white 0%, ${p.theme.colors.gray1} 100%)`};
  background-origin: border-box;
  background-clip: content-box, border-box;
  font-size:${p=>p.theme.fontSizes.smallTitle};
  font-weight:${p=>p.theme.fontWeight.smallTitle};

`

const Blur = styled.div<{color:string}>`
  position:absolute;
  border-radius: 1em;
  width:80%;
  height:5em; 
  left:50%;
  transform: translate(-50%, 10px);
  background-color:${p=>p.color};
  filter:blur(10px);
  z-index: 1;
`

const Adjuster = styled.div`
  display:flex;
  width:100%;
  height:100%;
  justify-content:space-between;
  align-items:center;
  padding:0 0.4em;
  
`

const CharacterContainer = styled.div`
    width:4em;
    height:4em;
    display:flex;
    justify-content: center;
    align-items: center;
`
const Circle = styled.div<{color1:string, color2:string}>`
  width:3em;
  height:3em;
  border-radius: 1.5em;
  
  background :${p=>`linear-gradient(180deg, ${p.color1} 0%, ${p.color2} 100%)`};
  display:flex;
  justify-content: center;
  align-items: center;
  overflow:hidden;
`
const CharacterInfoContainer = styled.div`
  flex:1;
  padding-left:5px;
  width:100%;
  height:100%;
  display:flex;
  flex-direction: column;
  justify-content: center;

  div:first-child {
    font-size:${p=>p.theme.fontSizes.smallTitle};
    font-weight:700;
  }
  div:last-child {
    font-size:${p=>p.theme.fontSizes.smallText};
    font-weight:${p=>p.theme.fontWeight.smallText};
  }
`


const CharBtn = ({color1, color2, imagesrc, alt, title, subtitle}) => {


    const {setChatInfo, changeTab} = useStore()
    return <BtnContainer onClick={()=>{
      changeTab(<Mento/>, "Mento");
      setChatInfo({
      on:true,
      info:{
          id:alt,
          name:title
      }
    })}}>
    <Blur color={color1+"09"}/>
    <Btn>
        <Adjuster>
            <CharacterContainer>
              <Circle color1={color1} color2={color2}>
                <Image src={imagesrc} alt={alt} height={64}/>
              </Circle>
            </CharacterContainer>
            <CharacterInfoContainer>
              <div>{title}</div>
              <div>{subtitle}</div>
            </CharacterInfoContainer>
        </Adjuster>
    </Btn>
</BtnContainer>
}


export default memo(CharBtn);