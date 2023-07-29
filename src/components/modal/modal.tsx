import { HTMLProps, MouseEvent, ReactNode, useEffect } from 'react'

interface ModalProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode
  isOpen: boolean
  block?: boolean
  onHide(state: boolean): void
}

export function Modal(props: ModalProps) {
  const { children, isOpen, block, onHide } = props

  const onHideModal = (e: MouseEvent) => {
    if (block) return

    e.stopPropagation()
    onHide(false)
    document.body.classList.remove('overflow-hidden')
  }

  useEffect(() => {
    if (isOpen) document.body.classList.add('overflow-hidden')
  }, [isOpen])

  return (
    <div
      data-open={isOpen}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 data-[open=true]:flex data-[open=false]:hidden"
      onClick={onHideModal}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col justify-between rounded-md border border-gray bg-black shadow"
      >
        {children}
      </div>
    </div>
  )
}
