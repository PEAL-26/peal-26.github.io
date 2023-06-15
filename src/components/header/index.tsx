interface Props {
  title: string
}

export default function Header({ title }: Props) {
  return (
    <div className="w-full rounded-md bg-black p-4">
      <h1 className="text-3xl font-bold">{title}</h1>
    </div>
  )
}
