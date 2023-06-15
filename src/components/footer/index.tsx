import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <div className="mt-7 flex w-full items-center justify-between rounded-md bg-black p-4 text-right">
      <span className="text-xs">{`© ${year} PEAL. Todos os direitos reservados.`}</span>
      <div className="flex gap-3">
        <Link className="text-xs" href="/biografia">
          Biografia
        </Link>
        <Link className="text-xs" href="/projectos">
          Projectos
        </Link>
        <Link className="text-xs" href="/posts">
          Posts
        </Link>
      </div>
    </div>
  )
}
