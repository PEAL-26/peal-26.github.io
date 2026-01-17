'use client'

import { PostProps } from '@/@types/post-type'
import { useServices } from '@/hooks/use-services'

import Timeline from '../../timeline'
import { StateComponent } from '../../state'

export default async function ListPostsTimeline() {
  const services = useServices<PostProps[]>({
    service: {
      posts: 'getAll',
    },
    defaultValue: [],
  })

  return (
    <StateComponent {...services}>
      <div className="my-7 px-5">
        <ol className="relative border-l border-gray-200">
          {services.data?.map((data, index) => (
            <Timeline
              key={data.id}
              data={data}
              primeiro={index === services?.data?.length - 1}
              ultimo={index === 0}
            />
          ))}
        </ol>
      </div>
    </StateComponent>
  )
}
