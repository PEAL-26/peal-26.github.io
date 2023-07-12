'use client'

import { HTMLAttributes, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export default function SectionContent({ children, ...rest }: Props) {
  return (
    <div {...rest} className={twMerge('section-content', rest.className)}>
      {children}
    </div>
  )
}
