import { AiOutlineLoading } from 'react-icons/ai'
import Modal, { Body as ModalBody, Footer as ModalFooter } from '@/components/modal'

interface FeedbackDeleteModal {
  isOpen: boolean
  isLoading: boolean
  onHide(state: boolean): void
  onDelete(): void
  close(): void
}

export function FeedbackDeleteModal(props: FeedbackDeleteModal) {
  const { isOpen, isLoading, onHide, onDelete, close } = props

  return (
    <Modal isOpen={isOpen} onHide={onHide} block={isLoading}>
      <ModalBody className="mb-4 mt-8 flex flex-col justify-center rounded-md p-2 text-center max-md:h-full max-md:w-full md:min-w-[300px]">
        <span>Deseja remover esse Post?</span>
      </ModalBody>
      <ModalFooter className="flex items-center justify-center gap-2 p-4">
        <button
          data-loading={isLoading}
          disabled={isLoading}
          onClick={() => onDelete()}
          className="flex items-center justify-center rounded-md bg-primary px-5 py-1 font-bold text-white data-[loading=true]:cursor-not-allowed data-[loading=false]:hover:bg-white/70"
        >
          <AiOutlineLoading
            data-loading={isLoading}
            className="animate-spin fill-white stroke-white data-[loading=true]:block data-[loading=false]:hidden"
            size={20}
          />
          {!isLoading && <>Sim</>}
        </button>
        <button
          data-loading={isLoading}
          disabled={isLoading}
          onClick={close}
          className="rounded-md bg-red-600 px-5 py-1 font-bold text-white data-[loading=true]:cursor-not-allowed data-[loading=false]:hover:bg-white/70"
        >
          Não
        </button>
      </ModalFooter>
    </Modal>
  )
}
