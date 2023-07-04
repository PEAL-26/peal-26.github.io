'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'

import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'


export default function Sidebar() {
  const router = useRouter()
  const pathname = usePathname()

  const isActiveLink = (href: string) => {
    return pathname === `${href}`
      ? 'bg-gray/50 font-bold text-primary'
      : ' hover:text-primary hover:bg-gray/30'
  }

  const handleLinkClick = (href: string) => {
    router.push(href)
  }

  return (
    <div
      id="sidebar-menu"
      className={`absolute top-0 z-50 hidden h-full w-[290px] flex-col items-center bg-black p-5 transition-all lg:fixed lg:left-0 lg:flex lg:h-full lg:min-h-screen`}
    >
      {/* Avatar */}
      <div className="flex flex-col items-center gap-3">
        <Link href="/">
          <Image
            src="/peal-logo.png"
            alt="user"
            width={100}
            height={100}
            className="click-element cursor-pointer rounded-full"
          />
        </Link>
        <span className="max-w-[250px] text-center text-2xl font-bold">
          Pedro Edilásio Araújo Lopes{' '}
        </span>
      </div>

      {/* Redes Sociais */}
      <div className="mt-3 flex gap-5">
        <Link
          className="click-element flex h-8 w-8 items-center justify-center rounded-full border transition-all hover:border-primary hover:bg-primary hover:text-white"
          href="https://facebook.com/peal26"
          target="_blank"
        >
          <FaFacebookF />
        </Link>
        <Link
          className="click-element flex h-8 w-8 items-center justify-center rounded-full border transition-all hover:border-primary hover:bg-primary hover:text-white"
          href="https://instagram.com/peal_26"
          target="_blank"
        >
          <AiFillInstagram />
        </Link>
        <Link
          className="click-element flex h-8 w-8 items-center justify-center rounded-full border transition-all hover:border-primary hover:bg-primary hover:text-white"
          href="https://twitter.com/peal_26"
          target="_blank"
        >
          <FaTwitter />
        </Link>
        <Link
          className="click-element flex h-8 w-8 items-center justify-center rounded-full border transition-all hover:border-primary hover:bg-primary hover:text-white"
          href="https://linkedin.com/in/peal26"
          target="_blank"
        >
          <FaLinkedinIn />
        </Link>
        <Link
          className="click-element flex h-8 w-8 items-center justify-center rounded-full border transition-all hover:border-primary hover:bg-primary hover:text-white"
          href="https://github.com/peal-26"
          target="_blank"
        >
          <FiGithub className="fill-current" />
        </Link>
      </div>

      {/* Menus Links */}
      <ul className="mt-8 w-full overflow-y-auto">
        <li
          className={`click-element cursor-pointer rounded-md px-3 py-4 text-xl ${isActiveLink(
            '/biografia',
          )}`}
          onClick={() => handleLinkClick('/biografia')}
        >
          <Link href="/biografia">Biografia</Link>
        </li>
        <li
          className={`click-element cursor-pointer rounded-md px-3 py-4 text-xl ${isActiveLink(
            '/projectos',
          )}`}
          onClick={() => handleLinkClick('/projectos')}
        >
          <Link href="/projectos">Projectos</Link>
        </li>
        <li
          className={`click-element cursor-pointer rounded-md px-3 py-4 text-xl ${isActiveLink('/posts')}`}
          onClick={() => handleLinkClick('/posts')}
        >
          <Link href="/posts">Posts</Link>
        </li>
        <li
          className={`click-element cursor-pointer rounded-md px-3 py-4 text-xl ${isActiveLink(
            '/hobbies',
          )}`}
          onClick={() => handleLinkClick('/hobbies')}
        >
          <Link href="/hobbies">Hobbies</Link>
        </li>
      </ul>
    </div>
  )
}
