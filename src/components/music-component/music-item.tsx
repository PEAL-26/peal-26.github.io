import { GiMicrophone } from 'react-icons/gi'
import { BiMusic } from 'react-icons/bi'

type IconType = 'mic' | 'music'
export type MusicItemDataType = { name: string }

interface Props {
  data: MusicItemDataType
  iconType: IconType
}

export default function MusicItem(props: Props) {
  const { data, iconType } = props

  return (
    <div className="flex justify-start items-center gap-3 bg-gray p-2 rounded-md">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white">
        {iconType === 'mic' ? (
          <GiMicrophone className="text-black/60" size={24} />
        ) : (
          <BiMusic className="text-black/60" size={24} />
        )}
      </div>
      <span className="text-xl font-bold">{data.name}</span>
    </div>
  )
}
