import Planner from 'src/components/Planner';
import {create} from 'zustand'

type Tab = {
    component:JSX.Element;
    name:string;
}
interface serviceI {
    themeMode:boolean;
    tab:Tab;
    changeTab:(page:JSX.Element, name:string)=>void;
}


const useStore = create<serviceI>(set=>({
    themeMode:true,
    tab:{component:<Planner/>, name:"Planner"},
    changeTab:(page:JSX.Element, name:string)=>set(()=>({tab:{component:page, name:name}})),
}))

export default useStore;
