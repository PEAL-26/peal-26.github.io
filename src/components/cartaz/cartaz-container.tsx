import { HTMLAttributes, ReactNode, useRef, useState, useEffect } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  visible?: boolean
}

export default function CartazContainer({ children, visible = true, ...rest }: Props) {
  const divMainRef = useRef<HTMLDivElement>(null)
  const [scrollHeight, setScrollHeight] = useState(0)
  const [arrowVisibility, setArrowVisibility] = useState('none')

  const scrollLeft = () => {
    if (!divMainRef.current) return

    const container = divMainRef.current
    container.scrollLeft -= 100
  }

  const scrollRight = () => {
    if (!divMainRef.current) return

    const container = divMainRef.current
    container.scrollLeft += 100
  }

  useEffect(() => {
    if (divMainRef.current) {
      setScrollHeight(divMainRef.current.scrollHeight)
      setArrowVisibility('flex')
    }
  }, [visible])

  return (
    <>
      <div
        ref={divMainRef}
        {...rest}
        className="absolute flex w-full gap-3 overflow-x-hidden rounded-md"
      >
        {children}
      </div>
      {scrollHeight > 0 && (
        <>
          <div
            onClick={scrollLeft}
            className={`absolute bottom-0 left-0 top-0 hidden cursor-pointer items-center rounded-l-md bg-gradient-to-r  px-1 font-bold text-white transition-all hover:from-primary`}
            style={{ height: scrollHeight, display: arrowVisibility }}
          >
            <BsChevronLeft size={24} />
          </div>
          <div
            onClick={scrollRight}
            className={`absolute bottom-0 right-0 top-0 hidden cursor-pointer items-center rounded-r-md bg-gradient-to-l px-1 font-bold text-white  transition-all hover:from-primary`}
            style={{ height: scrollHeight, display: arrowVisibility }}
          >
            <BsChevronRight size={24} />
          </div>
        </>
      )}
    </>
  )
}
