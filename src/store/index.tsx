import Calendar from 'src/components/Calendar';
import Home from 'src/components/Home';
import {create} from 'zustand'

interface serviceI {
    themeMode:boolean;
    tab:JSX.Element;
    changeTab:(page:JSX.Element)=>void;
}


const useStore = create<serviceI>(set=>({
    themeMode:true,
    tab:<Calendar/>,
    changeTab:(page:JSX.Element)=>set(()=>({tab:page})),
}))

export default useStore;
