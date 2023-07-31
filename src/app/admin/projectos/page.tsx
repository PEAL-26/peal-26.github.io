import Link from 'next/link'
import { FaPlus } from 'react-icons/fa'

import ListProjects from '@/components/admin/list-projects'

export const metadata = {
  title: 'Listagem de projectos | Admin',
  description: '',
}

export default function ProjectosAdminPage() {
  return (
    <div className="my-7 ">
      <Link
        className="mb-5 inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary/50 focus:outline-none focus:ring-4 focus:ring-primary/30"
        href="/admin/projectos/register"
      >
        <FaPlus className="-ml-1 mr-2 h-5 w-5" />
        Novo projecto
      </Link>
      <ListProjects />
    </div>
  )
}
