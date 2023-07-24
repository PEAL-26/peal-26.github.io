import PostArtigoComponent from '@/components/post-artigo-component'

export const metadata = {
  title: 'Artigo',
  description: '',
}

// TODO Remover em futuras actualizações, quando eu já não usar exportação estática
// export const dynamic = 'force-static'

export default function Artigo() {
  return (
    <PostArtigoComponent />
  )
}
