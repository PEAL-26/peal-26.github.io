import { BsFillInboxFill } from 'react-icons/bs'
import { twMerge } from 'tailwind-merge'

interface Props {
  height?: string
  margin?: string
  className?: string
}

export default function Empty(props: Props) {
  const { height = 'min-h-screen', margin = 'my-7', className } = props
  return (
    <div
      className={twMerge(
        'flex flex-col items-center justify-center rounded-md border border-white/50 p-10 text-center',
        height,
        margin,
        className,
      )}
    >
      <BsFillInboxFill size={128} />
      Não existe nenhum registo!
    </div>
  )
}
