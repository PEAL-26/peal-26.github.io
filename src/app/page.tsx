import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <Image src="/peal-logo.png" alt="user" width={152} height={152} className="cursor-pointer rounded-full" />
        <h1 className="text-center text-3xl font-bold">Pedro Edilásio Araújo Lopes</h1>
      </div>
    </div>
  )
}
