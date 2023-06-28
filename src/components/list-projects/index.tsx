'use client'

import { useState } from 'react'
import { ProjectoProps } from '@/@types/projecto-type'
import Projecto from '../projecto'

export default function ListProjects() {
  const [projectos, setProjectos] = useState<ProjectoProps[]>([
    {
      id: '1',
      name: 'Task Timer',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec maximus justo. Aliquam vitae tristique ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: '2',
      name: 'Minhas Finanças',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec maximus justo. Aliquam vitae tristique ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: '3',
      name: 'PEALSystems',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec maximus justo. Aliquam vitae tristique ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: '4',
      name: 'Programador AO',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec maximus justo. Aliquam vitae tristique ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ])
  return (
    <div className="my-7 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projectos.map((value, index) => (
        <Projecto key={index} data={value} />
      ))}
    </div>
  )
}
