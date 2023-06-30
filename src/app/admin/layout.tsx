import { cookies } from 'next/headers'

import Avatar from '@/components/avatar'
import HeaderAdmin from '@/components/header-admin'
import Unauthenticated from '@/components/unauthenticated'
import ButtonLoginGithub from '@/components/button-login-github'
import BottomNavigationAdmin from '@/components/bottom-navigation-admin'

interface Props {
  children: React.ReactNode
}

// TODO Remover em futuras actualizações, quando eu já não usar exportação estática
export const dynamic = 'force-static'

export default function RootLayout({ children }: Props) {
  const cookieStore = cookies()
  const isAuthenticated = cookieStore.has('user')

  return (
    <>
      <HeaderAdmin>{isAuthenticated ? <Avatar /> : <ButtonLoginGithub />}</HeaderAdmin>
      <div>{isAuthenticated ? <>{children}</> : <Unauthenticated />}</div>
      <BottomNavigationAdmin />
    </>
  )
}
