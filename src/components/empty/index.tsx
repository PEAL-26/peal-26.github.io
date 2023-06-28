import { BsFillInboxFill } from 'react-icons/bs'

export default function Empty() {
  return (
    <div className="flex flex-col items-center justify-center rounded-md border border-white/50 p-10 text-center">
      <BsFillInboxFill size={128} />
      Não existe nenhum registo!
    </div>
  )
}
