import { BiTrashAlt } from 'react-icons/bi'

import useFeedback from '@/hooks/use-feedback'
import { FeedbackModal } from './feedback-modal'
import { FeedbackProps } from '@/@types/feedback-type'
import { FeedbackDeleteModal } from './feedback-delete-modal'
import ReaccaoEmoji, { EmojiType } from '@/components/reaccao-emoji'

interface PostAminProps {
  data: FeedbackProps
}

const getEmoji = (classification: number): EmojiType => {
  const EMOJI: Record<number, EmojiType> = {
    0: 'muito-mau',
    1: 'mau',
    2: 'bom',
    3: 'muito-bom',
  }

  return EMOJI[classification]
}

export function FeedbackAdmin({ data }: PostAminProps) {
  const {
    isLoading,
    isOpenDeleteModal,
    isOpenFeedbackModal,
    closeDeleteModal,
    closeFeedbackModal,
    openDeleteModal,
    openFeedbackModal,
    deleteFeedback,
    setIsOpenDeleteModal,
    setIsOpenFeedbackModal,
  } = useFeedback()

  return (
    <>
      <div
        onClick={openFeedbackModal}
        className="flex cursor-pointer items-center justify-between rounded-md border border-white/10 bg-black px-3 py-4 hover:bg-black/50"
      >
        <div className='flex flex-1 gap-2'>
          <ReaccaoEmoji emoji={getEmoji(data.classification)} activeState />

          <div className="flex flex-1 flex-col ">
            <p className="line-clamp-2 font-normal text-white/75">{data.message}</p>
            <time className="mb-1 text-xs font-normal leading-none text-neutral-500">
              {data.created_at?.toDateString()}
            </time>
          </div>
        </div>
        <div
          className="flex gap-2 p-2 text-lg max-md:flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="p-1 transition-all hover:text-primary" onClick={openDeleteModal}>
            <BiTrashAlt size={24} />
          </button>
        </div>
      </div>

      <FeedbackDeleteModal
        isLoading={isLoading}
        close={closeDeleteModal}
        isOpen={isOpenDeleteModal}
        onHide={setIsOpenDeleteModal}
        onDelete={() => deleteFeedback(data.id || '')}
      />

      <FeedbackModal
        close={closeFeedbackModal}
        isOpen={isOpenFeedbackModal}
        onHide={setIsOpenFeedbackModal}
        content={data.message}
        date={data.created_at}
      />
    </>
  )
}
