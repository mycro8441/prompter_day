import Planner from 'src/components/Planner';
import {create} from 'zustand'

interface serviceI {
    themeMode:boolean;
    tab:JSX.Element;
    changeTab:(page:JSX.Element)=>void;
}


const useStore = create<serviceI>(set=>({
    themeMode:true,
    tab:<Planner/>,
    changeTab:(page:JSX.Element)=>set(()=>({tab:page})),
}))

export default useStore;
