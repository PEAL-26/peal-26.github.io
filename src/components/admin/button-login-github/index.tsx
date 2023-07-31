'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signInWithPopup, GithubAuthProvider, browserLocalPersistence } from 'firebase/auth'

import { AiFillGithub, AiOutlineLoading } from 'react-icons/ai'

import { auth } from '@/libs/firebase'
import { setCookie } from '@/helpers/cookies'
import { firebaseConfig } from '@/config/firebase-config'

export default function ButtonLoginGithub() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async () => {
    if (isLoading) return
    setIsLoading(true)

    // const _auth = auth()
    const provider = new GithubAuthProvider()
    provider.setCustomParameters({
      allow_signup: 'false',
    })

    await auth.setPersistence(browserLocalPersistence)
    const { user } = await signInWithPopup(auth, provider)

    if (firebaseConfig.emailProprietarioAuth !== user.email) {
      alert('Esse não é o usuário proprietário do aplicativo')
      setIsLoading(false)
      return
    }

    const tempoExpiracaoEmDias = 7
    setCookie('user', JSON.stringify({ name: user.displayName, avatar: user.photoURL }), {
      expires: tempoExpiracaoEmDias,
      path: '/admin',
    })

    setIsLoading(false)
    router.refresh()
  }

  return (
    <button
      type="button"
      className="inline-flex items-center rounded-lg bg-[#24292F] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none"
      onClick={handleLogin}
    >
      {isLoading ? (
        <AiOutlineLoading size={16} className="-ml-1 mr-2 h-4 w-4 animate-spin max-sm:mr-0" />
      ) : (
        <AiFillGithub className="-ml-1 mr-2 h-4 w-4 rounded-full max-sm:mr-0" />
      )}
      <span className="max-sm:hidden">Login com Github</span>
    </button>
  )
}
