import Home from 'src/components/Home'
import Mento from 'src/components/Mento'
import Quiz from 'src/components/main/Quiz'
import { create } from 'zustand'

type Tab = {
  component: JSX.Element
  name: string
}
type Chat = {
  on: boolean
  info: {
    id: number
    name: string
    imagesrc: string
  }
}
interface serviceI {
  themeMode: boolean
  tab: Tab
  changeTab: (page: JSX.Element, name: string) => void
  chatInfo: Chat
  setChatInfo: (info: Chat) => void
  isLoggedIn: boolean
  setIsLoggedIn: (value: boolean) => void
}

const useStore = create<serviceI>((set) => ({
  themeMode: true,
  tab: { component: <Home />, name: 'Home' },
  isLoggedIn: false,
  setIsLoggedIn: (value: boolean) => set(() => ({ isLoggedIn: value })),
  changeTab: (page: JSX.Element, name: string) =>
    set(() => ({ tab: { component: page, name: name } })),
  chatInfo: {
    on: false,
    info: {
      id: null,
      name: '',
      imagesrc: ''
    }
  },
  setChatInfo: (info: Chat) => set(() => ({ chatInfo: info }))
}))

export default useStore
