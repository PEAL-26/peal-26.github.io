import Image from 'next/image'
import { BiTrashAlt } from 'react-icons/bi'

interface Props {
  files?: any[]
  onRemove?(): void
}

export function FileUploadPreview({ files, onRemove }: Props) {
  if (!files || files.length === 0) {
    return null
  }

  return (
    <>
      <div className="relative h-full w-full">
        <Image
          alt={''}
          src={files[0].preview}
          loading="lazy"
          className="h-full w-full rounded-md object-cover"
          fill
          onLoad={() => {
            URL.revokeObjectURL(files[0].preview)
          }}
        />
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation()
          onRemove && onRemove()
        }}
        className="absolute right-4 top-4 cursor-pointer rounded-full bg-red-600 p-3 text-white hover:bg-red-800 group-hover:visible lg:invisible"
      >
        <BiTrashAlt name="Trash" size={20} />
      </button>
    </>
  )
}
