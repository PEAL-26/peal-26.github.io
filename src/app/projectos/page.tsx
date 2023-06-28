import Header from '@/components/header'
import ListProjects from '@/components/list-projects'

export const metadata = {
  title: 'Projectos',
  description:
    'Explore meus projetos que demonstram minhas habilidades em programação. Descubra detalhes sobre cada projeto, incluindo suas características, tecnologias usadas e os desafios enfrentados durante o desenvolvimento. Inspire-se e conheça meu trabalho.',
}

export default function Projectos() {
  return (
    <>
      <Header title="Projectos" />
      <ListProjects />
    </>
  )
}
