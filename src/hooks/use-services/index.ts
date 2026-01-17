import { useFirebaseContext } from '@/contexts/firebase'
import feedbackFN, { FeedbacksResult } from './functions/feedbacks'
import filesFN, { FilesResult } from './functions/files'
import postsFN, { PostsResult } from './functions/posts'
import projectsFN, { ProjectsResult } from './functions/projects'
import { useEffect, useState } from 'react'

type ServiceFeedback = { feedbacks: keyof FeedbacksResult }
type ServicePosts = { posts: keyof PostsResult }
type ServiceFiles = { files: keyof FilesResult }
type ServiceProjects = { projects: keyof ProjectsResult }

type ServiceTypes = ServiceFeedback | ServicePosts | ServiceFiles | ServiceProjects
type ServiceResponse = FeedbacksResult | PostsResult | FilesResult | ProjectsResult

type Props<T extends any = any> = {
  service: ServiceTypes
  defaultValue: T
  inputs?: any
}

const REQUIRE_DATABASE = ['feedbacks', 'posts', 'projects']
const REQUIRE_STORAGE = ['files']

export function useServices<T extends any = any>(props: Props<T>) {
  const { service, defaultValue, inputs } = props
  const { getDb, getStorage } = useFirebaseContext()

  const [isLoading, setIsLoading] = useState(true)
  const [isFetching, setIsFetching] = useState(false)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState<T>(() => defaultValue)

  const getService = async (service: string) => {
    if (REQUIRE_DATABASE.includes(service)) {
      const db = await getDb()

      if (service === 'feedbacks') {
        return feedbackFN(db)
      }
      if (service === 'posts') {
        return postsFN(db)
      }
      if (service === 'projects') {
        return projectsFN(db)
      }
    }

    if (REQUIRE_STORAGE.includes(service)) {
      const storage = await getStorage()
      if (service === 'files') {
        return filesFN(storage)
      }
    }

    return null
  }

  const loading = async () => {
    if (isFetching) return

    try {
      setIsLoading(true)
      setIsError(false)
      setIsFetching(true)

      let _data = defaultValue
      const [property, value] = Object.entries(service)[0]
      const _service = await getService(property)
      const response = await (_service as unknown as Record<string, Function>)?.[value]?.(inputs)
      _data = response || defaultValue

      if (!_data) {
        setData(_data)
      }
    } catch (error) {
      setIsError(true)
      console.log(error)
    } finally {
      setIsFetching(false)
      setIsLoading(false)
    }
  }

  const refetch = async () => {
    await loading()
  }

  useEffect(() => {
    loading()
  }, [service, defaultValue])

  return {
    isLoading,
    isError,
    data,
    refetch,
  }
}
