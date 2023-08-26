import Home from 'src/components/Home';
import {create} from 'zustand'

interface serviceI {
    themeMode:boolean;
    tab:JSX.Element;
    changeTab:(page:JSX.Element)=>void;
}


const useStore = create<serviceI>(set=>({
    themeMode:true,
    tab:<Home/>,
    changeTab:(page:JSX.Element)=>set(()=>({tab:page})),
}))

export default useStore;
