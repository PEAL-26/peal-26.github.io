import validator from 'validator'
import {
  deleteObject,
  ref,
  uploadString,
  getDownloadURL,
  getBlob,
  getBytes,
  getStream,
} from 'firebase/storage'

import { storage } from '@/libs/firebase'

const { isEmpty } = validator

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

export async function getContentFileByFilename(folder: string, fileName: string): Promise<string> {
  const fileRef = ref(storage(), `${folder}/${fileName}`)
  const blob = await getBlob(fileRef)
  return blob.text()
}

export async function getContentFileByDownloadUrl(url: string) {
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

export async function createFile(input: CreateFileMdProps): Promise<string> {
  if (!isValidInput(input)) {
    throw new Error('Erro: todas as propriedades devem ser fornecidas.')
  }

  const { fileName, content, folder, type } = input

  try {
    const postsRef = ref(storage(), `${folder}/${fileName}.${type}`)
    const result = await uploadString(postsRef, content)
    const downloadURL = await getDownloadURL(result.ref)

    return downloadURL
  } catch (error) {
    throw new Error('Erro: não foi possível fazer o upload.')
  }
}

function extractFileNameFromUrl(url: string) {
  const lastSlashIndex = url.lastIndexOf('%2F')
  const questionMarkIndex = url.indexOf('?', lastSlashIndex)

  const fileName = url.substring(lastSlashIndex + 3, questionMarkIndex)

  return fileName
}

export async function remove(folder: string, fileName: string) {
  const desertRef = ref(storage(), `${folder}/${fileName}`)
  await deleteObject(desertRef)
}

export async function removeByUrl(folder: string, url: string) {
  const fileName = extractFileNameFromUrl(url)

  await remove(folder, fileName)
}
