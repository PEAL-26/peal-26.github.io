'use client'
import diacritics from 'diacritics'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { AiOutlineLoading } from 'react-icons/ai'

import { TipTap } from '@/components/tip-tap'
import { PostProps } from '@/@types/post-type'

import { getBySlug, insert as insertPost } from '@/data/posts'
import { createFile } from '@/data/files'

import validator from 'validator'
const { isEmpty } = validator

export default function RegisterPost() {
  const searchParams = useSearchParams()
  const [post, setPost] = useState<PostProps | null>(null)
  const [content, setContent] = useState('')
  const [isLoadingVerifySlug, setIsLoadingVerifySlug] = useState(false)
  const [whiteSaving, setWhiteSaving] = useState(false)

  const saveFile = async () => {
    if (!post || whiteSaving) return
    setWhiteSaving(true)

    try {
      const options = {
        fileName: post.slug || self.crypto.randomUUID(),
        type: 'md',
        content,
        folder: 'posts',
      }

      await createFile(options)
      await insertPost({
        ...post,
        file: `${options.fileName}.${options.type}`,
      })
    } catch (error) {
      console.error('erro ao salvar o arquivo', error)
      alert('Ocorreu um erro ao salvar o arquivo.')
    } finally {
      setWhiteSaving(false)
    }
  }

  const verifySlug = async () => {
    if (!post?.title || isEmpty(post.title)) return

    setIsLoadingVerifySlug(true)
    const title = diacritics.remove(post.title.toLowerCase().trim())
    const slug = title.replace(/[^a-zA-Z0-9]+/g, '-')

    let count = 0
    let verify = true
    let finalSlug = ''

    while (verify) {
      finalSlug = count === 0 ? slug : `${slug}-${count}`
      const existingPost = await getBySlug(finalSlug)
      count++

      if (!existingPost) {
        verify = false
      }
    }

    // const finalSlug = count === 0 ? slug : `${slug}-${count}`
    setPost({ ...post, slug: finalSlug })
    setIsLoadingVerifySlug(false)
  }

  useEffect(() => {
    const id = searchParams.get('id')
    if (!id) setPost(null)
  }, [searchParams])

  return (
    <div className="flex h-screen w-full gap-2">
      <div className="flex flex-col">
        <div className="mb-2 flex flex-col gap-1">
          <input
            type="text"
            name="title"
            value={post?.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            onBlur={verifySlug}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-black focus:border-primary focus:ring-primary"
          />
          <span className="flex items-center gap-1">
            {post?.slug}
            <AiOutlineLoading
              size={16}
              data-show={isLoadingVerifySlug}
              className="animate-spin fill-primary text-primary data-[show=false]:hidden"
            />
          </span>
        </div>

        <TipTap content={content} onChangeContent={setContent} />
      </div>
      <div className="w-[10%]">
        <button
          type="button"
          onClick={saveFile}
          data-saving={whiteSaving}
          disabled={whiteSaving}
          className="flex items-center justify-center gap-1 rounded-md bg-primary px-3 py-2 text-center text-white data-[saving=true]:cursor-wait"
        >
          Guardar
          <AiOutlineLoading
            size={16}
            data-show={whiteSaving}
            className="animate-spin fill-white text-white data-[show=false]:hidden"
          />
        </button>
      </div>
    </div>
  )
}
