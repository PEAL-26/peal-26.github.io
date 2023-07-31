import validator from 'validator'
import { ref, uploadString } from 'firebase/storage'

import { storage } from '@/libs/firebase'

const { isEmpty } = validator
export async function uploadPost(fileName: string, content: string): Promise<void> {
  if (isEmpty(fileName)) {
    throw new Error('Erro: fileName não pode ser vazio.')
  }

  try {
    const postsRef = ref(storage(), `posts/${fileName}.md`)
    await uploadString(postsRef, content)
  } catch (error) {
    throw new Error('Erro: não foi possível fazer o upload.')
  }
}
