import ArtigoContent from '@/components/artigo-content'
import Header from '@/components/header'
import NotFound from '@/components/not-found'

import { getBySlug } from '@/data/posts'
import { notFound } from 'next/navigation'

interface Props {
  searchParams: { s: string }
}

export async function generateMetadata({ searchParams }: Props) {
  if (!searchParams.s) notFound()
  const post = await getBySlug(searchParams.s)
  console.log('generateMetadata', post)
  if (!post) return <NotFound />

  return { title: post.title }
}

// TODO Remover em futuras actualizações, quando eu já não usar exportação estática
export const dynamic = 'force-static'

export default async function Artigo({ searchParams }: Props) {
  if (!searchParams.s) return <NotFound />

  const post = await getBySlug(searchParams.s)
  console.log('Artigo', post)
  if (!post) return <NotFound />

  return (
    <div>
      <time className="mb-1 text-sm font-normal leading-none text-neutral-500">
        {post?.date?.toString()}
      </time>
      <Header backButton title={post?.title} />
      <ArtigoContent post={post} />
    </div>
  )
}
