'use client'

import { useRouter, usePathname } from 'next/navigation'

import { BsArrowLeftShort } from 'react-icons/bs'

interface Props {
  backButton?: boolean
}

export default function NavigationBack({ backButton }: Props) {
  const router = useRouter()
  const pathname = usePathname()

  const showButton =
    pathname.startsWith('/admin/posts/register') || pathname.startsWith('/admin/projectos/register')

  const handleBack = () => {
    router.back()
  }

  return (
    <>
      {(backButton || showButton) && (
        <button
          onClick={handleBack}
          className="inline-flex items-center rounded-full border border-neutral-500 text-neutral-500 hover:border-neutral-400 hover:text-neutral-400 focus:outline-none "
        >
          <BsArrowLeftShort size={32} />
        </button>
      )}
    </>
  )
}
