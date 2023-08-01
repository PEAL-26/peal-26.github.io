'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function BottomNavigationAdmin() {
  const pathname = usePathname()

  const classNamesState = (url: string, exact: boolean = false) => {
    const isPath = exact ? pathname === url : pathname.startsWith(url)
    const state = isPath ? 'active' : 'inactive'

    const stateButton = {
      active:
        'rounded-lg px-5 py-1.5 flex items-center justify-center text-xs bg-white font-medium text-black',
      inactive:
        'rounded-lg px-5 py-1.5 flex items-center justify-center text-xs font-medium text-white hover:bg-white/30',
    }[state]

    return stateButton
  }

  return (
    <div className="fixed bottom-0 left-0 z-40 w-full lg:p-0 lg:pl-[290px]">
      <div className="flex w-full justify-center">
        <div
          className="mx-auto my-2 grid max-w-xs grid-cols-4 gap-1 rounded-lg border border-gray  bg-black p-2 shadow"
          role="group"
        >
          <Link href="/admin" className={classNamesState('/admin', true)}>
            Dashboard
          </Link>
          <Link href="/admin/posts" className={classNamesState('/admin/posts')}>
            Posts
          </Link>
          <Link href="/admin/projectos" className={classNamesState('/admin/projectos')}>
            Projectos
          </Link>
          <Link href="/admin/feedbacks" className={classNamesState('/admin/feedbacks')}>
            Feedbacks
          </Link>
        </div>
      </div>
    </div>
  )
}
