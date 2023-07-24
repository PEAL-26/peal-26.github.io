'use client'
import { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import { getBySlug } from '@/data/posts'
import { PostProps } from '@/@types/post-type'

import Header from '../header'
import ArtigoContent from '../post-artigo-content'
import Loading from '../loading'

export default function PostArtigoComponent() {
  const [post, setPost] = useState<PostProps | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const searchParams = useSearchParams()

  const getArtigo = useCallback(async () => {
    setIsLoading(true)
    const search = searchParams.get('s')
    const artigo = await getBySlug(search || '')

    setPost(artigo)
    setIsLoading(false)
  }, [searchParams])

  useEffect(() => {
    getArtigo()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) return <Loading />

  return (
    post && (
      <>
        <time className="mb-1 text-sm font-normal leading-none text-neutral-500">
          {post?.date?.toString()}
        </time>
        <Header backButton title={post?.title} />
        <ArtigoContent post={post} />
      </>
    )
  )
}
