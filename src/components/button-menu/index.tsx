'use client'

import useMediaQuery from '@/hooks/use-media-query'
import { useEffect, useState, useCallback } from 'react'

import { FiMenu } from 'react-icons/fi'

export default function ButtonMenu() {
  const isDevice = useMediaQuery('(max-width: 1024px)')

  const [open, setOpen] = useState(false)

  const show = () => setOpen(true)
  const hidden = () => setOpen(false)

  const sidebarMenu = useCallback(() => {
    if (typeof document === 'undefined') return null

    return document.getElementById('sidebar-menu')
  }, [])

  useEffect(() => {
    const menu = sidebarMenu()
    const body = document.body

    const openMenuClasses = {
      show: ['h-full', 'left-0', 'translate-x-0'],
      hide: ['hidden', '-left-[290px]', 'min-h-screen', '-translate-x-[290px]'],
    }

    if (isDevice) {
      if (open && menu !== null) {
        menu.classList.add(...openMenuClasses.show)
        body.classList.add('relative')
      } else {
        menu?.classList.add(...openMenuClasses.hide)
        menu?.classList.remove(...openMenuClasses.show)
        body.classList.remove('relative')
      }
    }

    return () => {
      menu?.classList.remove(...openMenuClasses.show)
      menu?.classList.remove(...openMenuClasses.hide)
      body.classList.remove('relative')
    }
  }, [open, sidebarMenu, isDevice])

  return (
    <>
      <button className={`mb-2 flex lg:hidden`} onClick={show}>
        <FiMenu size={32} />
      </button>
      {/* backdrop */}
      {open && <div onClick={hidden} className="absolute left-0 top-0 z-40 h-full w-full" />}
    </>
  )
}
