import { AiOutlineLoading } from 'react-icons/ai'
import { twMerge } from 'tailwind-merge'

interface Props {
  height?: string
  className?: string
}

export default function Loading(props: Props) {
  const { height = 'min-h-screen', className } = props
  return (
    <div
      role="status"
      className={twMerge('flex w-full flex-1 items-center justify-center', height, className)}
    >
      <AiOutlineLoading className="mr-2 h-20 w-20 animate-spin fill-white text-gray " />
      <span className="sr-only">Loading...</span>
    </div>
  )
}
