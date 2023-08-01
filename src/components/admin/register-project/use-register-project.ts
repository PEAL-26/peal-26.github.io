import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import { insert, update } from '@/data/projects'
import { useFileUpload } from '@/hooks/use-file-upload'

import { InputsForm } from './form'

const NOVENTA_POR_CENTO = 90
const NOVENTA_E_CINCO_POR_CENTO = 95
const CEM_POR_CENTO = 100

export type STATE_PROCESS = 'SUCCESS' | 'ERROR' | 'PENDING'

export function useRegisterProject() {
  const searchParams = useSearchParams()
  const { uploadFile, progress: progressUpload } = useFileUpload()

  const [id, setId] = useState<string | null>(null)

  const [state, setState] = useState<STATE_PROCESS>('PENDING')
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [progressProcess, setProgressProcess] = useState(0)
  const [file, setFile] = useState<File | null>(null)
  const [resetForm, setResetForm] = useState(false)

  const onSubmit = async (data: InputsForm) => {
    if (!file) return
    setIsOpenModal(true)
    setState('PENDING')

    try {
      const url = await uploadFile(file, 'projects')
      data.image = url

      if (id) {
        await update(id, data)
      } else {
        await insert(data)
      }

      setProgressProcess(CEM_POR_CENTO)
      setState('SUCCESS')
    } catch (error) {
      console.error(error)
      setState('ERROR')
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
    if (state === 'PENDING' && progressUpload < 100)
      setProgressProcess((progressUpload * NOVENTA_POR_CENTO) / CEM_POR_CENTO)
    else if (progressUpload === 100 && state === 'PENDING')
      setProgressProcess((progressUpload * NOVENTA_E_CINCO_POR_CENTO) / CEM_POR_CENTO)
  }, [progressUpload, state])

  useEffect(() => {
    if (!isOpenModal && state === 'SUCCESS') {
      setResetForm(true)
      setProgressProcess(0)
    }
  }, [isOpenModal, state])

  return {
    onSubmit,
    handleChange,
    isOpenModal,
    setIsOpenModal,
    progressProcess,
    state,
    resetForm,
  }
}
