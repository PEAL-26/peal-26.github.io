import { ReactElement } from 'react'
import { Animate } from 'react-move'

interface AnimatedProgressProviderProps {
  valueStart?: number
  valueEnd: number
  easingFunction?(normalizedTime: number): number
  children: (value: number) => ReactElement
}

export function AnimatedProgressProvider(props: AnimatedProgressProviderProps) {
  const { valueStart = 0, valueEnd, easingFunction, children } = props

  return (
    <Animate
      start={() => ({
        value: valueStart,
      })}
      update={() => ({
        value: [valueEnd],
        timing: {
          duration: 1000,
          ease: easingFunction,
        },
      })}
    >
      {({ value }) => children(value)}
    </Animate>
  )
}
