import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  Timestamp,
  serverTimestamp,
} from 'firebase/firestore'

import { db } from '@/libs/firebase'
import { PostProps } from '@/@types/post-type'
import { firebaseTimestampToDate } from '@/helpers/date-converter'

export async function getById(id: string): Promise<PostProps | null> {
  const postDoc = doc(db(), 'posts', id)
  const docSnapshot = await getDoc(postDoc)

  if (docSnapshot.exists()) {
    const { title, slug, resume, date, file } = docSnapshot.data()

    return {
      id: docSnapshot.id,
      title,
      slug,
      resume,
      date: firebaseTimestampToDate(date),
      file,
    }
  }

  return null
}

export async function getAll(): Promise<PostProps[]> {
  const posts: PostProps[] = []
  const postsCollection = collection(db(), 'posts')
  const postsQuery = query(postsCollection, orderBy('date', 'desc'))
  const querySnapshot = await getDocs(postsQuery)

  querySnapshot.forEach((doc) => {
    const { title, slug, resume, date, file } = doc.data()

    posts.push({
      id: doc.id,
      title,
      slug,
      resume,
      date: firebaseTimestampToDate(date),
      file,
    })
  })

  return posts
}

export async function getLastThree(): Promise<PostProps[]> {
  const posts: PostProps[] = []
  const postsCollection = collection(db(), 'posts')
  const postsQuery = query(postsCollection, orderBy('date', 'desc'), limit(3))
  const querySnapshot = await getDocs(postsQuery)

  querySnapshot.forEach((doc) => {
    const { title, slug, resume, date, file } = doc.data()

    posts.push({
      id: doc.id,
      title,
      slug,
      resume,
      date: firebaseTimestampToDate(date),
      file,
    })
  })

  return posts
}

export async function insert(data: PostProps) {
  const postCollection = collection(db(), 'posts')
  await addDoc(postCollection, data)
}

export async function update(id: string, data: PostProps) {
  const postDoc = doc(db(), 'posts', id)
  await updateDoc(postDoc, data)
}

export async function remove(id: string) {
  const postDoc = doc(db(), 'posts', id)
  await deleteDoc(postDoc)
}
