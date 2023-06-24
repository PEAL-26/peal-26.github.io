import Link from 'next/link'
// import { cookies } from 'next/headers'
import { FaPlus } from 'react-icons/fa'

import Header from '@/components/header'
import Avatar from '@/components/avatar'
import ListPosts from '@/components/list-posts'
import ButtonLoginGithub from '@/components/button-login-github'
import Unauthenticated from '@/components/unauthenticated'

export const metadata = {
  title: 'Admin - Listagem de posts',
  description: '',
}

export default function Admin() {
  // const cookieStore = cookies()
  const isAuthenticated = true //cookieStore.has('token');

  return (
    <>
      <Header
        title={
          <div className="flex flex-col ">
            Admin<span className="text-xs text-neutral-500">Listagem de posts</span>
          </div>
        }
        className="justify-between"
      >
        {isAuthenticated ? <Avatar /> : <ButtonLoginGithub />}
      </Header>

      <div>

      {isAuthenticated ? (
        <>
          <Link
            className="my-5 inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary/50 focus:outline-none focus:ring-4 focus:ring-primary/30"
            href="/admin/register"
          >
            <FaPlus className="-ml-1 mr-2 h-5 w-5" />
            Novo Post
          </Link>
          <ListPosts />
        </>
      ) : (
        <Unauthenticated />
      )}
        </div>
    </>
  )
}
