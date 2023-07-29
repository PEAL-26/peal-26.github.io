'use client'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import { uploadPost } from '@/data/upload'
import NotFound from '@/components/not-found'
import { PostProps } from '@/@types/post-type'

export default function Register() {
  const searchParams = useSearchParams()
  const [post, setPost] = useState<PostProps | null>(null)

  const saveFile = async () => {
    const content = 'qualquer coisa'

    try {
      await uploadPost('qualquer-coisa', content)
    } catch (error) {
      console.error('erro ao salvar o arquivo', error)
      alert('Ocorreu um erro ao salvar o arquivo.')
    }
  }

  useEffect(() => {
    const id = searchParams.get('id')
    if (!id) setPost(null)
  }, [searchParams])

  if (!post) return <NotFound />

  return <div className="flex w-full flex-col gap-2"></div>
}
