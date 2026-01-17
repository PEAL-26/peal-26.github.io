import { ReactNode } from 'react'
import Loading from './loading'
import Empty from './empty'
import { ErrorComponent } from './error'
import NotFound from './not-found'

interface Props<T> {
  isLoading: boolean
  isError: boolean
  isNotFound?: boolean
  data?: T[]
  children: ReactNode
  refetch?(): Promise<void>
}

export function StateComponent<T>(props: Props<T>) {
  const { children, isLoading, isError, isNotFound, data, refetch } = props

  if (isLoading && !isError && !isNotFound) {
    return <Loading height="min-h-full" className="min-h-full" />
  }

  if (!isLoading && isError && !isNotFound) {
    return <ErrorComponent className="min-h-full" onReload={refetch} />
  }

  if (!isLoading && !isError && isNotFound) {
    return <NotFound className="flex-1" />
  }

  if (!isLoading && !isError && !isNotFound && data?.length === 0) {
    return <Empty className="my-7 h-full flex-1" />
  }

  return <>{children}</>
}
