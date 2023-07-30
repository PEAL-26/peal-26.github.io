import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { BiEdit, BiTrashAlt } from 'react-icons/bi'

import { remove as RemoveFeedback } from '@/data/feedbacks'
import { ProjectProps } from '@/@types/project-type'
import { ProjectDeleteModal } from './project-delete-modal'

interface PostAminProps {
  data: ProjectProps
}

export function ProjectAdmin({ data }: PostAminProps) {
  const router = useRouter()
  const url = `/admin/projectos/register?id=${data.id}&state=alter`
  const [isLoading, setIsLoading] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState(false)

  const closeModal = () => setIsOpenModal(false)
  const openModal = () => setIsOpenModal(true)

  const deleteFeedback = async () => {
    if (data.id) {
      try {
        setIsLoading(true)

        await RemoveFeedback(data.id)
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
        <div className="flex gap-2">
          {data.image && (
            <Image
              src={data.image}
              alt={data.name}
              width={100}
              height={100}
              className="mb-4 rounded-full border-4 border-gray object-cover"
            />
          )}
          <div className="flex flex-col">
            <h3 className="mb-4 text-lg font-bold text-white">{data.name}</h3>
            <p className="line-clamp-3 font-normal text-white/75">{data.description}</p>
          </div>
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
        </div>
      </div>

      <ProjectDeleteModal
        isLoading={isLoading}
        isOpenModal={isOpenModal}
        onDelete={deleteFeedback}
        onHide={setIsOpenModal}
        close={closeModal}
      />
    </>
  )
}
