import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AiOutlineLoading } from 'react-icons/ai'
import { BiEdit, BiTrashAlt, BiShareAlt } from 'react-icons/bi'

import { PostProps } from '@/@types/post-type'
import { remove as RemovePost } from '@/data/posts'
import Modal, { Body as ModalBody, Footer as ModalFooter } from '@/components/modal'
import { ErrorPage } from '@/components/error-page'

interface PostAminProps {
  data: PostProps
}

export function PostAdmin({ data }: PostAminProps) {
  const router = useRouter()
  const url = `/admin/posts/register?id=${data.id}`
  const [isLoading, setIsLoading] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState(false)

  const closeModal = () => setIsOpenModal(false)
  const openModal = () => setIsOpenModal(true)

  const deletePost = async () => {
    if (data.id) {
      try {
        setIsLoading(true)
        await RemovePost(data.id)

        router.refresh()
        closeModal()
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <>
      <div
        onClick={(e) => {
          router.push(url)
        }}
        className="flex cursor-pointer items-center justify-between rounded-md border border-white/10 bg-black px-3 py-4 hover:bg-black/50"
      >
        {/* Content */}
        <div className="flex flex-1 flex-col ">
          <time className="mb-1 text-xs font-normal leading-none text-neutral-500">
            {data.created_at.toDateString()}
          </time>
          <h3 className="mb-4 text-lg font-bold text-white">{data.title}</h3>

          <p className="line-clamp-3 font-normal text-white/75">{data.resume}</p>
        </div>

        <div
          className="flex gap-2 p-2 text-lg max-md:flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <Link className="p-1 transition-all hover:text-primary" href={url}>
            <BiEdit size={24} />
          </Link>
          <button className="p-1 transition-all hover:text-primary" onClick={openModal}>
            <BiTrashAlt size={24} />
          </button>
          <button className="p-1 transition-all hover:text-primary">
            <BiShareAlt size={24} />
          </button>
        </div>
      </div>

      <Modal isOpen={isOpenModal} onHide={setIsOpenModal} block={isLoading}>
        <ModalBody className="mb-4 mt-8 flex flex-col justify-center rounded-md p-2 text-center max-md:h-full max-md:w-full md:min-w-[300px]">
          <span>Deseja remover esse Post?</span>
        </ModalBody>
        <ModalFooter className="flex items-center justify-center gap-2 p-4">
          <button
            data-loading={isLoading}
            disabled={isLoading}
            onClick={deletePost}
            className="flex items-center justify-center rounded-md bg-primary px-5 py-1 font-bold text-white data-[loading=true]:cursor-not-allowed data-[loading=false]:hover:bg-white/70"
          >
            <AiOutlineLoading
              data-loading={isLoading}
              className="animate-spin fill-white stroke-white data-[loading=true]:block data-[loading=false]:hidden"
              size={20}
            />
            {!isLoading && <>Sim</>}
          </button>
          <button
            data-loading={isLoading}
            disabled={isLoading}
            onClick={closeModal}
            className="rounded-md bg-red-600 px-5 py-1 font-bold text-white data-[loading=true]:cursor-not-allowed data-[loading=false]:hover:bg-white/70"
          >
            Não
          </button>
        </ModalFooter>
      </Modal>
    </>
  )
}
