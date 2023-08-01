import { useState } from 'react'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

import { storage } from '@/libs/firebase'

export const useFileUpload = () => {
  const [progress, setProgress] = useState(0)
  const [url, setUrl] = useState<string | null>(null)
  const [error, setError] = useState<Error | null>(null)

  const getFileExtension = (fileName: string) => fileName.substring(fileName.lastIndexOf('.'))

  const uploadFile = async (file: File, folder:string) => {
    setProgress(0)
    setError(null)

    const extension = getFileExtension(file.name)
    const name = self.crypto.randomUUID()
    const storageRef = ref(storage(), `${folder}/${name}${extension}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    return new Promise<string>((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          setProgress(parseInt(uploadProgress.toFixed(0)))
        },
        (error) => {
          setError(error)
          reject(error)
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
            setUrl(downloadURL)
            resolve(downloadURL)
          } catch (error: any) {
            setError(error)
            reject(error)
          }
        },
      )
    })
  }

  return { progress, url, error, uploadFile }
}
