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
import validator from 'validator'
import { db } from '@/libs/firebase'
import { FeedbackProps } from '@/@types/feedback-type'
import { dateToFirebaseTimestamp, firebaseTimestampToDate } from '@/helpers/date-converter'

const { isEmpty } = validator

export async function getAll(): Promise<FeedbackProps[]> {
  const feedbacks: FeedbackProps[] = []
  const feedbacksCollection = collection(db(), 'feedbacks')
  const feedbacksQuery = query(feedbacksCollection, orderBy('date', 'desc'))
  const querySnapshot = await getDocs(feedbacksQuery)

  querySnapshot.forEach((doc) => {
    const { message, classification, created_at, deleted_at } = doc.data()

    feedbacks.push({
      id: doc.id,
      message,
      classification,
      created_at: firebaseTimestampToDate(created_at),
      deleted_at: firebaseTimestampToDate(deleted_at),
    })
  })

  return feedbacks
}

export async function enviar(data: Omit<FeedbackProps, 'created_at' | 'deleted_at' | 'id'>) {
  const postCollection = collection(db(), 'feedbacks')

  const inputData = {
    message: data.message,
    classification: data.classification,
    created_at: new Date(),
    deleted_at: null,
  }

  await addDoc(postCollection, inputData)
}

export async function update(id: string, data: FeedbackProps) {
  const postDoc = doc(db(), 'feedbacks', id)
  await updateDoc(postDoc, data)
}

export async function remove(id: string) {
  const postDoc = doc(db(), 'feedbacks', id)
  await deleteDoc(postDoc)
}
