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
import { ProjectProps } from '@/@types/project-type'

export async function getById(id: string): Promise<ProjectProps | null> {
  const projectDoc = doc(db(), 'projects', id)
  const docSnapshot = await getDoc(projectDoc)

  if (docSnapshot.exists()) {
    const { name, description, link, image } = docSnapshot.data()

    return {
      id: docSnapshot.id,
      name,
      description,
      link,
      image,
    }
  }

  return null
}

export async function getAll(): Promise<ProjectProps[]> {
  const projects: ProjectProps[] = []
  const projectsCollection = collection(db(), 'projects')
  const projectsQuery = query(projectsCollection)
  const querySnapshot = await getDocs(projectsQuery)

  querySnapshot.forEach((doc) => {
    const { name, description, link, image } = doc.data()

    projects.push({
      id: doc.id,
      name,
      description,
      link,
      image,
    })
  })

  return projects
}

export async function getLastThree(): Promise<ProjectProps[]> {
  const projects: ProjectProps[] = []
  const projectsCollection = collection(db(), 'projects')
  const projectsQuery = query(projectsCollection)
  const querySnapshot = await getDocs(projectsQuery)

  querySnapshot.forEach((doc) => {
    const { name, description, link, image } = doc.data()

    projects.push({
      id: doc.id,
      name,
      description,
      link,
      image,
    })
  })

  return projects
}

export async function insert(data: ProjectProps) {
  const projectCollection = collection(db(), 'projects')
  await addDoc(projectCollection, data)
}

export async function update(id: string, data: ProjectProps) {
  const projectDoc = doc(db(), 'projects', id)
  await updateDoc(projectDoc, data)
}

export async function remove(id: string) {
  const projectDoc = doc(db(), 'projects', id)
  await deleteDoc(projectDoc)
}
