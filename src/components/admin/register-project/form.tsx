import { FileUpload } from '@/components/file-upload'
import { FormEvent } from 'react'

interface FormRegisterProjectProps {
  onSubmit?(e?: FormEvent): void
  onChangeImage?(files: File[]): void
}

export function FormRegisterProject(props: FormRegisterProjectProps) {
  const { onSubmit, onChangeImage } = props

  return (
    <form className="flex flex-col gap-3" onSubmit={onSubmit}>
      <FileUpload onChange={onChangeImage} />

      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
          Nome
        </label>
        <input
          type="text"
          id="name"
          className="block w-full rounded-md border border-transparent bg-gray-50 p-2.5 text-sm text-black outline-none"
          placeholder="Nome"
          required
        />
      </div>
      <div>
        <label htmlFor="description" className="mb-2 block text-sm font-medium text-white">
          Descrição
        </label>
        <textarea
          id="description"
          rows={4}
          className="block w-full rounded-md border border-transparent bg-gray-50 p-2.5 text-sm text-black outline-none"
          placeholder="Escreva a descrição aqui..."
        ></textarea>
      </div>
      <div>
        <label htmlFor="link" className="mb-2 block text-sm font-medium text-white">
          Link
        </label>
        <input
          type="url"
          id="link"
          className="block w-full rounded-md border border-transparent bg-gray-50 p-2.5 text-sm text-black outline-none"
          placeholder="http://peal-26.github.io/"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-md bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary/50 focus:outline-none"
      >
        Guardar
      </button>
    </form>
  )
}
