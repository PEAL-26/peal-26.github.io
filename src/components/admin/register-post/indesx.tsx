'use client'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import diacritics from 'diacritics'

import { uploadPost } from '@/data/upload'
import NotFound from '@/components/not-found'
import { PostProps } from '@/@types/post-type'
import { getBySlug } from '@/data/posts'

import validator from 'validator'
const { isEmpty } = validator

export default function RegisterPost() {
  const searchParams = useSearchParams()
  const [post, setPost] = useState<PostProps | null>(null)
  const [existsSlug, setExistsSlug] = useState(false)

  const saveFile = async () => {
    const content = 'qualquer coisa'

    try {
      await uploadPost('qualquer-coisa', content)
    } catch (error) {
      console.error('erro ao salvar o arquivo', error)
      alert('Ocorreu um erro ao salvar o arquivo.')
    }
  }

  const verifySlug = async () => {
    if (!post?.title || isEmpty(post.title)) return

    setExistsSlug(false)
    const title = diacritics.remove(post.title.toLowerCase().trim())
    const slug = title.replace(/[^a-zA-Z0-9]+/g, '-')

    const _post = await getBySlug(slug)
    if (_post) {
      setExistsSlug(true)
      return
    }

    setPost({ ...post, slug })
  }

  useEffect(() => {
    const id = searchParams.get('id')
    if (!id) setPost(null)
  }, [searchParams])

  return (
    <div className="flex w-full flex-col gap-2">
      <input
        type="text"
        name="title"
        value={post?.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        onBlur={verifySlug}
      />
      <span data-error={existsSlug} className="data-">
        {post?.slug}
      </span>
    </div>
  )
}
