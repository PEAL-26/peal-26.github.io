'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'

import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'
import { appConfig } from '@/config/app-config'

const SOCIAL_MEDIAS = [
  { name: 'facebook', url: appConfig.facebookUrl, icon: <FaFacebookF /> },
  { name: 'instagram', url: appConfig.instagramUrl, icon: <AiFillInstagram /> },
  { name: 'twitter', url: appConfig.twitterUrl, icon: <FaTwitter /> },
  { name: 'linkedin', url: appConfig.linkedinUrl, icon: <FaLinkedinIn /> },
  { name: 'github', url: appConfig.githubUrl, icon: <FiGithub /> },
]

const MENUS = [
  {
    title: 'Biografia',
    href: '/biografia',
  },
  {
    title: 'Projectos',
    href: '/projectos',
  },
  {
    title: 'Posts',
    href: '/posts',
  },
  {
    title: 'Hobbies',
    href: '/hobbies',
  },
]

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
            src={appConfig.logoUrl}
            alt="peal-logo"
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
        {SOCIAL_MEDIAS.map((social, index) => (
          <Link
            key={index}
            className="click-element flex h-8 w-8 items-center justify-center rounded-full border transition-all hover:border-primary hover:bg-primary hover:text-white"
            href={social.url}
            target="_blank"
          >
            {social.icon}
          </Link>
        ))}
      </div>

      {/* Menus Links */}
      <ul className="mt-8 w-full overflow-y-auto">
        {MENUS.map((menu, index) => (
          <li
            key={index}
            className={`click-element cursor-pointer rounded-md px-3 py-4 text-xl ${isActiveLink(
              menu.href,
            )}`}
            onClick={() => handleLinkClick(menu.href)}
          >
            <Link href={menu.href}>{menu.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
