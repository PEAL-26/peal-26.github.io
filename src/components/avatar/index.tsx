import Image from 'next/image'
import LinkNext from 'next/link'

export default function Avatar() {
  return (
    <div className="flex items-center space-x-4">
      <Image
        height={40}
        width={40}
        className="h-10 w-10 rounded-full"
        src="/docs/images/people/profile-picture-5.jpg"
        alt=""
      />
      <div className="font-medium">
        <div>Jese Leos</div>
        <a href="#" className="text-sm text-red-500 hover:text-red-700 ">
          Sair
        </a>
      </div>
    </div>
  )
}
