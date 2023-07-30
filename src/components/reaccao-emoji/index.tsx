'use client'

import { useEffect, useState } from 'react'
import {
  BsEmojiFrownFill,
  BsEmojiExpressionlessFill,
  BsFillEmojiSmileFill,
  BsFillEmojiHeartEyesFill,
} from 'react-icons/bs'

export type EmojiType = 'muito-mau' | 'mau' | 'bom' | 'muito-bom'
interface Props {
  emoji: EmojiType
  activeState?: boolean
  onChangeActiveState?(state: boolean): void
}

const EMOJIS = {
  'muito-mau': { icon: <BsEmojiFrownFill size={20} />, color: '#ef4444' },
  mau: { icon: <BsEmojiExpressionlessFill size={20} />, color: '#f97316' },
  bom: { icon: <BsFillEmojiSmileFill size={20} />, color: '#eab308' },
  'muito-bom': { icon: <BsFillEmojiHeartEyesFill size={20} />, color: '#166534' },
}

export default function ReaccaoEmoji({ emoji, activeState = false, onChangeActiveState }: Props) {
  const [styles, setStyles] = useState({})
  const [isHover, setIsHover] = useState(false)

  const EmojiIcon = EMOJIS[emoji].icon
  const color = EMOJIS[emoji].color

  const handleChangeActive = () => {
    onChangeActiveState && onChangeActiveState(true)
  }

  const handleMouseEnter = () => {
    setIsHover(true)
  }

  const handleMouseLeave = () => {
    setIsHover(false)
  }

  useEffect(() => {
    const style = {
      active: {
        color,
        backgroundColor: `${color}40`,
      },
      inactive: {
        color: isHover ? color : '#D9D9D940',
        backgroundColor: isHover ? '' : '',
      },
    }[!!activeState ? 'active' : 'inactive']

    setStyles(style)
  }, [activeState, color, isHover])

  return (
    <button
      type="button"
      onClick={handleChangeActive}
      style={styles}
      className={`inline-flex cursor-pointer items-center justify-center rounded-md p-2 transition-all`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {EmojiIcon}
      <span className="sr-only">{emoji}</span>
    </button>
  )
}
