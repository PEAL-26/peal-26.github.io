import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { remove as RemovePost } from '@/data/feedbacks'

export default function useFeedback() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
  const [isOpenFeedbackModal, setIsOpenFeedbackModal] = useState(false)

  const closeDeleteModal = () => setIsOpenDeleteModal(false)
  const openDeleteModal = () => setIsOpenDeleteModal(true)

  const closeFeedbackModal = () => setIsOpenFeedbackModal(false)
  const openFeedbackModal = () => setIsOpenFeedbackModal(true)

  const deleteFeedback = async (id: string | null) => {
    if (id) {
      try {
        setIsLoading(true)
        await RemovePost(id)

        router.refresh()
        closeDeleteModal()
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
  }

  return {
    isLoading,
    isOpenDeleteModal,
    isOpenFeedbackModal,
    closeDeleteModal,
    openDeleteModal,
    closeFeedbackModal,
    openFeedbackModal,
    deleteFeedback,
    setIsOpenDeleteModal,
    setIsOpenFeedbackModal,
  }
}
