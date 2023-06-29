import Link from 'next/link'
import { FaPlus } from 'react-icons/fa'

import ListPosts from '@/components/list-posts'

export default function PostsAdminPage() {
  return (
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
  )
}
