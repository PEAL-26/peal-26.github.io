'use client'

import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  const handleBack = () => {
    router.push('/')
  }

  return (
    <div className={`flex h-screen w-full items-center justify-center text-center`}>
      <div className="flex items-center justify-center">
        <span className="mr-5 border-r border-white py-3 pr-5 text-3xl font-bold">404</span>
        <div className="flex flex-col items-start justify-start">
          <span className="mb-1 text-sm">Registo não Encontrado!</span>
          <button
            onClick={handleBack}
            className="rounded-md bg-black px-4 py-1 text-white/80 hover:bg-white/80 hover:text-black focus:outline-none"
          >
            Página Principal
          </button>
        </div>
      </div>
    </div>
  )
}
