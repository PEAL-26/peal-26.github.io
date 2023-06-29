// import { cookies } from 'next/headers'

import Avatar from '@/components/avatar'
import HeaderAdmin from '@/components/header-admin'
import Unauthenticated from '@/components/unauthenticated'
import ButtonLoginGithub from '@/components/button-login-github'
import BottomNavigationAdmin from '@/components/bottom-navigation-admin'

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  // const cookieStore = cookies()
  const isAuthenticated = true //cookieStore.has('token');

  return (
    <>
      <HeaderAdmin>{isAuthenticated ? <Avatar /> : <ButtonLoginGithub />}</HeaderAdmin>
      <div>{isAuthenticated ? <>{children}</> : <Unauthenticated />}</div>
      <BottomNavigationAdmin />
    </>
  )
}
