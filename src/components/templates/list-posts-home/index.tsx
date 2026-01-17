'use client'
import Post from '../../post'

import { useServices } from '@/hooks/use-services'
import { StateComponent } from '@/components/state'
import { PostProps } from '@/@types/post-type'

interface Props {
  className?: string
}

export default function ListPostsHome(props: Props) {
  const services = useServices<PostProps[]>({
    service: {
      posts: 'getLastThree',
    },
    defaultValue: [],
  })

  return (
    <StateComponent {...services}>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {services.data?.map((item) => (
          <Post key={item.id} data={item} />
        ))}
      </div>
    </StateComponent>
  )
}
