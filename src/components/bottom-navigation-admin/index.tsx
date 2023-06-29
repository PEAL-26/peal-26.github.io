'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function BottomNavigationAdmin() {
  const pathname = usePathname()

  const classNamesState = (url: string) => {
    const state = pathname.startsWith(url) ? 'active' : 'inactive'

    const stateButton = {
      active:
        'rounded-lg px-5 py-1.5 flex items-center justify-center text-xs bg-white font-medium text-black',
      inactive:
        'rounded-lg px-5 py-1.5 flex items-center justify-center text-xs font-medium text-white hover:bg-white/30',
    }[state]

    return stateButton
  }

  return (
    <div className="fixed bottom-0 left-0 z-40 w-screen border-t  border-black/80 bg-black pl-[290px] ">
      <div className="flex w-full justify-center">
        <div
          className="mx-auto my-2 grid max-w-xs grid-cols-3 gap-1 rounded-lg bg-gray p-1"
          role="group"
        >
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
