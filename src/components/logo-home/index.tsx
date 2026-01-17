'use client'

import { appConfig } from '@/config/app-config'
import ModalImage from 'react-modal-image'

export default function LogoHome() {
  return (
    <ModalImage
      hideDownload
      className="h-[200px] w-[200px] cursor-pointer rounded-full"
      small={appConfig.logoUrl}
      large={appConfig.logoUrl}
      alt="PEAL"
    />
  )
}
