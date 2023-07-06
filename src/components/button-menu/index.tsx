'use client'

import useMediaQuery from '@/hooks/use-media-query'
import { useEffect, useState, useCallback } from 'react'

import { FiMenu } from 'react-icons/fi'
import { IoCloseOutline } from 'react-icons/io5'

const SIDEBAR_MENU_CLASSNAMES = {
  show: ['h-full', 'left-0', 'translate-x-0'],
  hide: ['hidden', '-left-[290px]', 'min-h-screen', '-translate-x-[290px]'],
}

export default function ButtonMenu() {
  const isDevice = useMediaQuery('(max-width: 1023px)')

  const [open, setOpen] = useState(false)
  const menuIsOpenDevice = open && isDevice

  const show = () => setOpen(true)
  const hidden = () => setOpen(false)

  const sidebarMenu = useCallback(() => {
    if (typeof document === 'undefined') return null

    return document.getElementById('sidebar-menu')
  }, [])

  useEffect(() => {
    const menu = sidebarMenu()
    const body = document.body

    if (isDevice) {
      if (open && menu !== null) {
        menu.classList.add(...SIDEBAR_MENU_CLASSNAMES.show)
        body.classList.add('relative')
      } else {
        menu?.classList.add(...SIDEBAR_MENU_CLASSNAMES.hide)
        menu?.classList.remove(...SIDEBAR_MENU_CLASSNAMES.show)
        body.classList.remove('relative')
      }
    }

    return () => {
      menu?.classList.remove(...SIDEBAR_MENU_CLASSNAMES.show)
      menu?.classList.remove(...SIDEBAR_MENU_CLASSNAMES.hide)
      body.classList.remove('relative')
    }
  }, [open, sidebarMenu, isDevice])

  useEffect(() => {
    // const handleMenuClick = () => {
    //   console.log('Menu clicado')
    //   // Faça algo quando o menu for clicado
    // }

    const sidebar = sidebarMenu()
    const menuItems = sidebar?.querySelectorAll('.click-element')
    menuItems?.forEach((menuItem) => {
      menuItem.addEventListener('click', hidden)
    })

    return () => {
      menuItems?.forEach((menuItem) => {
        menuItem.removeEventListener('click', hidden)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {open && (
        <button className={`absolute left-[246px] top-3 z-[60]`} onClick={hidden}>
          <IoCloseOutline size={32} />
        </button>
      )}

      <button className={`mb-2 flex lg:hidden`} onClick={show}>
        <FiMenu size={32} />
      </button>

      {/* backdrop */}
      {open && <div onClick={hidden} className="absolute left-0 top-0 z-40 h-full w-full" />}
    </>
  )
}
