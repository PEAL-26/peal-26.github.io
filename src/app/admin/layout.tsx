import AdminLayoutComponent from '@/components/admin/layout'
import BottomNavigationAdmin from '@/components/bottom-navigation-admin'

interface Props {
  children: React.ReactNode
}

// // TODO Remover em futuras actualizações, quando eu já não usar exportação estática
// export const dynamic = 'force-static'

export default function AdminLayout({ children }: Props) {
  return (
    <>
      <AdminLayoutComponent>{children}</AdminLayoutComponent>
      <BottomNavigationAdmin />
    </>
  )
}
