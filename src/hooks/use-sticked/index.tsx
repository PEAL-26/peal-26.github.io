import { useRef, useState, useEffect } from 'react'

export default function useSticked() {
  const [isSticked, setIsSticked] = useState(false)
  const refSticker = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const element = refSticker.current

      if (element) {
        const { offsetTop } = element
        const { scrollTop } = document.documentElement
        const position = offsetTop - scrollTop

        setIsSticked(position <= 0)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isSticked])

  return { isSticked, refSticker }
}
