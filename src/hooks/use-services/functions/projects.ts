import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDoc,
  getDocs,
  query,
  Firestore,
} from 'firebase/firestore'
import { ProjectProps } from '@/@types/project-type'
import { isEmpty } from '@/helpers/object'

export interface ProjectsResult {
  getById(id: string): Promise<ProjectProps | null>
  getAll(): Promise<ProjectProps[]>
  getLastThree(): Promise<ProjectProps[]>
  insert(data: ProjectProps): Promise<void>
  update(data: ProjectProps): Promise<void>
  remove(id: string): Promise<void>
}

export default function projects(db: Firestore): ProjectsResult {
  if (isEmpty(db)) throw new Error('Database not set')

  async function getById(id: string): Promise<ProjectProps | null> {
    const projectDoc = doc(db, 'projects', id)
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

  async function getAll(): Promise<ProjectProps[]> {
    const projects: ProjectProps[] = []
    const projectsCollection = collection(db, 'projects')
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

  async function getLastThree(): Promise<ProjectProps[]> {
    const projects: ProjectProps[] = []
    const projectsCollection = collection(db, 'projects')
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

  async function insert(data: ProjectProps) {
    const projectCollection = collection(db, 'projects')
    await addDoc(projectCollection, data)
  }

  async function update(input: ProjectProps) {
    const { id, ...data } = input
    if (!id) throw new Error('id required')

    const projectDoc = doc(db, 'projects', id)
    await updateDoc(projectDoc, data)
  }

  async function remove(id: string) {
    const projectDoc = doc(db, 'projects', id)
    await deleteDoc(projectDoc)
  }

  return {
    getById,
    getAll,
    getLastThree,
    insert,
    update,
    remove,
  }
}
