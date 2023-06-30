'use client'

import { MouseEvent } from 'react'
import { signOut } from 'firebase/auth'
import { useRouter } from 'next/navigation'

import { auth } from '@/libs/firebase'
import { removeCookie } from '@/helpers/cookies'

export default function Logout() {
  const router = useRouter()

  const handleLogout = async (event: MouseEvent) => {
    event.preventDefault()
    await signOut(auth())
    removeCookie('user', { path: '/admin' })
    router.push('/admin')
  }

  return (
    <a href="#" onClick={handleLogout} className="text-sm text-red-500 hover:text-red-700 ">
      Sair
    </a>
  )
}
