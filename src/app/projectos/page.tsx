import Header from '@/components/header'
import ListProjects from '@/components/list-projects'

export const metadata = {
  title: 'Projectos',
  description: '',
}

export default function Projectos() {
  return (
    <>
      <Header title="Projectos" />
      <ListProjects />
    </>
  )
}
