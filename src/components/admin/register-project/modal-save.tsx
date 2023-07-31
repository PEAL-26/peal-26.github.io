import { CircleProgressBar } from '@/components/circle-progress-bar'
import Modal, { Body as ModalBody, Footer as ModalFooter } from '@/components/modal'
import { AiFillCheckCircle } from 'react-icons/ai'

interface ModalSaveProps {
  progress: number
  success: boolean
  isOpen: boolean
  onHide(state: boolean): void
}

export function ModalSave(props: ModalSaveProps) {
  const { progress, success, isOpen, onHide } = props

  const isBlocked = progress >= 0 && progress < 100 && !success

  return (
    <Modal isOpen={isOpen} onHide={onHide} block={isBlocked}>
      <ModalBody className="flex flex-col justify-center rounded-md p-8 text-center">
        {progress == 100 && success && <AiFillCheckCircle className="text-primary" size={50} />}
        {!(progress == 100 && success) && <CircleProgressBar percentage={progress} />}
      </ModalBody>
    </Modal>
  )
}
