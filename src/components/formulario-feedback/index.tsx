import { useEffect, useState } from 'react'
import ReaccaoFeedback from '../reaccao-feedback'

export default function FormularioFeedback() {
  const [reaccao, setReaccao] = useState(0)

  return (
    <form>
      <div className="mb-4 w-80 max-sm:w-full rounded-md border border-white/20 bg-gray">
        <div className="rounded-t-lg bg-gray/50 p-2">
          <label /*for="comment"*/ className="sr-only">Sua mensagem</label>
          <textarea
            id="mensagem"
            rows={6}
            className="w-full h-full resize-none overflow-y-auto placeholder-white/20 rounded-md border border-white/20 bg-gray/50 p-2 text-sm text-white focus:border-white/70 focus:outline-0 focus:ring-0 "
            placeholder="Escreva a sua mensagem..."
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-between rounded-b-md border-t border-white/20 bg-black px-3 py-2">
          <ReaccaoFeedback onReaccao={setReaccao} />
          <button
            type="submit"
            className="max-sm:ml-5 inline-flex items-center rounded-lg bg-white px-4 py-2.5 text-center text-xs font-medium text-black hover:bg-white/70 focus:ring-4 focus:ring-white/80"
          >
            Enviar
          </button>
        </div>
      </div>
    </form>
  )
}
