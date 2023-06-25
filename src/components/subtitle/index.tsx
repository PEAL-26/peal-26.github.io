import { forwardRef } from 'react'

interface Props {
  value: string
}

const Subtitle = forwardRef<HTMLHeadingElement, Props>(({ value }, ref) => {
  return (
    <h2 ref={ref} className="text-lg font-bold">
      {value}
    </h2>
  )
})

Subtitle.displayName = 'Subtitle'
export default Subtitle
