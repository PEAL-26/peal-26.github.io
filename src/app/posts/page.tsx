'use client'

import { useState } from 'react'

import Header from '@/components/header'
import Timeline from '@/components/timeline'
import { PostsProps } from '@/@types/posts-type'

export default function Posts() {
  const [posts, setPosts] = useState<PostsProps[]>([
    { id: '1', title: 'Task Timer', slug: 'task-timer' },
    { id: '2', title: 'Minhas Finanças', slug: 'minhas-finanças' },
    { id: '3', title: 'PEALSystems', slug: 'pealsystems' },
    { id: '4', title: 'Programador AO', slug: 'programador-ao' },
  ])

  return (
    <div>
      <Header title="Posts" />

      <div className="p-5">
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
    </div>
  )
}
