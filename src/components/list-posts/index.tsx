interface Props {
  className?: string
}

export default function ListPosts(props: Props) {
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex cursor-pointer items-center justify-between rounded-md border border-white/10 bg-black px-3 py-4 hover:bg-black/50">
        {/* Content */}
        <div className="flex flex-col">
          <time className="mb-1 text-xs font-normal leading-none text-neutral-500">
            {new Date().toString()}
          </time>
          <h3 className="mb-4 text-lg font-bold text-white">Titulo da postagem</h3>

          <p className="line-clamp-3 font-normal text-white/75">Content</p>
        </div>

        {/* Botões */}
        <div>Botões : alterar | remover</div>
      </div>
    </div>
  )
}
