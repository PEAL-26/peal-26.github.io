import Link from 'next/link'
import Image from 'next/image'
import validator from 'validator'
import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { BiEdit, BiTrashAlt } from 'react-icons/bi'

import { remove as RemoveProject, getById } from '@/data/projects'
import { removeByUrl as removeFileByUrl } from '@/data/files'
import { ProjectProps } from '@/@types/project-type'
import { ProjectDeleteModal } from './project-delete-modal'
import { useAppContext } from '@/contexts/app-context'

interface PostAminProps {
  data: ProjectProps
}

export function ProjectAdmin({ data }: PostAminProps) {
  const { isEmpty } = validator

  const router = useRouter()
  const pathname = usePathname()

  const { loadingPage } = useAppContext()

  const url = `/admin/projectos/register?id=${data.id}`
  const [isLoading, setIsLoading] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState(false)

  const closeModal = () => setIsOpenModal(false)
  const openModal = () => setIsOpenModal(true)

  const deleteFeedback = async () => {
    if (data.id) {
      try {
        setIsLoading(true)
        const project = await getById(data.id)

        if (!project) {
          // TODO Implementar depois
          console.error('Projecto não encontrado')
          return
        }

        if (project.image && !isEmpty(project.image)) {
          await removeFileByUrl('projects', project.image)
        }

        await RemoveProject(data.id)

        closeModal()
        loadingPage()
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
        <div className="flex w-full gap-2">
          <div className="relative h-28 w-28 rounded-full border-4 border-gray">
            {data.image && (
              <Image src={data.image} alt={data.name} fill className="rounded-full object-cover" />
            )}
          </div>
          <div className="flex w-full flex-col">
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
