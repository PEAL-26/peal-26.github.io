'use client'

import Avatar from '@/components/avatar'
import HeaderAdmin from '@/components/admin/header-admin'
import Unauthenticated from '@/components/unauthenticated'
import ButtonLoginGithub from '@/components/admin/button-login-github'

import { getCookie } from '@/helpers/cookies'
import { useEffect, useState } from 'react'

interface Props {
  children: React.ReactNode
}

export default function AdminLayoutComponent({ children }: Props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const userCookie = getCookie('user')
  const user = userCookie ? JSON.parse(userCookie) : null

  useEffect(() => {
    setIsAuthenticated(!!user)
  }, [user])

  return (
    <>
      <HeaderAdmin>
        {isAuthenticated ? <Avatar name={user?.name} src={user?.avatar} /> : <ButtonLoginGithub />}
      </HeaderAdmin>
      <div>{isAuthenticated ? <>{children}</> : <Unauthenticated />}</div>
    </>
  )
}
