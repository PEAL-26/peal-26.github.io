'use client'

import { useEffect, useState } from 'react'

import { ProjectoProps } from '@/@types/projecto-type'
import { getAll } from '@/data/projectos'
import Projecto from '../projecto'
import Loading from '../loading'
import Empty from '../empty'

export default function ListProjects() {
  const [loading, setLoading] = useState(true)
  const [projectos, setProjectos] = useState<ProjectoProps[]>([])

  useEffect(() => {
    ;(async () => {
      setLoading(true)

      const projectos = await getAll()

      setProjectos(projectos)
      setLoading(false)
    })()
    //TODO: Remover isso depois do teste
    console.log(process.env.NEXT_PUBLIC_TESTE2)
    console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY)
    console.log(process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID)
  }, [])

  if (loading) return <Loading />
  if (projectos.length === 0) return <Empty />

  return (
    <div className="my-7 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projectos.map((value, index) => (
        <Projecto key={index} data={value} />
      ))}
    </div>
  )
}
