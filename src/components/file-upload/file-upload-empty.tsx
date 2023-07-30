import { FaRegImage } from 'react-icons/fa'

export function FileUploadEmpty() {
  return (
    <div className="flex flex-col items-center p-5">
      <FaRegImage size={120} className="cursor-pointer text-white/30" />
      <p className="text-center text-base leading-5 text-white">
        Arraste e solte sua imagem aqui, ou{' '}
        <span className="cursor-pointer font-bold text-primary">escolhe a imagem</span>
        {/*
        <br />
        <span className="text-xs">Suportados: JPG, PNG</span>
        */}
      </p>
    </div>
  )
}
