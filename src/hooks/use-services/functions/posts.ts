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
  Firestore,
} from 'firebase/firestore'
import { PostProps } from '@/@types/post-type'
import { isEmpty } from '@/helpers/object'

type InsertInput = Omit<PostProps, 'id' | 'created_at' | 'updated_at'>
type UpdateInput = Omit<PostProps, 'created_at' | 'updated_at'>

export interface PostsResult {
  getById(id: string): Promise<PostProps | null>
  getBySlug(slug: string): Promise<PostProps | null>
  getAll(): Promise<PostProps[]>
  getLastThree(): Promise<PostProps[]>
  insert(data: InsertInput): Promise<void>
  update(input: UpdateInput): Promise<void>
  remove(id: string): Promise<void>
}

export default function posts(db: Firestore): PostsResult {
  if (isEmpty(db)) throw new Error('Database not set')

  async function getById(id: string): Promise<PostProps | null> {
    const postDoc = doc(db, 'posts', id)
    const docSnapshot = await getDoc(postDoc)

    if (docSnapshot.exists()) {
      const { title, slug, resume, created_at, updated_at, file } = docSnapshot.data()

      return {
        id: docSnapshot.id,
        title,
        slug,
        resume,
        file,
        created_at: created_at.toDate(),
        updated_at: updated_at.toDate(),
      }
    }

    return null
  }

  async function getBySlug(slug: string): Promise<PostProps | null> {
    if (isEmpty(slug)) return null

    const q = query(collection(db, 'posts'), where('slug', '==', slug))
    const querySnapshot = await getDocs(q)

    if (querySnapshot.size === 0) return null

    const docSnapshot = querySnapshot.docs[0]
    const { title, resume, created_at, updated_at, file } = docSnapshot.data()

    return {
      id: docSnapshot.id,
      title,
      slug,
      resume,
      file,
      created_at: created_at.toDate(),
      updated_at: updated_at.toDate(),
    }
  }

  async function getAll(): Promise<PostProps[]> {
    const posts: PostProps[] = []
    const postsCollection = collection(db, 'posts')
    const postsQuery = query(postsCollection, orderBy('created_at', 'desc'))
    const querySnapshot = await getDocs(postsQuery)

    querySnapshot.forEach((doc) => {
      const { title, slug, resume, created_at, updated_at, file } = doc.data()

      posts.push({
        id: doc.id,
        title,
        slug,
        resume,
        file,
        created_at: created_at.toDate(),
        updated_at: updated_at.toDate(),
      })
    })

    return posts
  }

  async function getLastThree(): Promise<PostProps[]> {
    const posts: PostProps[] = []
    const postsCollection = collection(db, 'posts')
    const postsQuery = query(postsCollection, orderBy('created_at', 'desc'), limit(3))
    const querySnapshot = await getDocs(postsQuery)

    querySnapshot.forEach((doc) => {
      const { title, slug, resume, created_at, updated_at, file } = doc.data()

      posts.push({
        id: doc.id,
        title,
        slug,
        resume,
        file,
        created_at: created_at.toDate(),
        updated_at: updated_at.toDate(),
      })
    })

    return posts
  }

  async function insert(data: InsertInput) {
    const inputData = {
      title: data.title,
      slug: data.slug,
      resume: data.resume,
      file: data.file,
      created_at: new Date(),
      updated_at: new Date(),
    }

    const postCollection = collection(db, 'posts')
    await addDoc(postCollection, inputData)
  }

  async function update(input: UpdateInput) {
    const { id, ...data } = input

    if (!id) throw new Error('id required')

    const inputData = {
      title: data.title,
      slug: data.slug,
      resume: data.resume,
      file: data.file,
      updated_at: new Date(),
    }

    const postDoc = doc(db, 'posts', id)
    await updateDoc(postDoc, inputData)
  }

  async function remove(id: string) {
    const post = await getById(id)
    if (!post) throw new Error('Post não existe.')

    const postDoc = doc(db, 'posts', id)
    await deleteDoc(postDoc)
  }

  return {
    getById,
    getBySlug,
    getAll,
    getLastThree,
    insert,
    update,
    remove,
  }
}
