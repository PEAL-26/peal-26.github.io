'use client'

import Projecto from '../../projecto'
import { StateComponent } from '@/components/state'
import { useServices } from '@/hooks/use-services'

export default function ListProjects() {
  const services = useServices({
    service: { projects: 'getAll' },
    defaultValue: [],
  })

  return (
    <StateComponent {...services}>
      <div className="my-7 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services?.data?.map((value, index) => (
          <Projecto key={index} data={value} />
        ))}
      </div>
    </StateComponent>
  )
}
