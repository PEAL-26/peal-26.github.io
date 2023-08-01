import { CircleProgressBar } from '@/components/circle-progress-bar'
import Modal, { Body as ModalBody, Footer as ModalFooter } from '@/components/modal'
import { AiFillCheckCircle } from 'react-icons/ai'
import { VscError } from 'react-icons/vsc'

import { STATE_PROCESS } from './use-register-project'
interface ModalSaveProps {
  progress: number
  state: STATE_PROCESS
  isOpen: boolean
  onHide(state: boolean): void
}

export function ModalProgress(props: ModalSaveProps) {
  const { progress, state, isOpen, onHide } = props

  const isBlocked = progress >= 0 && progress < 100 && state === 'PENDING'

  return (
    <Modal isOpen={isOpen} onHide={onHide} block={isBlocked}>
      <ModalBody className="flex flex-col justify-center rounded-md p-8 text-center">
        {state === 'ERROR' && <VscError className="text-red-600" size={50} />}
        {progress == 100 && state === 'SUCCESS' && (
          <AiFillCheckCircle className="text-primary" size={50} />
        )}
        {progress < 100 && state === 'PENDING' && <CircleProgressBar percentage={progress} />}
      </ModalBody>
    </Modal>
  )
}
