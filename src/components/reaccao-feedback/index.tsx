import { useState } from 'react'
import ReaccaoEmoji from '../reaccao-emoji'

export enum Reaccao {
  MUITO_MAU,
  MAU,
  BOM,
  MUITO_BOM,
}

interface Props {
  onReaccao(reaccao: Reaccao): void
}

export default function ReaccaoFeedback({ onReaccao }: Props) {
  const [activeStates, setActiveStates] = useState<boolean[]>([false, false, false, false])
  const handleChangeStateEmoji = (state: boolean, index: number) => {
    setActiveStates(
      activeStates.map((_, indexCurrent) =>
        indexCurrent === index && state ? (onReaccao && onReaccao(index), true) : false,
      ),
    )
  }

  return (
    <div className="flex space-x-1 pl-0 sm:pl-2">
      <ReaccaoEmoji
        emoji="muito-mau"
        activeState={activeStates[Reaccao.MUITO_MAU]}
        onChangeActiveState={(value) => handleChangeStateEmoji(value, Reaccao.MUITO_MAU)}
      />
      <ReaccaoEmoji
        emoji="mau"
        activeState={activeStates[Reaccao.MAU]}
        onChangeActiveState={(value) => handleChangeStateEmoji(value, Reaccao.MAU)}
      />
      <ReaccaoEmoji
        emoji="bom"
        activeState={activeStates[Reaccao.BOM]}
        onChangeActiveState={(value) => handleChangeStateEmoji(value, Reaccao.BOM)}
      />
      <ReaccaoEmoji
        emoji="muito-bom"
        activeState={activeStates[Reaccao.MUITO_BOM]}
        onChangeActiveState={(value) => handleChangeStateEmoji(value, Reaccao.MUITO_BOM)}
      />
    </div>
  )
}
