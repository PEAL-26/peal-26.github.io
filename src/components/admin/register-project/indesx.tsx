'use client'
import { z } from 'zod'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

import { ProjectProps } from '@/@types/project-type'
import { insert, update } from '@/data/projects'
import { FileUpload } from '@/components/file-upload'
import { storage } from '@/libs/firebase'
import { FormRegisterProject } from './form'
import { ModalSave } from './modal-save'
import { Console } from 'console'

const Project = z.object({
  id: z.string(),
  name: z.string().max(150),
  description: z.string(),
  link: z.string().url(),
  image: z.string(),
})

export default function RegisterProject() {
  const searchParams = useSearchParams()
  const [id, setId] = useState<string | null>(null)

  const [success, setSuccess] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [progress, setProgress] = useState<number>(0)
  const [file, setFile] = useState<File | null>(null)
  const [fileUrl, setFileUrl] = useState<string | null>(null)

  const save = async () => {
    setSuccess(false)
    try {
      setSuccess(true)
    } catch (error) {
      console.error(error)
    }
  }

  const startUpload = (e: FormEvent) => {
    e.preventDefault()

    if (file) {
      setIsOpenModal(true)
      setSuccess(false)
      setProgress(0)

      const storageRef = ref(storage(), `projects/${file.name}`)
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          setProgress(parseInt(uploadProgress.toFixed(0)))
        },
        (error) => {
          console.error(error)
        },
        () => {
          // Upload completo, obter a URL do arquivo
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log(downloadURL)
            setFileUrl(downloadURL)
          })
        },
      )
    }
  }

  const handleChange = (files: File[]) => {
    const selectedFile = files?.[0]
    console.log(selectedFile)
    if (selectedFile) {
      setFile(selectedFile)
    }
  }

  useEffect(() => {
    const _id = searchParams.get('id')
    setId(_id)
  }, [searchParams])

  useEffect(() => {
    if (progress === 100) {
      save()
    }
  }, [progress])

  return (
    <div className="flex w-full flex-col gap-2">
      <FormRegisterProject onSubmit={startUpload} onChangeImage={handleChange} />
      <ModalSave
        isOpen={isOpenModal}
        onHide={setIsOpenModal}
        progress={progress}
        success={success}
      />
    </div>
  )
}
