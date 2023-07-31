import { BaseSyntheticEvent, FormEvent, useEffect, useState } from 'react'
import { FileUpload } from '@/components/file-upload'
import { useForm, SubmitHandler, Controller, UseFormReset } from 'react-hook-form'

export type InputsForm = {
  name: string
  description: string
  link: string
  image: string
}

export type TypeSubmit = SubmitHandler<InputsForm>
type Callback = () => void
interface FormRegisterProjectProps {
  onSubmit(data: InputsForm): void
  onChangeImage?(files: File[]): void
  restForm?: boolean
}

export function FormRegisterProject(props: FormRegisterProjectProps) {
  const { onSubmit, onChangeImage, restForm } = props
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<InputsForm>()
  const [files, setFiles] = useState<File[]>([])
  const onSubmitReactHookForm: SubmitHandler<InputsForm> = (data, e) => {
    e?.preventDefault()
    onSubmit({ ...data, image: '' })
  }

  useEffect(() => {
    if (restForm) {
      reset()
      setFiles([])
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restForm])

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmitReactHookForm)}>
      <div>
        <Controller
          control={control}
          name="image"
          rules={{ required: 'Imagem obrigatória!' }}
          render={({ field: { value, onChange, ...field } }) => {
            return (
              <FileUpload
                {...field}
                onChangeFile={(files) => {
                  onChange(files[0])
                  onChangeImage && onChangeImage(files)
                }}
                value={value}
                files={files}
              />
            )
          }}
        />
        {errors.image && <span className="text-red-600">{errors.image.message}</span>}
      </div>

      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
          Nome
        </label>
        <input
          type="text"
          id="name"
          data-error={!!errors.name}
          className="block w-full rounded-md border-2 border-transparent bg-gray-50 p-2.5 text-sm text-black outline-none data-[error=true]:border-2 data-[error=true]:border-red-600"
          placeholder="Nome"
          {...register('name', { required: 'Campo Obrigatório!' })}
        />
        {errors.name && <span className="text-red-600">{errors.name.message}</span>}
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
          {...register('description')}
        ></textarea>
      </div>
      <div>
        <label htmlFor="link" className="mb-2 block text-sm font-medium text-white">
          Link
        </label>
        <input
          type="url"
          id="link"
          data-error={!!errors.link}
          className="block w-full rounded-md border-2 border-transparent bg-gray-50 p-2.5 text-sm text-black outline-none data-[error=true]:border-2 data-[error=true]:border-red-600"
          placeholder="http://peal-26.github.io/"
          {...register('link', { required: 'Campo obrigatório!' })}
        />
        {errors.link && <span className="text-red-600">{errors.link.message}</span>}
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
