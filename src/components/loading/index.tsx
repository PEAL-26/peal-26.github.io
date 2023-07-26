import { AiOutlineLoading } from 'react-icons/ai'

interface Props {
  height?: string
}

export default function Loading({ height = 'min-h-screen' }: Props) {
  return (
    <div role="status" className={`${height} flex w-full items-center justify-center`}>
      <AiOutlineLoading className="mr-2 h-20 w-20 animate-spin fill-white text-gray " />
      <span className="sr-only">Loading...</span>
    </div>
  )
}
