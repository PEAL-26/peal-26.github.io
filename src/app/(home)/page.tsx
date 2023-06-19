import ListPostsHome from '@/components/list-posts-home'
import LogoHome from '@/components/logo-home'

export default function Home() {
  return (
    <div className="flex flex-1 flex-col ">
      <div className="mb-7 flex flex-col items-center gap-3">
        <LogoHome />
        <h1 className="text-center text-3xl font-bold">Pedro Edilásio Araújo Lopes</h1>
      </div>
      <h3 className="mb-2 text-xl font-bold text-white">Últimos artigos</h3>
      <ListPostsHome />
    </div>
  )
}
