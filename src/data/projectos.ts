import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDoc,
  getDocs,
  query,
} from 'firebase/firestore'

import { db } from '@/libs/firebase'
import { ProjectoProps } from '@/@types/projecto-type'

export async function getById(id: string): Promise<ProjectoProps | null> {
  const projectoDoc = doc(db(), 'projectos', id)
  const docSnapshot = await getDoc(projectoDoc)

  if (docSnapshot.exists()) {
    const { name, description, link, imagem } = docSnapshot.data()

    return {
      id: docSnapshot.id,
      name,
      description,
      link,
      imagem,
    }
  }

  return null
}

export async function getAll(): Promise<ProjectoProps[]> {
  const projectos: ProjectoProps[] = []
  const projectosCollection = collection(db(), 'projectos')
  const projectosQuery = query(projectosCollection)
  const querySnapshot = await getDocs(projectosQuery)

  querySnapshot.forEach((doc) => {
    const { name, description, link, imagem } = doc.data()

    projectos.push({
      id: doc.id,
      name,
      description,
      link,
      imagem,
    })
  })

  return projectos
}

export async function getLastThree(): Promise<ProjectoProps[]> {
  const projectos: ProjectoProps[] = []
  const projectosCollection = collection(db(), 'projectos')
  const projectosQuery = query(projectosCollection)
  const querySnapshot = await getDocs(projectosQuery)

  querySnapshot.forEach((doc) => {
    const { name, description, link, imagem } = doc.data()

    projectos.push({
      id: doc.id,
      name,
      description,
      link,
      imagem,
    })
  })

  return projectos
}

export async function insert(data: ProjectoProps) {
  const projectoCollection = collection(db(), 'projectos')
  await addDoc(projectoCollection, data)
}

export async function update(id: string, data: ProjectoProps) {
  const projectoDoc = doc(db(), 'projectos', id)
  await updateDoc(projectoDoc, data)
}

export async function remove(id: string) {
  const projectoDoc = doc(db(), 'projectos', id)
  await deleteDoc(projectoDoc)
}
