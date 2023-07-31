'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import Empty from '@/components/empty'
import Loading from '@/components/loading'
import { FeedbackProps } from '@/@types/feedback-type'
import { getAll } from '@/data/feedbacks'
import { FeedbackAdmin } from './feedback'

export default function ListFeedbacksAdmin() {
  const [isLoading, setIsLoading] = useState(true)
  const [feedbacks, setFeedbacks] = useState<FeedbackProps[]>([])

  const getFeedbacks = async () => {
    try {
      setIsLoading(true)
      const response = await getAll()

      setFeedbacks(response)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getFeedbacks()
  }, [])

  if (isLoading) return <Loading />
  if (feedbacks.length === 0) return <Empty margin="mb-7" />

  return (
    <div className="flex w-full flex-col gap-2">
      {feedbacks.map((feedback) => (
        <FeedbackAdmin key={feedback.id} data={feedback} />
      ))}
    </div>
  )
}
