import ListPostsHome from '@/components/list-posts-home'
import LogoHome from '@/components/logo-home'

export const metadata = {
  title: 'Página Inicial',
  description:
    'Bem-vindo ao meu site! Aqui você encontrará minha biografia, projetos e postagens relacionadas à programação. Explore meu trabalho e descubra minha paixão pela programação.',
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col my-7">
      <div className="mb-7 flex flex-col items-center gap-3">
        <LogoHome />
        <span className="text-center text-3xl font-bold">Pedro Edilásio Araújo Lopes</span>
      </div>
      <span className="mb-2 text-xl font-bold text-white">Últimos artigos</span>
      <ListPostsHome />
    </div>
  )
}
