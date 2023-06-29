'use client'

import Image from 'next/image'

export default function ListProjectosAdmin() {
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex cursor-pointer items-center justify-between rounded-md border border-white/10 bg-black px-3 py-4 hover:bg-black/50">
        {/* Content */}
        <div className="flex ">
          <Image
            src={''}
            alt="user"
            width={100}
            height={100}
            className="mb-4 rounded-full border-4 border-gray object-cover"
          />
          <div className="flex flex-col">
            <h3 className="mb-4 text-lg font-bold text-white">Titulo da postagem</h3>
            <p className="line-clamp-3 font-normal text-white/75">Content</p>
          </div>
        </div>

        {/* Botões */}
        <div>Botões : alterar | remover</div>
      </div>
    </div>
  )
}
