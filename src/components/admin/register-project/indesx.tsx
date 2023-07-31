'use client'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

import { storage } from '@/libs/firebase'
import { insert, update } from '@/data/projects'

import { ModalSave } from './modal-save'
import { FormRegisterProject, InputsForm, TypeSubmit } from './form'

function getFileExtension(fileName: string) {
  const extensionIndex = fileName.lastIndexOf('.')
  const extension = fileName.substring(extensionIndex)
  return extension
}

const NOVENTA_POR_CENTO = 90
const NOVENTA_E_CINCO_POR_CENTO = 95
const CEM_POR_CENTO = 100

export default function RegisterProject() {
  const searchParams = useSearchParams()
  const [id, setId] = useState<string | null>(null)

  const [success, setSuccess] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [progressUpload, setProgressUpload] = useState(0)
  const [progressProcess, setProgressProcess] = useState(0)
  const [file, setFile] = useState<File | null>(null)
  const [fileUrl, setFileUrl] = useState<string | null>(null)
  const [formData, setFormData] = useState<InputsForm>({} as InputsForm)
  const [resetForm, setResetForm] = useState(false)

  const save = async () => {
    try {
      if (id) {
        await update(id, formData)
      } else {
        await insert(formData)
      }

      setProgressProcess((progressUpload * CEM_POR_CENTO) / CEM_POR_CENTO)
      setSuccess(true)
      setResetForm(true)
    } catch (error) {
      console.error(error)
    }
  }

  const startUpload: TypeSubmit = (data: InputsForm) => {
    setFormData(data)
    setIsOpenModal(true)
    setSuccess(false)
    setProgressUpload(0)
    setProgressProcess(0)

    if (file) {
      const extension = getFileExtension(file.name)
      const name = self.crypto.randomUUID()
      const storageRef = ref(storage(), `projects/${name}${extension}`)
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const uploadProgressUpload = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          setProgressUpload(parseInt(uploadProgressUpload.toFixed(0)))
        },
        (error) => {
          console.error(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setFileUrl(url)
          })
        },
      )
    }
  }

  const handleChange = (files: File[]) => {
    const selectedFile = files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
    }
  }

  useEffect(() => {
    const _id = searchParams.get('id')
    setId(_id)
  }, [searchParams])

  useEffect(() => {
    if (progressUpload === CEM_POR_CENTO && fileUrl) {
      setProgressProcess((progressUpload * NOVENTA_E_CINCO_POR_CENTO) / CEM_POR_CENTO)
      setFormData({ ...formData, image: fileUrl })
      save()
    } else {
      setProgressProcess((progressUpload * NOVENTA_POR_CENTO) / CEM_POR_CENTO)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progressUpload, fileUrl])

  return (
    <div className="flex w-full flex-col gap-2">
      <FormRegisterProject
        onSubmit={startUpload}
        onChangeImage={handleChange}
        restForm={resetForm}
      />
      <ModalSave
        isOpen={isOpenModal}
        onHide={setIsOpenModal}
        progress={progressProcess}
        success={success}
      />
    </div>
  )
}
