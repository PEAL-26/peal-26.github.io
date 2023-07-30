'use client'
import { useEffect, useRef } from 'react'

export function ErrorPage() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const h2Ref = useRef<HTMLHeadingElement>(null)
  const pRef = useRef<HTMLParagraphElement>(null)
  const FiveOhFive = useRef<HTMLCanvasElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!wrapperRef.current || !h2Ref.current || !pRef.current || !FiveOhFive.current) return
    const wrapper = wrapperRef.current
    const heading = h2Ref.current
    const paragraph = pRef.current
    const left = leftRef.current
    const right = rightRef.current

    /* FiveOhFiveFont */
    var FiveOhFiveContext = FiveOhFive.current.getContext('2d')
    if (!FiveOhFiveContext) return

    FiveOhFiveFont(FiveOhFiveContext, FiveOhFive.current)
    FiveOhFiveContext.globalCompositeOperation = 'destination-out'

    function FiveOhFiveFont(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
      if (!FiveOhFiveContext) return

      FiveOhFiveContext.fillText('500', 275, 100)
      var grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      grad.addColorStop(0, '#303030')
      ctx.rect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = grad
      ctx.fill()
      ctx.fillStyle = '#b91c1c'
      ctx.font = '15em Roboto'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
    }

    /* wrapper */
    const wrapperW = wrapper.clientWidth
    const wrapperH = wrapper.clientHeight

    // Click event for left button
    const leftClickHandler = () => {
      for (let j = 1; j <= 500; j++) {
        const X = (Math.random() * wrapperW) % (wrapperW >> 0)
        const Y = (Math.random() * wrapperH) % (wrapperH >> 0)
        const nTop = Math.floor(Math.random() * wrapperW)
        const nLeft = Math.floor(Math.random() * wrapperH)
        const $child = left?.cloneNode(true) as HTMLElement

        wrapper.appendChild($child)
        $child.style.top = `${X}px`
        $child.style.left = `${-200 + Y}px`
        $child.animate({ top: `${nTop}px`, left: `${50 + nLeft}px` }, 8000)
      }
    }

    // Click event for right button
    const rightClickHandler = () => {
      for (let j = 1; j <= 500; j++) {
        const X = (Math.random() * wrapperW) % (wrapperW >> 0)
        const Y = (Math.random() * wrapperH) % (wrapperH >> 0)
        const nTop = Math.floor(Math.random() * wrapperW)
        const nLeft = Math.floor(Math.random() * wrapperH)
        const $child = right?.cloneNode(true) as HTMLElement

        wrapper.appendChild($child)
        $child.style.top = `${X}px`
        $child.style.left = `${500 + Y}px`
        $child.animate({ top: `${nTop}px`, left: `${270 + nLeft}px` }, 8000)
      }
    }

    // Fade in elements and trigger click events
    const fadeInElements = () => {
      wrapper.style.display = 'block'
      heading.style.display = 'block'
      paragraph.style.display = 'block'

      setTimeout(() => {
        if (left) left.click()
        if (right) right.click()
      }, 0)
    }

    fadeInElements()
  }, [])

  return (
    <>
      <div
        ref={wrapperRef}
        className="relative mx-auto mb-0 mt-[4%] h-[200px] max-h-[100%] w-[540px] max-w-[100%] overflow-hidden"
      >
        <div ref={leftRef} className="absolute z-[1] h-[200px] w-[550px] overflow-hidden">
          Error
        </div>
        <div
          ref={rightRef}
          className="absolute left-[80%] z-[1] h-[200px] w-[550px] overflow-hidden"
        >
          Error
        </div>
        <canvas ref={FiveOhFive} className="absolute z-10 h-[205px] w-[550px]" />
      </div>
      <h2
        ref={h2Ref}
        className="mx-auto mb-[10px] mt-[30px] w-[150px] rounded-[50px] bg-primary p-3 text-center font-bold text-white"
      >
        Oops :(
      </h2>
      <p ref={pRef} className="mx-auto my-0 w-[350px] text-center">
        Algo deu errado..
      </p>
    </>
  )
}
