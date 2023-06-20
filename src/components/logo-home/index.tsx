'use client'

import ModalImage from 'react-modal-image'

export default function LogoHome() {
  return (
    <ModalImage
      hideDownload
      className="h-[200px] w-[200px] cursor-pointer rounded-full"
      small={'/peal-logo.png'}
      large={'/peal-logo.png'}
      alt="PEAL"
    />
  )
}
