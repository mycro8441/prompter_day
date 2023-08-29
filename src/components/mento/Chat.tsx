import { useState, useRef, useEffect } from "react";
import useStore from "src/store";
import styled from "styled-components";
import Image from "next/image";
import characterOneImage from "../../images/main/character1.png";

const Header = styled.div`
  width:100%;
  display:flex;
  font-size:${p=>p.theme.fontSizes.title};
  font-weight:${p=>p.theme.fontWeight.title};
  justify-content: space-between;
  padding-right:8px;
  div {
    display:flex;
    gap:12px;
    align-items: center;
  }
`
const ChatBase = styled.div`
    flex:1;
    width:100%;
    display:flex;
    flex-direction: column;
    padding-top:2em;
    overflow-y:auto;
`
const ChatContainer = styled.div`
    flex-grow:1;
    width:100%;
    position:relative;
    overflow-y:auto;
    flex-basis:0;
    max-height:100%;
    padding-right:1em;
`
const ChatInput = styled.form`
    width:100%;
    height:2.5em;
    display:flex;
    input {
        border:none;
        background-color: #EEEEF6;
        border-radius:12px;
        padding-left:1em;
        flex:1;
    }
    div {
        display:flex;
        padding:6px;
        justify-content: center;
        align-items: center;
    }
`

const MessageContainer = styled.div<{me:boolean}>`
    display:flex;
    gap:10px;
    flex-flow:${p=>p.me && "row-reverse"};
    & > div{
        display:flex;
        flex-direction: column;
        gap:4px;

    }
    & > div > p {
            margin:0;
            margin-top:6px;
            font-size:${p=>p.theme.fontSizes.smallText};
            font-weight:${p=>p.theme.fontWeight.title};
        
    }
`
const MessageBalloon = styled.div<{me:boolean}>`
    display:flex;
    align-items: end;
    gap:5px;
    word-break: break-all;
    margin-bottom:5px;
    flex-flow:${p=>p.me && "row-reverse"};
    p {
        text-align:${p=>p.me&&"right"};
        color:${p=>p.theme.colors.gray3};
        font-size: ${p=>p.theme.fontSizes.smallText};
        font-weight:${p=>p.theme.fontWeight.smallText};
        margin:0;
    }
    div {
        width:auto;
        max-width: 40vw;
        height:auto;
        padding:12px;
        border-radius: 12px;
        color:${p=>p.me && "white"};
        background-color: ${p=>p.me ? "#7886FF":"#EEEEF6"};
        font-size:${p=>p.theme.fontSizes.smallTitle};
        font-weight:${p=>p.theme.fontWeight.smallTitle};        
    }

`
const CharacterContainer = styled.div`
    width:36px;
    height:36px;
    display:flex;
    justify-content: center;
    align-items: center;
`
const Circle = styled.div<{color1:string, color2:string}>`
  width:100%;
  height:100%;
  border-radius: 1.5em;
  
  background :${p=>`linear-gradient(180deg, ${p.color1} 0%, ${p.color2} 100%)`};
  display:flex;
  justify-content: center;
  align-items: center;
  overflow:hidden;
`
const Input = ({data, setData}) => {
    const [input, setInput] = useState('');

    const onSubmit = e => {
        e.preventDefault()
        if(!input) return;
        setData([...data, input]);
        setInput('')

    }
    return <ChatInput onSubmit={onSubmit}>
        <input placeholder="멘토에게 질문해보세요!" value={input} onChange={e=>setInput(e.target.value)}/>
        <div>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1_241_865" fill="white">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.91463 12.2002C4.56766 7.98576 8.96059 4.2295 12.9189 6.21105L25.5719 12.5453C29.2567 14.3899 29.2527 19.6467 25.5651 21.4857L12.9188 27.7925C8.95836 29.7676 4.57168 26.0067 5.92301 21.7947L7.23406 17.7083H12.0415C12.4327 17.7083 12.7499 17.3912 12.7499 17C12.7499 16.6088 12.4327 16.2917 12.0415 16.2917H7.22231L5.91463 12.2002Z"/>
            </mask>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.91463 12.2002C4.56766 7.98576 8.96059 4.2295 12.9189 6.21105L25.5719 12.5453C29.2567 14.3899 29.2527 19.6467 25.5651 21.4857L12.9188 27.7925C8.95836 29.7676 4.57168 26.0067 5.92301 21.7947L7.23406 17.7083H12.0415C12.4327 17.7083 12.7499 17.3912 12.7499 17C12.7499 16.6088 12.4327 16.2917 12.0415 16.2917H7.22231L5.91463 12.2002Z" fill="#2138FF" fill-opacity="0.8"/>
            <path d="M12.9189 6.21105L13.3665 5.31684L12.9189 6.21105ZM5.91463 12.2002L6.86716 11.8957H6.86716L5.91463 12.2002ZM25.5719 12.5453L25.1243 13.4395L25.5719 12.5453ZM25.5651 21.4857L26.0114 22.3806L25.5651 21.4857ZM12.9188 27.7925L12.4725 26.8977H12.4725L12.9188 27.7925ZM5.92301 21.7947L4.97082 21.4893H4.97082L5.92301 21.7947ZM7.23406 17.7083V16.7083H6.50468L6.28186 17.4028L7.23406 17.7083ZM7.22231 16.2917L6.26978 16.5961L6.49209 17.2917H7.22231V16.2917ZM13.3665 5.31684C8.61848 2.93993 3.34504 7.44517 4.9621 12.5046L6.86716 11.8957C5.79027 8.52636 9.3027 5.51907 12.4712 7.10526L13.3665 5.31684ZM26.0196 11.6511L13.3665 5.31684L12.4712 7.10526L25.1243 13.4395L26.0196 11.6511ZM26.0114 22.3806C30.4367 20.1737 30.4415 13.8647 26.0196 11.6511L25.1243 13.4395C28.072 14.9151 28.0688 19.1197 25.1188 20.5909L26.0114 22.3806ZM13.3651 28.6874L26.0114 22.3806L25.1188 20.5909L12.4725 26.8977L13.3651 28.6874ZM4.97082 21.4893C3.34853 26.5458 8.61446 31.0566 13.3651 28.6874L12.4725 26.8977C9.30225 28.4787 5.79483 25.4677 6.87521 22.1002L4.97082 21.4893ZM6.28186 17.4028L4.97082 21.4893L6.87521 22.1002L8.18625 18.0138L6.28186 17.4028ZM12.0415 16.7083H7.23406V18.7083H12.0415V16.7083ZM11.7499 17C11.7499 16.8389 11.8805 16.7083 12.0415 16.7083V18.7083C12.985 18.7083 13.7499 17.9435 13.7499 17H11.7499ZM12.0415 17.2917C11.8805 17.2917 11.7499 17.1611 11.7499 17H13.7499C13.7499 16.0565 12.985 15.2917 12.0415 15.2917V17.2917ZM7.22231 17.2917H12.0415V15.2917H7.22231V17.2917ZM4.9621 12.5046L6.26978 16.5961L8.17485 15.9872L6.86716 11.8957L4.9621 12.5046Z" fill="url(#paint0_linear_241_865)" mask="url(#path-1-inside-1_241_865)"/>
            <defs>
            <linearGradient id="paint0_linear_241_865" x1="16.9998" y1="5.66675" x2="16.9998" y2="28.3334" gradientUnits="userSpaceOnUse">
            <stop stop-color="#7886FF"/>
            <stop offset="1" stop-color="white" stop-opacity="0"/>
            <stop offset="1" stop-color="#7886FF" stop-opacity="0"/>
            </linearGradient>
            </defs>
            </svg>

        </div>
    </ChatInput>
}

const Chat = () => {
    const [data, setData] = useState([]);
    const bottomRef = useRef(null);
    const {chatInfo, setChatInfo} = useStore()

    useEffect(()=>{
        bottomRef.current?.scrollIntoView({behavior:'smooth', block:"end"});
    }, [data])

    return <>
            <Header>
            <div onClick={()=>{
                setChatInfo({on:false,
                    info:{
                        id:null,
                        name:''
                    }
                })
            }}>
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 13L1 7L7 1" stroke="#202126" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                {chatInfo.info.name}
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.31573 13.7811L4.04591 13.6098L3.31573 13.7811ZM3.31573 8.324L4.04591 8.49528L3.31573 8.324ZM18.7893 8.324L19.5195 8.15273L18.7893 8.324ZM18.7893 13.781L19.5195 13.9523L18.7893 13.781ZM13.781 18.7893L13.6098 18.0591L13.781 18.7893ZM8.324 18.7893L8.15273 19.5195L8.324 18.7893ZM8.324 3.31573L8.15272 2.58555L8.324 3.31573ZM13.781 3.31573L13.9523 2.58555L13.781 3.31573ZM20.4697 21.5303C20.7626 21.8232 21.2374 21.8232 21.5303 21.5303C21.8232 21.2374 21.8232 20.7626 21.5303 20.4697L20.4697 21.5303ZM4.04591 13.6098C3.65136 11.9278 3.65136 10.1773 4.04591 8.49528L2.58555 8.15272C2.13815 10.06 2.13815 12.045 2.58555 13.9523L4.04591 13.6098ZM18.0591 8.49528C18.4537 10.1773 18.4537 11.9278 18.0591 13.6098L19.5195 13.9523C19.9669 12.045 19.9669 10.06 19.5195 8.15273L18.0591 8.49528ZM13.6098 18.0591C11.9278 18.4537 10.1773 18.4537 8.49528 18.0591L8.15273 19.5195C10.06 19.9669 12.045 19.9669 13.9523 19.5195L13.6098 18.0591ZM8.49528 4.04591C10.1773 3.65136 11.9278 3.65136 13.6098 4.04591L13.9523 2.58555C12.045 2.13815 10.06 2.13815 8.15272 2.58555L8.49528 4.04591ZM8.49528 18.0591C6.28757 17.5413 4.56377 15.8175 4.04591 13.6098L2.58555 13.9523C3.23351 16.7147 5.39038 18.8715 8.15273 19.5195L8.49528 18.0591ZM13.9523 19.5195C16.7147 18.8715 18.8715 16.7147 19.5195 13.9523L18.0591 13.6098C17.5413 15.8175 15.8175 17.5413 13.6098 18.0591L13.9523 19.5195ZM13.6098 4.04591C15.8175 4.56377 17.5413 6.28757 18.0591 8.49528L19.5195 8.15273C18.8715 5.39037 16.7147 3.23351 13.9523 2.58555L13.6098 4.04591ZM8.15272 2.58555C5.39037 3.23351 3.23351 5.39037 2.58555 8.15272L4.04591 8.49528C4.56377 6.28756 6.28757 4.56377 8.49528 4.04591L8.15272 2.58555ZM16.8048 17.8655L20.4697 21.5303L21.5303 20.4697L17.8655 16.8048L16.8048 17.8655Z" fill="#9C9DA4"/>
            </svg>

        </Header>
        <ChatBase>
            <ChatContainer>
                <MessageContainer me={false}>
                    <CharacterContainer>
                    <Circle color1="#0019FA" color2="#001881">
                        <Image src={characterOneImage} alt="요리사 이미지" width={23}/>
                    </Circle>
                    </CharacterContainer>
                    <div>
                        <p>{chatInfo.info.name}</p>
                        <MessageBalloon me={false}>
                            <div>
                                sdfsajdfskj;sfjdafkdjaflsd;afdkjasdkjlsa;df;sak
                            </div>
                            <p>오전 12:00</p>
                        </MessageBalloon>
                    </div>
                </MessageContainer>
                {data.map((v, i)=>
                    <MessageContainer key={i} me>
                        <div>
                            <MessageBalloon me>
                                <div>
                                    {v}
                                </div>
                                <p>오전 12:00</p>
                            </MessageBalloon>
                        </div>
                    </MessageContainer>                            
                )}
                <div ref={bottomRef}/>
            </ChatContainer>
            <Input setData={setData} data={data}/>
        </ChatBase>    
    </>

}


export default Chat;