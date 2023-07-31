import Link from 'next/link'
import { FaPlus } from 'react-icons/fa'

import ListPosts from '@/components/admin/list-posts'

export const metadata = {
  title: 'Listagem de posts | Admin',
  description: '',
}

export default function PostsAdminPage() {
  return (
    <div className="my-7 ">
      <Link
        className="mb-5 inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary/50 focus:outline-none focus:ring-4 focus:ring-primary/30"
        href="/admin/posts/register"
      >
        <FaPlus className="-ml-1 mr-2 h-5 w-5" />
        Novo post
      </Link>
      <ListPosts />
    </div>
  )
}
