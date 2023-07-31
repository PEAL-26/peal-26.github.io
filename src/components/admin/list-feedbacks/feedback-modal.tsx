import { AiOutlineLoading } from 'react-icons/ai'
import Modal, { Body as ModalBody, Footer as ModalFooter } from '@/components/modal'

interface FeedbackDeleteModal {
  isOpen: boolean
  content: string
  date: Date

  close(): void
  onHide(state: boolean): void
}

export function FeedbackModal(props: FeedbackDeleteModal) {
  const { isOpen, onHide, close, content, date } = props

  return (
    <Modal isOpen={isOpen} onHide={onHide}>
      <ModalBody className="mb-4 mt-8 flex flex-col justify-center rounded-md p-2 text-center max-md:h-full max-md:w-full md:min-w-[300px]">
        <span>{content}</span>
        <time>{date.toDateString()}</time>
      </ModalBody>
    </Modal>
  )
}
