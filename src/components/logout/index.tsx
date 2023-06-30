'use client'

import { MouseEvent } from 'react'
import { signOut } from 'firebase/auth'

import { auth } from '@/libs/firebase'
import { deleteUserCookies } from '@/actions/auth'

export default function Logout() {
  const handleLogout = async (event: MouseEvent) => {
    event.preventDefault()
    await signOut(auth())
    deleteUserCookies()
  }

  return (
    <a href="#" onClick={handleLogout} className="text-sm text-red-500 hover:text-red-700 ">
      Sair
    </a>
  )
}
