'use client'
import { useEffect, useState } from 'react'

import Post from '../post'
import Empty from '../empty'
import Loading from '../loading'

import { PostProps } from '@/@types/post-type'
import { getLastThree, getById } from '@/data/posts'

interface Props {
  className?: string
}

export default function ListPostsHome(props: Props) {
  const [loading, setLoading] = useState(true)
  const [lastPosts, setLastPosts] = useState<PostProps[]>([])

  useEffect(() => {
    ;(async () => {
      setLoading(true)

      const posts = await getLastThree()

      setLastPosts(posts)
      setLoading(false)
    })()
  }, [])

  if (loading) return <Loading height="min-h-full" />
  if (lastPosts.length === 0) return <Empty height="h-full" margin="my-0" />

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      {lastPosts.map((data, index) => (
        <Post key={data.id} data={data} />
      ))}
    </div>
  )
}
