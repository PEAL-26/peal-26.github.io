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

  const [post, setPost] = useState<Partial<DataInput> | null>(null)
  const [isLoadingVerifySlug, setIsLoadingVerifySlug] = useState(false)
  const [waitSaving, setWhiteSaving] = useState(false)
  const [isResuming, setIsResuming] = useState(false)
  const [errors, setErrors] = useState<string[]>([])

  const addValuesToProperty = (input: Partial<DataInput>) => {
    const { title, slug, resume, content } = input

    setPost((prevPost) => {
      const updatedPost = { ...prevPost }

      if (title) updatedPost.title = title
      if (slug) updatedPost.slug = slug
      if (resume) updatedPost.resume = resume
      if (content) updatedPost.content = content

      return updatedPost
    })
  }

  const validatePost = () => {
    if (!post) return false
    const { title, slug, content } = post

    if (!title || isEmpty(title)) setErrors([...errors, 'Titulo vazio.'])
    if (!slug || isEmpty(slug)) setErrors([...errors, 'Slug não gerado.'])
    if (!content || isEmpty(content)) setErrors([...errors, 'Conteúdo vazio.'])

    return errors.length === 0
  }

  const saveFile = async () => {
    if (!post || !validatePost() || waitSaving || isLoadingVerifySlug) return
    setWhiteSaving(true)

    try {
      const { title, slug, resume, content } = post

      const fileOption = {
        content: content || '',
        fileName: slug || self.crypto.randomUUID(),
        type: 'md',
        folder: 'posts',
      }
      await createFile(fileOption)

      const inputPost = {
        title: title || '',
        slug,
        resume,
        file: `${fileOption.fileName}.${fileOption.type}`,
      }
      await insertPost(inputPost)
    } catch (error) {
      console.error('Ocorreu um erro ao salvar o arquivo.', error)
      setErrors([...errors, 'Ocorreu um erro ao salvar o arquivo.'])
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

    setPost({ ...post, slug: finalSlug })
    setIsLoadingVerifySlug(false)
  }

  const resumeContent = async () => {
    if (!post || waitSaving || isResuming) return
    // Usar inteligência artificial para resumir o conteúdo

    setIsResuming(true)
  }

  useEffect(() => {
    const id = searchParams.get('id')
    if (!id) setPost(null)
  }, [searchParams])

  return {
    post,
    errors,
    isResuming,
    waitSaving,
    isLoadingVerifySlug,

    setPost,
    saveFile,
    verifySlug,
    resumeContent,
    setWhiteSaving,
    addValuesToProperty,
    setIsLoadingVerifySlug,
  }
}
