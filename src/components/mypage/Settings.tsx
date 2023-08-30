import { useState } from "react";
import useStore from "src/store";
import styled from "styled-components";
import MyPage from "../MyPage";

const Container = styled.div`
    width:100%;
    height:100%;
    position: relative;
    padding:4em 1.5em;
    padding-bottom:0;
    display:flex;
    flex-direction: column;

`
const Header = styled.div`

    width:100%;
    display:flex;
    text-align:left;
    margin-top:1em;
    font-size:${p=>p.theme.fontSizes.title};
    font-weight:${p=>p.theme.fontWeight.title};
    align-items:center;
    gap:12px;
`
const Infos = styled.div`
    flex-grow:1;
    width:100%;
    position:relative;
    overflow-y:auto;
    flex-basis:0;
    max-height:100%;

    
`
const Title = styled.div`
    display:flex;
    gap:4px;
    align-items: center;
    p{
        color:${p=>p.theme.colors.gray4};
        font-size:${p=>p.theme.fontSizes.smallTitle};
    font-weight:${p=>p.theme.fontWeight.smallTitle};
    }
`
const PrettyInput = styled.input`
    width:100%;
    height:4em;
    border-radius:12px;
    color:${p=>p.theme.colors.gray4};
    border: 2px solid #EEEEF6;
    outline:none;
    font-size:${p=>p.theme.fontSizes.smallTitle};
    font-weight:${p=>p.theme.fontWeight.smallTitle};
    padding:20px 24px;
    padding-right:0;
`
const PrettySetting = styled.div`
    width:100%;
    height:4em;
    border-radius:12px;
    margin-top:6px;
    color:${p=>p.theme.colors.gray4};
    background-color: white;
    border: 2px solid #EEEEF6;
    font-size:${p=>p.theme.fontSizes.smallTitle};
    font-weight:${p=>p.theme.fontWeight.smallTitle};
    padding:20px 24px;

    display:flex;
    justify-content: space-between;
    align-items: center;
    div {
        display:flex;
        gap:4px;
        align-items:center;
    }
`

const ToggleContainer = styled.div<{on:boolean}>`
    width:53px;
    height:30px;


`
const LongCircle = styled.div<{on:boolean}>`
    position:relative;
    height:30px;
    width:54px;
    background-color: ${p=>p.on ? "rgba(52, 199, 89, 0.80)" : "#EEEEF6"};
    border-radius: 15px;
    box-shadow: ${p=>p.on && "4px 4px 10px 1px rgba(52, 199, 89, 0.80)"};
    transition: 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);

    div {
        width:26px;
        height:26px;
        background-color: white;
        border-radius: 13px;
        position:absolute;
        transform:${p=>p.on ? "translate(26px, 0px)" : "translate(2px, 0px)"};
        transition: 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
`
const Margin = styled.div`
    width:100%;
    height:2em;
`
const Settings = () => {

    const [toggle, setToggle] = useState({
        notice:false,
        dark:false,
    });
    const [inputs, setInputs] = useState({
        id:'',
        pw:'',
    })
    const {changeTab} = useStore();

    return <Container>
        <Header onClick={()=>changeTab(<MyPage/>, "MyPage")}>
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 13L1 7L7 1" stroke="#202126" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            환경 설정
        </Header>
        <Infos>
            <Title>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3C9.56586 3 7.59259 4.95716 7.59259 7.37143C7.59259 9.7857 9.56586 11.7429 12 11.7429C14.4341 11.7429 16.4074 9.7857 16.4074 7.37143C16.4074 4.95716 14.4341 3 12 3Z" fill="#CACAD0"/>
                <path d="M14.601 13.6877C12.8779 13.4149 11.1221 13.4149 9.39904 13.6877L9.21435 13.7169C6.78647 14.1012 5 16.1783 5 18.6168C5 19.933 6.07576 21 7.40278 21H16.5972C17.9242 21 19 19.933 19 18.6168C19 16.1783 17.2135 14.1012 14.7857 13.7169L14.601 13.6877Z" fill="#CACAD0"/>
                </svg>
                <p>아이디</p>
            </Title>
            <PrettyInput value={inputs.id} onChange={e=>setInputs({...inputs, id:e.target.value})}/>
            <Title>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1374 4.51386C11.703 4.37049 12.2969 4.37049 12.8625 4.51386C14.1819 4.84832 15.1258 5.96028 15.2306 7.26587L15.1915 7.25782C13.0872 6.82413 10.9128 6.82413 8.8085 7.25782L8.76936 7.26589C8.87413 5.96028 9.81803 4.84832 11.1374 4.51386ZM16.685 7.50839V7.7184C18.1592 8.40029 19.2768 9.68843 19.6983 11.2674C20.1955 13.1297 20.0758 15.0973 19.3563 16.8896L19.2718 17.1C18.5 19.0225 16.7426 20.4054 14.6498 20.7371L13.9687 20.845C12.6648 21.0517 11.3352 21.0517 10.0313 20.845L9.35019 20.7371C7.25734 20.4054 5.49999 19.0225 4.72818 17.1L4.64368 16.8895C3.92417 15.0973 3.80447 13.1297 4.30168 11.2674C4.72321 9.68846 5.84078 8.40033 7.31494 7.71843V7.50838C7.31494 5.45953 8.7365 3.66924 10.7734 3.15292C11.5777 2.94903 12.4223 2.94903 13.2266 3.15292C15.2634 3.66924 16.685 5.45954 16.685 7.50839ZM12 12.8504C12.3192 12.8504 12.5779 13.1022 12.5779 13.4129V15.288C12.5779 15.5987 12.3192 15.8506 12 15.8506C11.6809 15.8506 11.4221 15.5987 11.4221 15.288V13.4129C11.4221 13.1022 11.6809 12.8504 12 12.8504Z" fill="#CACAD0"/>
                </svg>

                <p>비밀번호</p>
            </Title>
            <PrettyInput value={inputs.pw} onChange={e=>setInputs({...inputs, pw:e.target.value})}/>
            <Margin/>
            <PrettySetting>
                <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.76529 18.2833C8.75176 18.2206 8.74081 18.1576 8.73239 18.0946C8.03265 18.0076 7.33546 17.8925 6.64245 17.7494L6.29899 17.6784C4.96113 17.4022 4 16.2092 4 14.8249C4 13.829 4.49292 12.951 5.2433 12.4262C5.02906 11.037 5.10563 9.61694 5.46866 8.2587L5.51871 8.07144C6.11763 5.83064 7.81404 4.04488 9.98686 3.33087C11.3311 2.88913 12.794 2.88787 14.139 3.33816C16.28 4.05497 17.9176 5.82206 18.4898 8.03325L18.5568 8.29186C18.906 9.64141 18.9741 11.0495 18.7571 12.4265C19.5072 12.9513 20 13.8292 20 14.8249C20 16.2092 19.0389 17.4022 17.701 17.6784L17.3576 17.7494C16.6645 17.8925 15.9673 18.0076 15.2676 18.0946C15.2592 18.1576 15.2482 18.2206 15.2347 18.2833L15.1684 18.5904C14.9261 19.7135 14.071 20.5966 12.9679 20.8629L12.7888 20.9061C12.2702 21.0313 11.7298 21.0313 11.2112 20.9061L11.032 20.8629C9.92905 20.5966 9.07386 19.7135 8.83156 18.5904L8.76529 18.2833ZM10.1583 18.2328C11.3846 18.3184 12.6154 18.3184 13.8417 18.2328L13.8287 18.2933C13.6989 18.8947 13.241 19.3676 12.6503 19.5102L12.4712 19.5534C12.1614 19.6282 11.8386 19.6282 11.5288 19.5534L11.3497 19.5102C10.759 19.3676 10.3011 18.8947 10.1713 18.2933L10.1583 18.2328Z" fill="#CACAD0"/>
                    </svg>
                    알림
                </div>
                <LongCircle on={toggle.notice} onClick={()=>setToggle({...toggle, notice:!toggle.notice})}>
                    <div/>
                </LongCircle>

            </PrettySetting>
            <PrettySetting>
                <div>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.26477 0.389341C8.42202 0.664486 8.39532 1.00775 8.19743 1.25527C7.36706 2.29393 6.87543 3.59416 6.87543 5.00563C6.87543 8.37199 9.69018 11.1385 13.2094 11.1385C14.176 11.1385 15.0895 10.9294 15.9064 10.5565C16.1935 10.4255 16.5314 10.4822 16.76 10.6997C16.9886 10.9173 17.0619 11.252 16.9452 11.5452C15.6716 14.7457 12.4833 17 8.7677 17C3.94648 17 0 13.1966 0 8.45844C0 4.14877 3.26708 0.610774 7.48451 0.00780575C7.79823 -0.0370466 8.10753 0.114196 8.26477 0.389341Z" fill="#CACAD0"/>
                    </svg>

                    다크모드
                </div>
                <LongCircle on={toggle.dark} onClick={()=>setToggle({...toggle, dark:!toggle.dark})}>
                    <div/>
                </LongCircle>

            </PrettySetting>
            <Margin/>
            <PrettySetting>
                <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5308 3.3303C13.5345 2.8899 11.4655 2.8899 9.46917 3.3303L9.05155 3.42243C6.7436 3.93157 4.83995 5.48141 3.86227 7.56555C3.71538 7.87867 3.95577 8.22161 4.30164 8.22161H20.6984C21.0442 8.22161 21.2846 7.87867 21.1377 7.56555C20.16 5.48141 18.2564 3.93157 15.9484 3.42243L15.5308 3.3303ZM3.37698 15.0688C2.97444 13.4549 2.89428 11.7821 3.13648 10.1447C3.17184 9.90567 3.37999 9.73296 3.62165 9.73296H21.3783C21.62 9.73296 21.8282 9.90567 21.8635 10.1447C22.1057 11.7821 22.0256 13.4549 21.623 15.0688C20.9347 17.8286 18.7366 19.9625 15.9484 20.5776L15.5308 20.6697C13.5345 21.1101 11.4655 21.1101 9.46917 20.6697L9.05155 20.5776C6.26343 19.9625 4.06534 17.8286 3.37698 15.0688ZM7.44085 11.2443C7.02174 11.2443 6.68198 11.5826 6.68198 12C6.68198 12.4173 7.02174 12.7557 7.44085 12.7557H11.4882C11.9073 12.7557 12.2471 12.4173 12.2471 12C12.2471 11.5826 11.9073 11.2443 11.4882 11.2443H7.44085Z" fill="#CACAD0"/>
                    </svg>
                    결제수단 관리
                </div>
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="#CACAD0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </PrettySetting>

        </Infos>
    </Container>
}


export default Settings;