'use client'

import { useState, useEffect } from 'react'

import Empty from '../empty'
import Loading from '../loading'
import Timeline from '../timeline'

import { PostProps } from '@/@types/post-type'
import { getAll } from '@/data/posts'

export default function ListPostsTimeline() {
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState<PostProps[]>([])

  useEffect(() => {
    ;(async () => {
      setLoading(true)

      const response = await getAll()

      setPosts(response)
      setLoading(false)
    })()
  }, [])

  if (loading) return <Loading />
  if (posts.length === 0) return <Empty />

  return (
    <div className="my-7 px-5">
      <ol className="relative border-l border-gray-200">
        {posts.map((data, index) => (
          <Timeline
            key={data.id}
            data={data}
            primeiro={index === posts.length - 1}
            ultimo={index === 0}
          />
        ))}
      </ol>
    </div>
  )
}
