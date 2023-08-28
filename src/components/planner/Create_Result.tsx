import { useState } from "react";
import styled from "styled-components";
import Timeline from "../calendar/Timeline";


const Container_Created = styled.div`
    position:relative;
    width:100%;
    height:100%;
    overflow:hidden;
    padding:4em 2em;
    p {
        text-align:left;
        margin:0;
        font-size:${p=>p.theme.fontSizes.title};
        font-weight: ${p=>p.theme.fontWeight.title};
    }       
    h2 {
            font-size:${p=>p.theme.fontSizes.smallTitle};
            font-weight:${p=>p.theme.fontWeight.smallTitle};
            color:${p=>p.theme.colors.gray4};
    }

`
const Slider = styled.div`
    width:100%;
    background-color: #EEEEF6;
    border-radius: 12px;
    height:2.8em;
    padding:6px;
    display:flex;
    margin-bottom:1.5em;
`
const SliderBlock = styled.div<{activated:boolean}>`
    flex:1;
    height:100%;
    display: flex;
    justify-content: center;
    align-items:center;
    border:solid 3px transparent;
    border-radius: 6px;
    background-image: ${p=>p.activated && "linear-gradient(#F8F8FB, #F8F8FB), linear-gradient(to bottom, white 0%, #F8F8FD 100%)"};
    background-origin: ${p=>p.activated && "border-box"};
    background-clip: ${p=>p.activated && "content-box, border-box"};
    box-shadow: ${p=>p.activated && "0px 4px 10px 1px #0019FA1A"};
    font-size:${p=>p.theme.fontSizes.smallTitle};
    font-weight:${p=>p.theme.fontWeight.smallTitle};

` 
const WeekHeader = styled.div`
    width:100%;
    display:flex;
    justify-content: space-between;

    div {
        display:flex;
        gap:12px;
    }
`
const SubmitBtn = styled.div`
    margin:auto;
    width:100%;
    height:3.5em;
    border: 2px solid transparent;
    border-radius:1em;
    background-image: linear-gradient(#6271F8, #6271F8), linear-gradient(to bottom,#929DFF 0%,  #6271F8 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    display:flex;
    justify-content: center;
    align-items:center;
    box-shadow:0px 4px 10px 1px #0019FA33;
    p {
        color:${p=>p.theme.colors.gray1};
        font-size:${p=>p.theme.fontSizes.smallTitle};
        font-weight:${p=>p.theme.fontWeight.title};
    }
`
const Create_Result = () => {
    const [mode, setMode] = useState<0|1|2|3>(0);


    return <Container_Created>
    <p>생성된 플랜</p>
    <h2>
        텍스트를 클릭하면 수정할 수 있어요
    </h2>                
    <Slider>
        {[...Array(4)].map((v, i:0|1|2|3)=><SliderBlock activated={mode===i} onClick={()=>setMode(i)} key={i}>
            {i+1}주차
        </SliderBlock>
        )}
    </Slider>
    {[...Array(4)].map((v, i)=>
    <>  
        <WeekHeader>
            <p key={i}>{i+1}주차</p>
            <div>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5347 3.90098C12.814 3.36634 15.1861 3.36634 17.4653 3.90098C20.7569 4.67308 23.327 7.24316 24.0991 10.5347C24.6337 12.814 24.6337 15.1861 24.0991 17.4653C23.327 20.7569 20.7569 23.327 17.4653 24.0991C15.1861 24.6337 12.814 24.6337 10.5347 24.0991C7.24316 23.327 4.67308 20.7569 3.90098 17.4653C3.36634 15.1861 3.36634 12.814 3.90098 10.5347C4.67308 7.24316 7.24316 4.67308 10.5347 3.90098ZM14.7 9.20791C14.7 8.82131 14.3866 8.50791 14 8.50791C13.6134 8.50791 13.3 8.82131 13.3 9.20791V13.3H9.20791C8.82131 13.3 8.50791 13.6134 8.50791 14C8.50791 14.3866 8.82131 14.7 9.20791 14.7H13.3V18.7921C13.3 19.1787 13.6134 19.4921 14 19.4921C14.3866 19.4921 14.7 19.1787 14.7 18.7921V14.7H18.7921C19.1787 14.7 19.4921 14.3866 19.4921 14C19.4921 13.6134 19.1787 13.3 18.7921 13.3H14.7V9.20791Z" fill="#CACAD0"/>
                </svg>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 3.5C13.2699 3.5 12.5451 3.6287 11.8664 3.88049C11.1876 4.13228 10.5652 4.50341 10.0367 4.97673C9.50796 5.45021 9.0828 6.01755 8.79063 6.64924C8.61403 7.03108 8.48859 7.43095 8.41695 7.84007H4.30769C3.86162 7.84007 3.5 8.20441 3.5 8.65384C3.5 9.10327 3.86162 9.4676 4.30769 9.4676H5.65385V14.1893C5.65385 15.9613 5.90331 17.7245 6.3948 19.426C7.12979 21.9705 9.24588 23.8663 11.84 24.3044L12.0099 24.3331C13.3274 24.5556 14.6725 24.5556 15.9901 24.3331L16.16 24.3044C18.7541 23.8663 20.8702 21.9705 21.6052 19.426C22.0967 17.7245 22.3461 15.9613 22.3461 14.1892V9.4676H23.6923C24.1384 9.4676 24.5 9.10327 24.5 8.65384C24.5 8.20441 24.1384 7.84007 23.6923 7.84007H19.5831C19.5114 7.43095 19.386 7.03108 19.2094 6.64924C18.9172 6.01755 18.492 5.45021 17.9634 4.97673C17.4348 4.50341 16.8124 4.13228 16.1336 3.88049C15.4549 3.6287 14.7301 3.5 14 3.5ZM12.4245 5.40778C12.9217 5.22335 13.4573 5.12753 14 5.12753C14.5427 5.12753 15.0783 5.22335 15.5755 5.40778C16.0726 5.5922 16.5186 5.86045 16.8901 6.19316C17.2615 6.5257 17.5502 6.91525 17.7452 7.33668C17.8211 7.50098 17.8825 7.66926 17.929 7.84007L10.071 7.84007C10.1175 7.66926 10.1789 7.50098 10.2548 7.33668C10.4498 6.91525 10.7385 6.5257 11.1099 6.19316C11.4814 5.86045 11.9274 5.5922 12.4245 5.40778ZM11.8462 13.2652C12.2922 13.2652 12.6538 13.6295 12.6538 14.0789V18.419C12.6538 18.8684 12.2922 19.2328 11.8462 19.2328C11.4001 19.2328 11.0385 18.8684 11.0385 18.419V14.0789C11.0385 13.6295 11.4001 13.2652 11.8462 13.2652ZM16.1538 13.2652C16.5999 13.2652 16.9615 13.6295 16.9615 14.0789V18.419C16.9615 18.8684 16.5999 19.2328 16.1538 19.2328C15.7078 19.2328 15.3462 18.8684 15.3462 18.419V14.0789C15.3462 13.6295 15.7078 13.2652 16.1538 13.2652Z" fill="#CACAD0"/>
                </svg>

            </div>
        </WeekHeader>
        <Timeline/>                    
    </>

    )}
    <SubmitBtn>
        <p>캘린더에 추가하기</p>
    </SubmitBtn>
</Container_Created>
}

export default Create_Result;