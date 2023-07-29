'use client'

import { usePathname, useParams, useSearchParams } from 'next/navigation'
import { redirect } from 'next/navigation'

const TITLES = [
  { name: 'Listagem de posts', href: '/admin/posts' },
  { name: 'Novo posts', href: '/admin/posts/register' },
  { name: 'Listagem de projectos', href: '/admin/projectos' },
  { name: 'Novo projecto', href: '/admin/projectos/register' },
  { name: 'Feedbacks', href: '/admin/feedbacks' },
]

const getTitle = (pathname: string, id: string | null) => {
  const title = TITLES.find((value) => value.href === pathname)?.name

  if (id) {
    if (pathname.startsWith('/admin/posts/register')) {
      return 'Alterar post'
    }

    if (pathname.startsWith('/admin/projectos/register')) {
      return 'Alterar projecto'
    }
  }

  return title
}

export default function HeaderAdminTitle() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  if (pathname === '/admin') redirect('/admin/posts')
  let title = getTitle(pathname, id)

  return (
    <div className="flex flex-col ">
      Admin<span className="text-xs text-neutral-500">{title}</span>
    </div>
  )
}
