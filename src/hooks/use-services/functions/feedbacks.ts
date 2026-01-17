import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  query,
  orderBy,
  Firestore,
} from 'firebase/firestore'
import { FeedbackProps } from '@/@types/feedback-type'
import { isEmpty } from '@/helpers/object'

type Input = Omit<FeedbackProps, 'created_at' | 'deleted_at' | 'id'>

export interface FeedbacksResult {
  getAll(): Promise<FeedbackProps[]>
  enviar(data: Input): Promise<void>
  update(data: FeedbackProps): Promise<void>
  remove(id: string): Promise<void>
}

export default function feedbacks(db: Firestore): FeedbacksResult {
  if (isEmpty(db)) throw new Error('Database not set')

  async function getAll(): Promise<FeedbackProps[]> {
    const feedbacks: FeedbackProps[] = []

    const feedbacksCollection = collection(db, 'feedbacks')
    const feedbacksQuery = query(feedbacksCollection, orderBy('created_at', 'desc'))
    const querySnapshot = await getDocs(feedbacksQuery)

    querySnapshot.forEach((doc) => {
      const { message, classification, created_at, deleted_at } = doc.data()

      feedbacks.push({
        id: doc.id,
        message,
        classification,
        created_at: created_at.toDate(),
        deleted_at: deleted_at && deleted_at.toDate(),
      })
    })

    return feedbacks
  }

  async function enviar(data: Input) {
    const postCollection = collection(db, 'feedbacks')

    const inputData = {
      message: data.message,
      classification: data.classification,
      created_at: new Date(),
      deleted_at: null,
    }

    await addDoc(postCollection, inputData)
  }

  async function update(input: FeedbackProps) {
    const { id, ...data } = input
    if (!id) throw new Error('id required')

    const postDoc = doc(db, 'feedbacks', id)
    await updateDoc(postDoc, data)
  }

  async function remove(id: string) {
    const postDoc = doc(db, 'feedbacks', id)
    await deleteDoc(postDoc)
  }

  return { getAll, enviar, update, remove }
}
