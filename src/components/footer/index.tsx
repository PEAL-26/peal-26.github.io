'use client'

import { usePathname } from 'next/navigation'

import Link from 'next/link'

export default function Footer() {
  const pathname = usePathname()
  const isAdmin = pathname.startsWith('/admin')
  const year = new Date().getFullYear()

  return (
    <div
      className={`${
        isAdmin ? 'mb-14' : ''
      } flex w-full flex-col-reverse items-center rounded-md bg-black p-4  lg:flex-row lg:justify-between`}
    >
      <span className="mt-4 text-center text-xs lg:mt-0">{`© ${year} PEAL. Todos os direitos reservados.`}</span>
      <div className="flex gap-3">
        <Link className="text-xs" href="/biografia">
          Biografia
        </Link>
        <Link className="text-xs" href="/projectos">
          Projectos
        </Link>
        <Link className="text-xs" href="/posts">
          Posts
        </Link>
        <Link className="text-xs" href="/hobbes">
          Hobbes
        </Link>
      </div>
    </div>
  )
}
