import Mento from 'src/components/Mento';
import {create} from 'zustand'

type Tab = {
    component:JSX.Element;
    name:string;
}
type Chat = {
    on:boolean,
    info: {
        id:number,
        name:string,
    }
}
interface serviceI {
    themeMode:boolean;
    tab:Tab;
    changeTab:(page:JSX.Element, name:string)=>void;
    chatInfo:Chat;
    setChatInfo:(info:Chat)=>void;
}


const useStore = create<serviceI>(set=>({
    themeMode:true,
    tab:{component:<Mento/>, name:"Planner"},
    changeTab:(page:JSX.Element, name:string)=>set(()=>({tab:{component:page, name:name}})),
    chatInfo:{
        on:true,
        info:{
            id:0,
            name:'요요',
        }
    },
    setChatInfo:(info:Chat)=>set(()=>({chatInfo:info})),
}))

export default useStore;
