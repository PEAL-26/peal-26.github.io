import { twMerge } from 'tailwind-merge'

interface Props {
  className?: string
  onReload?(): void
}
export function ErrorComponent(props: Props) {
  const { className, onReload } = props
  return (
    <div className={twMerge('flex flex-col items-center justify-center', className)}>
      <h2 className="mx-auto mb-[10px] mt-[30px] w-[150px] rounded-[50px] bg-primary p-3 text-center font-bold text-white">
        Oops :(
      </h2>
      <p className="mx-auto my-0 w-[350px] text-center">Algo deu errado..</p>

      {onReload && (
        <button
          className="mt-4 rounded-[50px] border px-3 py-1 hover:bg-white/50"
          onClick={onReload}
        >
          Recarregar
        </button>
      )}
    </div>
  )
}
