import {create} from 'zustand'

interface serviceI {
    themeMode:boolean;

}


const useStore = create<serviceI>(set=>({
    themeMode:true,

}))

export default useStore;
