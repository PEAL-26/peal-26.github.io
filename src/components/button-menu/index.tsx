'use client'

import { useEffect, useState, useCallback } from 'react'
import { FiMenu } from 'react-icons/fi'

export default function ButtonMenu() {
  const [open, setOpen] = useState(false)

  const show = () => setOpen(true)
  const hidden = () => setOpen(false)

  const sidebarMenu = useCallback(() => {
    if (typeof document === 'undefined') return null

    return document.getElementById('sidebar-menu')
  }, [])

  useEffect(() => {
    const menu = sidebarMenu()

    if (open && menu !== null) {
      menu.classList.remove(
        'hidden',
        'fixed',
        '-left-[290px]',
        'min-h-screen',
        '-translate-x-[290px]',
      )
      menu.classList.add('absolute', 'h-full', 'left-0', 'translate-x-0')
      document.body.classList.add('relative')

      return
    }

    menu?.classList.add('hidden', 'fixed', 'min-h-screen', '-left-[290px]', '-translate-x-[290px]')
    menu?.classList.remove('absolute', 'h-full', 'left-0', 'translate-x-0')
    document?.body.classList.remove('relative')
  }, [open, sidebarMenu])

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
