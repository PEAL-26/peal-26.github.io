import PostArtigoComponent from '@/components/post-artigo-component'
import { Metadata } from 'next'

import { getBySlug } from '@/data/posts'

type Props = {
  searchParams: { s: string | undefined }
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const post = await getBySlug(searchParams.s || '')

  return {
    title: post?.title,
    description: post?.resume,
  }
}

// TODO Remover em futuras actualizações, quando eu já não usar exportação estática
export const dynamic = 'force-static'

export default function Artigo() {
  return <PostArtigoComponent />
}
