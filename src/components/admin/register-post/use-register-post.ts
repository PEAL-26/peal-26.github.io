'use client'
import validator from 'validator'
import diacritics from 'diacritics'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import { createFile } from '@/data/files'
import { getBySlug, insert as insertPost } from '@/data/posts'

interface DataInput {
  title: string
  slug: string
  resume: string
  content: string
}

export function useRegisterPost() {
  const { isEmpty } = validator
  const searchParams = useSearchParams()

  const [post, setPost] = useState<DataInput | null>(null)
  const [isLoadingVerifySlug, setIsLoadingVerifySlug] = useState(false)
  const [waitSaving, setWhiteSaving] = useState(false)
  const [isResuming, setIsResuming] = useState(false)

  const saveFile = async () => {
    if (!post || waitSaving || isLoadingVerifySlug) return
    setWhiteSaving(true)

    try {
      console.log(post)

      // const fileOption = {
      //   content: post.content,
      //   fileName: post.slug || self.crypto.randomUUID(),
      //   type: 'md',
      //   folder: 'posts',
      // }

      // const inputPost = {
      //   title: post.title,
      //   slug: post.slug,
      //   resume: post.resume,
      //   file: `${fileOption.fileName}.${fileOption.type}`,
      // }

      // await createFile(fileOption)
      // await insertPost(inputPost)
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

  const resumeContent = async () => {
    if (!post || waitSaving || isResuming) return
    // Usar inteligência artificial para resumir o conteúdo
  }

  useEffect(() => {
    const id = searchParams.get('id')
    if (!id) setPost(null)
  }, [searchParams])

  return {
    post,
    isLoadingVerifySlug,
    setIsLoadingVerifySlug,
    waitSaving,
    setWhiteSaving,
    saveFile,
    verifySlug,
    setPost,
    isResuming,
    resumeContent,
  }
}
