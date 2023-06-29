'use client'

import { usePathname } from 'next/navigation'
import { redirect } from 'next/navigation'

const TITLES = [
  { name: 'Listagem de posts', href: '/admin/posts' },
  { name: 'Novo posts', href: '/admin/posts/register' },
  { name: 'Listagem de projectos', href: '/admin/projectos' },
  { name: 'Novo projecto', href: '/admin/projectos/register' },
  { name: 'Feedbacks', href: '/admin/feedbacks' },
]

export default function HeaderAdminTitle() {
  const pathname = usePathname()
  if (pathname === '/admin') redirect('/admin/posts')

  const title = TITLES.find((value) => value.href === pathname)

  return (
    <div className="flex flex-col ">
      Admin<span className="text-xs text-neutral-500">{title?.name}</span>
    </div>
  )
}
