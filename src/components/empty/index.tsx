import { BsFillInboxFill } from 'react-icons/bs'

interface Props {
  height?: string
  margin?: string
}

export default function Empty({ height = 'min-h-screen', margin = 'my-7' }: Props) {
  return (
    <div
      className={`${height} ${margin} flex flex-col items-center justify-center rounded-md border border-white/50 p-10 text-center`}
    >
      <BsFillInboxFill size={128} />
      Não existe nenhum registo!
    </div>
  )
}
