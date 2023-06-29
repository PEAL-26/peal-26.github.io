import { ReactNode } from 'react'

import Header from '../header'
import HeaderAdminTitle from '../header-admin-title'

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
