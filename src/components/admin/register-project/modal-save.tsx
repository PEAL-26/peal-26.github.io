import Modal, { Body as ModalBody, Footer as ModalFooter } from '@/components/modal'

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
      <ModalBody className="mb-4 mt-8 flex flex-col justify-center rounded-md p-2 text-center max-md:h-full max-md:w-full md:min-w-[300px]">
        {/* TODO Procurar como fazer progressbar melhor */}
        <div
          className="border-1 radial-progress border-white bg-white text-primary"
          style={
            {
              // '--value': progress,
              // '--thickness': '4px',
            }
          }
        >
          {`${progress}%`}
        </div>
      </ModalBody>
    </Modal>
  )
}
