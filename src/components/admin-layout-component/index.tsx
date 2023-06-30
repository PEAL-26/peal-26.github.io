'use client'

import Avatar from '@/components/avatar'
import HeaderAdmin from '@/components/header-admin'
import Unauthenticated from '@/components/unauthenticated'
import ButtonLoginGithub from '@/components/button-login-github'

import { getCookie } from '@/helpers/cookies'

interface Props {
  children: React.ReactNode
}

export default function AdminLayoutComponent({ children }: Props) {
  const userString = getCookie('user')

  const user = userString ? JSON.parse(userString) : null
  const isAuthenticated = !!user

  return (
    <>
      <HeaderAdmin>
        {isAuthenticated ? <Avatar name={user.name} src={user.avatar} /> : <ButtonLoginGithub />}
      </HeaderAdmin>
      <div>{isAuthenticated ? <>{children}</> : <Unauthenticated />}</div>
    </>
  )
}
