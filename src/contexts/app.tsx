'use client'
import { ReactNode, createContext, useContext, useState } from 'react'

interface AppContextProps {
  isLoadingPage: boolean
  loadingPage(): void
  stopLoadingPage(): void
}

const AppContext = createContext<AppContextProps>({} as AppContextProps)

export function AppProvider({ children }: { children: ReactNode }) {
  const [isLoadingPage, setIsLoadingPage] = useState(true)

  const loadingPage = () => {
    setIsLoadingPage(true)
  }

  const stopLoadingPage = () => {
    setIsLoadingPage(false)
  }

  return (
    <AppContext.Provider value={{ isLoadingPage, loadingPage, stopLoadingPage }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
