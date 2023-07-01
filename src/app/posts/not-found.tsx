import Link from 'next/link'

export default function NotFound() {
  return (
    <div className={`flex h-screen w-full items-center justify-center text-center`}>
      <div className="flex items-center justify-center">
        <span className="mr-5 border-r border-white py-3 pr-5 text-3xl font-bold">404</span>
        <div className="flex flex-col items-start justify-start">
          <h2 className="mb-1">Artigo não Encontrado!</h2>
          <span className="mb-1 text-sm">Não foi possível encontrar o artigo solicitado</span>
          <span>
            Ver{' '}
            <Link href="/posts" className="">
              todos posts
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}
