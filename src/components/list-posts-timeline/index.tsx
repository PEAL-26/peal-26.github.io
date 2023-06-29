'use client'

import { useState, useEffect } from 'react'

import Empty from '../empty'
import Loading from '../loading'
import Timeline from '../timeline'

import { PostProps } from '@/@types/post-type'
import { getAll } from '@/data/posts'

export default function ListPostsTimeline() {
    const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState<PostProps[]>([
    {
      id: '1',
      title: 'Task Timer',
      slug: 'task-timer',
      date: new Date(),
      resume:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec maximus justo. Aliquam vitae tristique ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: '2',
      title: 'Minhas Finanças',
      slug: 'minhas-finanças',
      date: new Date(),
      resume:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec maximus justo. Aliquam vitae tristique ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: '3',
      title: 'PEALSystems',
      slug: 'pealsystems',
      date: new Date(),
      resume:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec maximus justo. Aliquam vitae tristique ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: '4',
      title: 'Programador AO',
      slug: 'programador-ao',
      resume:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec maximus justo. Aliquam vitae tristique ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ])

  useEffect(() => {
    ;(async () => {
      setLoading(true)

      const response = await getAll()

      setPosts(response)
      setLoading(false)
    })()
  }, [])

  if (loading) return <Loading />
  if (posts.length===0) return <Empty />

  return (
    <div className="my-7 px-5">
      <ol className="relative border-l border-gray-200">
        {posts.map((data, index) => (
          <Timeline
            key={data.id}
            data={data}
            primeiro={index === 0}
            ultimo={index === posts.length - 1}
          />
        ))}
      </ol>
    </div>
  )
}
