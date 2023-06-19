'use client'

import { useState } from 'react'

import Post from '../post'
import { PostProps } from '@/@types/post-type'

interface Props {
  className?: string
}

export default function ListPostsHome(props: Props) {
  const [lastPosts, setLastPosts] = useState<PostProps[]>([
    {
      id: '1',
      slug: 'blbla',
      title: 'blabla',
      date: new Date(),
      resume:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec maximus justo. Aliquam vitae tristique ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: '2',
      slug: 'blbla',
      title: 'blabla',
      date: new Date(),
      resume:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec maximus justo. Aliquam vitae tristique ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: '3',
      slug: 'blbla',
      title: 'blabla',
      date: new Date(),
      resume:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec maximus justo. Aliquam vitae tristique ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ])

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      {lastPosts.map((data, index) => (
        <Post key={data.id} data={data} />
      ))}
    </div>
  )
}
