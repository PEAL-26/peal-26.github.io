import { ReactNode } from 'react'

import HeaderAdminTitle from '../header-admin-title'
import Header from '@/components/header'

interface Props {
  children?: ReactNode
}

export default function HeaderAdmin({ children }: Props) {
  return (
    <Header title={<HeaderAdminTitle />} className="justify-between">
      {children}
    </Header>
  )
}
