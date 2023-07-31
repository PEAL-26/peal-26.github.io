'use client'
import { useEffect, useState } from 'react'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { easeQuadInOut } from 'd3-ease'
import 'react-circular-progressbar/dist/styles.css'

import { AnimatedProgressProvider } from './animated-progress-provider'

interface CircleProgressBarProps {
  size?: number
  maxValue?: number
  percentage: number
}

export function CircleProgressBar(props: CircleProgressBarProps) {
  const { size = 50, maxValue = 1, percentage = 0 } = props

  return (
    <div style={{ width: size, height: size }}>
      <AnimatedProgressProvider valueStart={0} valueEnd={percentage} easingFunction={easeQuadInOut}>
        {(value) => {
          const roundedValue = Math.round(value)
          return (
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
              styles={buildStyles({ pathTransition: 'none' })}
            />
          )
        }}
      </AnimatedProgressProvider>
    </div>
  )
}
