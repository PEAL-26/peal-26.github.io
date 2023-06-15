'use client'

import { useRouter, usePathname } from 'next/navigation'

import Image from 'next/image'
import Link from 'next/link'

import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'

import { Lightbox } from 'react-modal-image'

export default function Sidebar() {
  const router = useRouter()
  const pathname = usePathname()

  const isActiveLink = (href: string) => {
    // TODO: Remover /peal futuramente
    // return pathname === `/peal${href}` ? 'bg-gray/50 font-bold  text-primary' : ' hover:text-primary hover:bg-gray/30'
    return pathname === `${href}` ? 'bg-gray/50 font-bold text-primary' : ' hover:text-primary hover:bg-gray/30'
  }

  const handleLinkClick = (href: string) => {
    router.push(href)
  }

  return (
    <div className="lef-0 fixed top-0 z-50 flex min-h-screen w-[290px] flex-col items-center  bg-black p-5 ">
      <div className="flex flex-col items-center gap-3">
        {/* TODO Remover /peal depois */}
        <Image src="/peal/peal-logo.png" alt="user" width={100} height={100} className="cursor-pointer rounded-full" />
        <h1 className="max-w-[250px] text-center text-xl font-bold">Pedro Edilásio Araújo Lopes </h1>
      </div>

      <div className="mt-3 flex gap-5">
        <a
          className="flex h-8 w-8 items-center justify-center rounded-full border transition-all hover:border-primary hover:bg-primary hover:text-white"
          href="https://facebook.com/peal26"
          target="_blank"
        >
          <FaFacebookF />
        </a>
        <a
          className="flex h-8 w-8 items-center justify-center rounded-full border transition-all hover:border-primary hover:bg-primary hover:text-white"
          href="https://instagram.com/peal_26"
          target="_blank"
        >
          <AiFillInstagram />
        </a>
        <a
          className="flex h-8 w-8 items-center justify-center rounded-full border transition-all hover:border-primary hover:bg-primary hover:text-white"
          href="https://twitter.com/peal_26"
          target="_blank"
        >
          <FaTwitter />
        </a>
        <a
          className="flex h-8 w-8 items-center justify-center rounded-full border transition-all hover:border-primary hover:bg-primary hover:text-white"
          href="https://linkedin.com/in/peal26"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
        <a
          className="flex h-8 w-8 items-center justify-center rounded-full border transition-all hover:border-primary hover:bg-primary hover:text-white"
          href="https://github.com/peal-26"
          target="_blank"
        >
          <FiGithub className="fill-current" />
        </a>
      </div>

      <ul className="mt-8 w-full">
        <li
          className={`cursor-pointer rounded-md px-3 py-4 text-xl ${isActiveLink('/biografia')}`}
          onClick={() => handleLinkClick('/biografia')}
        >
          <Link href="/biografia">Biografia</Link>
        </li>
        <li
          className={`cursor-pointer rounded-md px-3 py-4 text-xl ${isActiveLink('/projectos')}`}
          onClick={() => handleLinkClick('/projectos')}
        >
          <Link href="/projectos">Projectos</Link>
        </li>
        <li
          className={`cursor-pointer rounded-md px-3 py-4 text-xl ${isActiveLink('/posts')}`}
          onClick={() => handleLinkClick('/posts')}
        >
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
    </div>
  )
}
