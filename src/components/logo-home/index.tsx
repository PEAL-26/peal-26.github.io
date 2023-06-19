'use client'

import ModalImage from 'react-modal-image'

export default function LogoHome() {
  // TODO Remover o /peal do link depois
  return (
    <ModalImage
      hideDownload
      className="h-[200px] w-[200px] cursor-pointer rounded-full"
      small={'/peal/peal-logo.png'}
      large={'/peal/peal-logo.png'}
      alt="PEAL"
    />
  )
}
