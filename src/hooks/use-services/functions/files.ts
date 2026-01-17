import { isEmpty } from '@/helpers/object'
import {
  deleteObject,
  ref,
  uploadString,
  getDownloadURL,
  getBlob,
  FirebaseStorage,
} from 'firebase/storage'

interface CreateFileMdProps {
  fileName: string
  type: string
  content: string
  folder: string
}

function isValidInput(input: CreateFileMdProps): boolean {
  return (
    !isEmpty(input.fileName) &&
    !isEmpty(input.type) &&
    !isEmpty(input.content) &&
    !isEmpty(input.folder)
  )
}

function extractFileNameFromUrl(url: string) {
  const lastSlashIndex = url.lastIndexOf('%2F')
  const questionMarkIndex = url.indexOf('?', lastSlashIndex)

  const fileName = url.substring(lastSlashIndex + 3, questionMarkIndex)

  return fileName
}

type GetContentFileByFilenameInput = { folder: string; fileName: string }
type RemoveInput = { folder: string; fileName: string }
type RemoveByUrlInput = { folder: string; url: string }

export interface FilesResult {
  getContentFileByFilename(input: GetContentFileByFilenameInput): Promise<string>
  getContentFileByDownloadUrl(url: string): Promise<string>
  createFile(input: CreateFileMdProps): Promise<string>
  remove(input: RemoveInput): Promise<void>
  removeByUrl(input: RemoveByUrlInput): Promise<void>
}

export default function files(storage: FirebaseStorage): FilesResult {
  if (isEmpty(storage)) throw new Error('Storage not set')

  async function getContentFileByFilename(input: GetContentFileByFilenameInput): Promise<string> {
    const { folder, fileName } = input
    const fileRef = ref(storage, `${folder}/${fileName}`)
    const blob = await getBlob(fileRef)
    return blob.text()
  }

  async function getContentFileByDownloadUrl(url: string) {
    const response = await fetch(url, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    })
    const htmlString = await response.text()

    return htmlString
  }

  async function createFile(input: CreateFileMdProps): Promise<string> {
    if (!isValidInput(input)) {
      throw new Error('Erro: todas as propriedades devem ser fornecidas.')
    }

    const { fileName, content, folder, type } = input

    try {
      const postsRef = ref(storage, `${folder}/${fileName}.${type}`)
      const result = await uploadString(postsRef, content)
      const downloadURL = await getDownloadURL(result.ref)

      return downloadURL
    } catch (error) {
      throw new Error('Erro: não foi possível fazer o upload.')
    }
  }

  async function remove(input: RemoveInput) {
    const { folder, fileName } = input
    const desertRef = ref(storage, `${folder}/${fileName}`)
    await deleteObject(desertRef)
  }

  async function removeByUrl(input: RemoveByUrlInput) {
    const { folder, url } = input
    const fileName = extractFileNameFromUrl(url)
    await remove({ folder, fileName })
  }

  return { getContentFileByFilename, getContentFileByDownloadUrl, createFile, remove, removeByUrl }
}
