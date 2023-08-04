'use client'
import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

import { getBySlug } from '@/data/posts'
import { PostProps } from '@/@types/post-type'
import { getContentFileByFilename } from '@/data/files'

import Header from '../header'
import Loading from '../loading'

export default function PostArtigoComponent() {
  const searchParams = useSearchParams()

  const [pageTitle, setPageTitle] = useState('PEAL')
  const [post, setPost] = useState<PostProps | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [htmlContent, setHtmlContent] = useState('')

  const getArtigo = useCallback(async () => {
    setIsLoading(true)

    try {
      const search = searchParams.get('s') || ''
      const artigo = await getBySlug(search)

      if (artigo && artigo.file) {
        const htmlString = await getContentFileByFilename('posts', artigo.file)
        console.log({ htmlString })

        setPost(artigo)
        setHtmlContent(htmlString)
        setPageTitle(`${artigo?.title || ''} | PEAL`)
      }
    } catch (error) {
      console.error('Erro ao buscar o conteúdo do Firebase Firestore:', error)
    } finally {
      setIsLoading(false)
    }
  }, [searchParams])

  useEffect(() => {
    ;(async () => {
      await getArtigo()
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    document.title = pageTitle
  }, [pageTitle])

  if (isLoading) return <Loading />

  return (
    post && (
      <>
        <time className="mb-1 text-sm font-normal leading-none text-neutral-500">
          {post?.created_at?.toString()}
        </time>
        <Header backButton title={post?.title} />
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </>
    )
  )
}
