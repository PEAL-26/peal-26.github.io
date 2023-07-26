'use client'
import { FormEvent, useEffect, useState } from 'react'
import ReaccaoFeedback, { Reaccao } from '../reaccao-feedback'
import { enviar } from '@/data/feedbacks'
import { AiFillCheckCircle, AiOutlineLoading } from 'react-icons/ai'

export default function FormularioFeedback() {
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const [classification, setClassification] = useState(Reaccao.MUITO_BOM)
  const [message, setMessage] = useState('')

  const onSubmit = async (data: FormEvent) => {
    data.preventDefault()
    if (success) return

    try {
      setIsLoading(true)
      await enviar({ classification, message })

      setClassification(Reaccao.MUITO_BOM)
      setMessage('')
      setIsLoading(false)
      setSuccess(true)
    } catch (error) {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const count =
      success &&
      setInterval(() => {
        setSeconds((prevSecond) => prevSecond + 1)
      }, 1000)

    return () => clearInterval(count || undefined)
  }, [success])

  useEffect(() => {
    if (success && seconds == 5) {
      setSeconds(0)
      setSuccess(false)
    }
  }, [success, seconds])

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-4 w-80 rounded-md border border-white/20 bg-gray max-sm:w-full">
        <div
          data-success={success}
          className="w-full flex-col items-center justify-center gap-1 py-5 text-center transition-all duration-500 data-[success=true]:flex data-[success=false]:hidden"
        >
          <AiFillCheckCircle className="h-8 w-8 text-blue-700" />
          <span className="">
            Seu feedback foi recebido!
            <br /> Obrigado pela ajuda.
          </span>
        </div>

        <div
          data-success={success}
          className="rounded-t-lg bg-gray/50 p-2 transition-all duration-500 data-[success=true]:hidden"
        >
          <label htmlFor="mensagem" className="sr-only">
            Sua mensagem
          </label>
          <textarea
            id="mensagem"
            rows={6}
            className="h-full w-full resize-none overflow-y-auto rounded-md border border-white/20 bg-gray/50 p-2 text-sm text-white placeholder-white/20 focus:border-white/70 focus:outline-0 focus:ring-0 "
            placeholder="Escreva a sua mensagem..."
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
        <div className="flex items-center justify-between rounded-b-md border-t border-white/20 bg-black px-3 py-2">
          <ReaccaoFeedback
            reaccao={classification}
            onReaccao={setClassification}
          />
          <button
            type="submit"
            data-loading={isLoading}
            disabled={isLoading}
            className="inline-flex items-center rounded-lg bg-white px-4 py-2.5 text-center text-xs font-medium text-black focus:ring-4 focus:ring-white/80 data-[loading=true]:cursor-not-allowed data-[loading=false]:hover:bg-white/70 max-sm:ml-5"
          >
            {isLoading && (
              <AiOutlineLoading className="h-3 w-3 animate-spin fill-gray text-gray " />
            )}
            {!isLoading && <>Enviar</>}
          </button>
        </div>
      </div>
    </form>
  )
}
