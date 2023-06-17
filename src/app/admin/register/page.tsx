import { cookies } from 'next/headers'

import Header from '@/components/header'
import Avatar from '@/components/avatar'
import Unauthenticated from '@/components/unauthenticated'
import ButtonLoginGithub from '@/components/button-login-github'

export const metadata = {
  title: 'Admin - Novo post',
  description: '',
}

export default function Register() {
   const isAuthenticated = cookies().has('token');

  return (
    <>
      <Header urlBtnBack="/admin" title="Novo Post" className="mb-5 justify-between">
        {isAuthenticated ? <Avatar /> : <ButtonLoginGithub />}
      </Header>

      {isAuthenticated ? <>{/* Formulário de inserção de pots */}</> : <Unauthenticated />}
    </>
  )
}
