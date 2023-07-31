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
    <div className="mb-4 ml-4 inline-flex items-center justify-start gap-3 rounded-md bg-gray p-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white p-2">
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
