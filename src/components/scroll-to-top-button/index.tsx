'use client'

import React, { useState } from 'react'

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    setIsVisible(scrollTop > 200)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  // Adicione um event listener para atualizar a visibilidade do botão quando a página é rolada
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <button
      className={`fixed bottom-20 left-[318px] w-10 h-10 inline-flex items-center justify-center rounded-full bg-black p-3 text-center text-base font-medium text-primary transition-all hover:bg-primary hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-200 ${
        isVisible ? 'visible' : 'invisible'
      }`}
      onClick={scrollToTop}
    >
      ↑
    </button>
  )
}
