'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import { dayjs } from '@/libs/dayjs'
import { PostProps } from '@/@types/post-type'
import { useServices } from '@/hooks/use-services'
import { StateComponent } from '@/components/state'

import Header from '../../header'
import { HtmlRenderer } from '../../html-render'

export default function PostArtigoComponent() {
  const searchParams = useSearchParams()
  const slug = searchParams.get('s') || ''

  const postsService = useServices<PostProps | null>({
    service: { posts: 'getBySlug' },
    defaultValue: null,
    inputs: slug,
  })

  const filesServices = useServices<string>({
    service: { files: 'getContentFileByFilename' },
    defaultValue: '',
    inputs: { folder: 'posts', fileName: postsService?.data?.file },
  })

  useEffect(() => {
    document.title = postsService.data?.title || 'Recurso não Encontrado | PEAL'
  }, [postsService])

  return (
    <StateComponent
      refetch={postsService.refetch}
      isLoading={postsService.isLoading || filesServices.isLoading}
      isError={postsService.isError || filesServices.isError}
      isNotFound={!postsService.data || !filesServices.data}
    >
      {postsService.data && filesServices.data && (
        <>
          <time className="mb-1 text-sm font-normal leading-none text-neutral-500">
            {dayjs.duration(new Date(postsService.data.created_at).getTime(), 'hours').humanize()}
            {/* {formatarData(post.created_at)} */}
          </time>
          <Header backButton title={postsService.data.title} />
          <HtmlRenderer html={filesServices.data} />
        </>
      )}
    </StateComponent>
  )
}
