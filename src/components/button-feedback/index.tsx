'use client'
import Tippy from '@tippyjs/react'

import FeedbackIcon from '../feedback-icon'
import FormularioFeedback from '../formulario-feedback'

export default function ButtonFeedback() {
  return (
    <Tippy
      content={<FormularioFeedback />}
      allowHTML
      interactive
      duration={0}
      animation="perspective-subtle"
      trigger="click"
      placement="bottom-end"
    >
      <button type="button" className="group rounded-md p-2 hover:bg-gray">
        <FeedbackIcon className="h-8 w-8 fill-white/70 group-hover:fill-white" />
      </button>
    </Tippy>
  )
}
