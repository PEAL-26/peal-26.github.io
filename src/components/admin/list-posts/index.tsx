'use client'
import { PostProps } from '@/@types/post-type'
import { getAll } from '@/data/posts'
import { useEffect, useState } from 'react'
import { PostAdmin } from './post'
import Loading from '@/components/loading'
import Empty from '@/components/empty'

interface Props {
  className?: string
}

export default function ListPosts(props: Props) {
  const [isLoading, setIsLoading] = useState(true)
  const [posts, setPosts] = useState<PostProps[]>([])

  const getPosts = async () => {
    setIsLoading(true)
    const response = await getAll()
    setPosts(response)
    setIsLoading(false)
  }

  useEffect(() => {
    getPosts()
  }, [])

  if (isLoading) return <Loading />
  if (posts.length === 0) return <Empty margin="mb-7" />

  return (
    <div className="flex w-full flex-col gap-2">
      {posts.map((post) => (
        <PostAdmin key={post.id} data={post} />
      ))}
    </div>
  )
}
