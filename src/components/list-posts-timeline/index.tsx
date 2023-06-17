'use client'

import { useState } from 'react'

import Timeline from '../timeline'
import { PostsProps } from '@/@types/posts-type'

export default function ListPostsTimeline() {
  const [posts, setPosts] = useState<PostsProps[]>([
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
  return (
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
  )
}
