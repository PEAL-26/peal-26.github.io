'use client'

import { useState } from 'react'

import Header from '@/components/header'
import Projecto from '@/components/projecto'

import { ProjectoProps } from '@/@types/projecto-type'

export default function Projectos() {
  const [projectos, setProjectos] = useState<ProjectoProps[]>([
    { id: '1', name: 'Task Timer' },
    { id: '2', name: 'Minhas Finanças' },
    { id: '3', name: 'PEALSystems' },
    { id: '4', name: 'Programador AO' },
  ])

  return (
    <div>
      <Header title="Projectos" />
      <div className="grid grid-cols-2 gap-4 py-5 md:grid-cols-3">
        {projectos.map((value, index) => (
          <Projecto key={index} data={value} />
        ))}
      </div>
    </div>
  )
}
