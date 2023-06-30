'use server'

import { cookies } from 'next/headers'

interface Props {
  user: any
}

export async function setUserCookies({ user }: Props) {
  const cookieStore = cookies()
  const tempoExpiracao = 60 * 60 * 24 * 7

  cookieStore.set({
    name: 'user',
    value: JSON.stringify({ name: user.displayName, avatar: user.photoURL }),
    maxAge: tempoExpiracao,
    path: '/admin',
  })
}

export async function getUserCookies() {
  const cookieStore = cookies()
  const userCookie = cookieStore.get('user')

  if (userCookie) return JSON.parse(userCookie.value)

  return null
}

export async function deleteUserCookies() {
  const cookieStore = cookies()
  cookieStore.set({
    name: 'user',
    value: '',
    maxAge: 0,
    path: '/admin',
  })
}
