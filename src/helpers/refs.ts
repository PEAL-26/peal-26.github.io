import { useRef } from 'react'

export const setListRefs = <Element>(length: number) =>
  Array.from({ length }, () => useRef<Element>(null))
