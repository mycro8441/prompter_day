import Mento from 'src/components/Mento';
import {create} from 'zustand'

interface serviceI {
    themeMode:boolean;
    tab:JSX.Element;
    changeTab:(page:JSX.Element)=>void;
}


const useStore = create<serviceI>(set=>({
    themeMode:true,
    tab:<Mento/>,
    changeTab:(page:JSX.Element)=>set(()=>({tab:page})),
}))

export default useStore;
