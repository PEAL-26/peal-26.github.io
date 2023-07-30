'use client'
import { useEffect, useState } from 'react'

import Empty from '@/components/empty'
import Loading from '@/components/loading'
import { ProjectProps } from '@/@types/project-type'
import { getAll } from '@/data/projects'
import { ProjectAdmin } from './project'
import { ErrorPage } from '@/components/error-page'

export default function ListProjectsAdmin() {
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [projects, setProjects] = useState<ProjectProps[]>([])

  const getProjects = async () => {
    try {
      setIsLoading(true)
      const response = await getAll()
      setProjects(response)
    } catch (error) {
      console.error(error)
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getProjects()
  }, [])

  if (isLoading) return <Loading />
  if (isError) return <ErrorPage />
  if (projects.length === 0) return <Empty margin="mb-7" />

  return (
    <div className="flex w-full flex-col gap-2">
      {projects.map((project) => (
        <ProjectAdmin key={project.id} data={project} />
      ))}
    </div>
  )
}
