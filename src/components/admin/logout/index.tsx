'use client'
import { signOut } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { MouseEvent, useState } from 'react'
import { AiOutlineLoading } from 'react-icons/ai'

import { auth } from '@/libs/firebase'
import { removeCookie } from '@/helpers/cookies'

export default function Logout() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogout = async (event: MouseEvent) => {
    event.preventDefault()
    setIsLoading(true)

    await signOut(auth)
    removeCookie('user', { path: '/admin' })

    setIsLoading(false)
    router.refresh()
  }

  if (isLoading)
    return <AiOutlineLoading size={16} className="mr-2 h-4 w-4 animate-spin fill-white" />

  return (
    <a href="#sair" onClick={handleLogout} className="text-sm text-red-500 hover:text-red-700 ">
      Sair
    </a>
  )
}
